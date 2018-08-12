(function(require) {
    //require路径配置
    var requireConfig = {
        paths: {
            vue: 'lib/vue',
            vueRouter: 'lib/vue-router',
            text: 'lib/require-text',
            css: 'lib/require-css',
            util: 'public/util/util',
            MINT: 'lib/mint/index',
            zepto: 'lib/zepto.min',
            deferred: 'lib/zepto.deferred',
            callbacks: 'lib/zepto.callbacks',
            axios: 'lib/axios',
            spriteComponent: 'sprite/components',
            home: 'sprite/components/home/home',
            selectrole:'sprite/components/selectrole/selectrole'
            // selectRoleIndex: '../../swpubapp/public/mob/component/selectrole/selectrole',
            // publicVueComponent: '../../swpubapp/public/mob/component',
        },
        shim: {
            'MINT': {
                deps: ['vue', 'css!lib/mint/style.css']
            },
            'deferred': {
                deps: ['callbacks']
            },
            'callbacks': {
                deps: ['zepto']
            }
        }
    };

    /**
     * appLoadAsync用于控制app页面的加载方式
     * true: app的所有页面为异步加载，只在使用到时加载
     * false: app的所有页面在应用初始化时一次性加载
     */
    var appLoadAsync = false;

    //默认的组件库和公共方法以及公共页面
    var requir_default_arr = ['vue', 'vueRouter', 'MINT', 'zepto', 'axios', 'deferred'];

    //注册公共组件
    var default_component_arr = [
        // {
        //     name: 'auditProcess',
        //     jsPath: 'publicVueComponent/auditprocess/auditProcess'
        // }, {
        //     name: 'noneDatas',
        //     jsPath: 'publicVueComponent/nonedatas/nonedatas'
        // }
    ];

    /**
     * 用于保存sprite初始化应用所需的全局对象
     * DEFAULT_COMPONENTS: 公共组件
     * AUTH_PAGES: 有权访问的页面
     * AUTH_DOMS: 有权查看的dom
     * NEED_SELECTROLE: 是否需要选择角色
     */
    window.SPRITE_LOCAL = {
        DEFAULT_COMPONENTS: default_component_arr,
        AUTH_PAGES: [],
        AUTH_DOMS: [],
        NEED_SELECTROLE: false
    };

    //配置require
    require.config(requireConfig);

    //加载框架所需的库和公共页面
    require(requir_default_arr, function(Vue, VueRouter, mintUI, $, axios, deferred) {
        //将各个组件库输出到全局作用域
        window.axios = axios;
        window.Vue = Vue;
        window.VueRouter = VueRouter;
        window.mintUI = mintUI;

        //开启loading动画
        mintUI.Indicator.open({
            text: '加载中...',
            spinnerType: 'snake'
        });

        //vue路由组件
        Vue.use(VueRouter);
        //饿了么移动端组件mint-ui
        Vue.use(mintUI);

        require(["spriteUtil"], function(spriteUtil) {
            //获取角色配置相关参数 --> 获取用户授权功能 --> 初始化应用
            spriteUtil.checkNeedSelectRole().then(spriteUtil.getAppConfig).then(spriteUtil.initApp);
        });
    });

    /**
     * ------------- spriteUtil: sprite框架所需工具 --------------
     */
    define("spriteUtil", function(require) {
        var spriteUtil = {
            /**
             * 初始化应用
             */
            initApp: function(callBack) {
                addCallback(callBack);
                requireAndInit();
            },
            /**
             * 初始化应用--游客模式
             */
            initApp_visitor: function(callBack) {
                addCallback(callBack);
                // 游客模式依赖 VISITOR_CONFIG 对象
                if (!window.VISITOR_CONFIG || !(window.VISITOR_CONFIG.PAGES instanceof Array)) {
                    console.error("the VISITOR_CONFIG is not defined , whitch is required in the visitor mode !");
                    return;
                }
                //将页面注册到全局对象中
                SPRITE_LOCAL.AUTH_PAGES = window.VISITOR_CONFIG.PAGES;
                //游客模式无需选择角色
                SPRITE_LOCAL.NEED_SELECTROLE = false;
                requireAndInit();
            },
            /**
             * 加载组件
             */
            loadComponent: function(path) {
                return function() {
                    var dfd = $.Deferred();
                    require([path], function(page) {
                        var component = page;
                        component.template = compileTpl(component.template);
                        dfd.resolve(component);
                    });
                    return dfd;
                };
            },
            /**
             * 判断是否进入角色选择页
             * 如果用户有且只有一个角色，直接渲染该角色有权限的页面，否则进入角色选择页面
             * IS_NEED_SELECTROLE：0代表无需选择角色，直接初始化应用 1代表需要选择角色，跳转角色选择页面
             */
            checkNeedSelectRole: function() {
                var dfd = $.Deferred();
                SPRITE_LOCAL.NEED_SELECTROLE = true;
                dfd.resolve();
                return dfd;
            },
            /**
             * 获取应用配置信息
             */
            getAppConfig: function(fromSelectRole) {
                var dfd = $.Deferred();
                // 如果需要选择角色则只加载角色选择页
                if (!fromSelectRole && SPRITE_LOCAL.NEED_SELECTROLE) {
                    SPRITE_LOCAL.AUTH_PAGES = [{
                        location: 'selectrole'
                    }];
                    dfd.resolve();
                } else {
                    /**
                     *TODO 该方法需要根据系统业务自行实现
                     *本例从mock数据中获取应用页面与dom权限配置 
                     */
                    spriteUtil.doGet({
                        url: "/sprite/pageRegister.json"
                    }).then(function(res) {
                        SPRITE_LOCAL.AUTH_PAGES = res.pages;
                        SPRITE_LOCAL.AUTH_DOMS = res.doms;
                        dfd.resolve();
                    });
                }
                return dfd;
            },
            /** 
             * 执行get请求
             */
            doGet: function(param) {
                return doHttp({
                    method: 'get',
                    params: param.params,
                    url: param.url
                });
            },
            /**
             * 执行post请求
             */
            doPost: function(param) {
                return doHttp({
                    method: 'post',
                    //axios执行psot需要使用data(而不是params)传参，否则参数将凭借在url尾部与执行get没有区别
                    data: param.params ? param.params : {},
                    url: param.url
                });
            }
        };

        var firstInit = true; //应用首次初始化(需要选角色时存在第二次初始化)
        var callbacks = [defaultCallback]; //回调集合

        /**
         * 应用初始化完成的默认回调函数
         */
        function defaultCallback() {
            mintUI.Indicator.close();
            if (firstInit) {
                console.log('|---sprite---|  App init finished,have fun!  |---sprite---|');
                firstInit = false;
            }
        }

        /**
         * 新增回调
         */
        function addCallback(callback) {
            if (callback) {
                if (callback instanceof Function) {
                    callbacks.push(callback)
                }
                if (callback instanceof Array) {
                    var allIsFunc = callback.every(function(c) {
                        return c instanceof Function;
                    });
                    if (allIsFunc) {
                        callbacks = callbacks.concat(callback);
                    }
                }
            }
        }

        /**
         * 执行回调
         */
        function finishedCallback() {
            callbacks.forEach(function(callback) {
                callback();
            });
        }

        /** 
         * 加载组件与页面进行初始化
         */
        function requireAndInit() {
            var require_page_path = []; //页面模块js路径
            var require_component_path = []; //公共组件js路径
            setJsPath(require_page_path, require_component_path);

            //需要选择角色
            var needSelectRole = SPRITE_LOCAL.NEED_SELECTROLE && require_page_path[0] == "selectrole";

            //加载公共组件
            require(require_component_path, function() {
                //注册公共组件
                SPRITE_LOCAL.DEFAULT_COMPONENTS.forEach(function(defaultComponent) {
                    Vue.component(defaultComponent.name, spriteUtil.loadComponent(defaultComponent.jsPath));
                });
                //异步按需加载
                if (appLoadAsync) {
                    var needSDK = true;
                    init(needSDK, needSelectRole);
                }
                //全部加载
                else {
                    require(require_page_path, function() {
                        var needSDK = true;
                        init(needSDK, needSelectRole);
                    });
                }
            });
        }

        /**
         * 设置页面与组件的js文件路径
         */
        function setJsPath(require_page_path, require_component_path) {
            if (SPRITE_LOCAL.AUTH_PAGES instanceof Array) {
                //页面模块js路径
                SPRITE_LOCAL.AUTH_PAGES.forEach(function(pageModule) {
                    require_page_path.push(pageModule.location);
                });
            }
            if (SPRITE_LOCAL.DEFAULT_COMPONENTS instanceof Array) {
                //公共组件js路径
                SPRITE_LOCAL.DEFAULT_COMPONENTS.forEach(function(defaultComponent) {
                    require_component_path.push(defaultComponent.jsPath);
                });
            }
        }

        /**
         * 应用初始化
         */
        function init(needSDK, needSelectRole) {
            var routes = [];

            var rootDiv = '#app';
            //初始化角色选择页面
            if (needSelectRole) {
                rootDiv = '#selectrole';
                routes = [{
                    path: '/',
                    name: 'selectrole',
                    component: spriteUtil.loadComponent('selectrole')
                }];
            }
            //初始化当前用户有权限访问的页面
            else {
                routes = getVueRoute();
            }

            //生成VueRouter对象
            var router = new VueRouter({
                routes: routes
            });

            var hasAuth = checkAuth(routes);

            //无权限hash置空
            if (!hasAuth) {
                location.hash = '#/';
            }

            //路由切换完成后执行的操作
            router.afterEach(function(to, from, next) {
                //页面离开时，关闭messagebox
                mintUI.MessageBox.close();
                /**
                 * 在切换路由后自动执行一个轻微滑动
                 * 这样写的原因：ios在页面的高度比较高时，从其他页面返回该页面将会出现页面空白的现象
                 * 需要轻触屏幕进行滑动才能恢复原页面
                 */
                if (!to.meta.keepAlive && !from.meta.keepAlive) {
                    var top = document.body.scrollTop;
                    document.body.scrollTop = top + 1;
                    setTimeout(function() {
                        document.body.scrollTop = top - 1;
                    }, 0);
                }
            });

            //挂载主vue对象
            app = new Vue({
                el: rootDiv,
                router: router
            });

            finishedCallback()
        }

        /**
         * 校验当前hash是否属于用户权限范围内
         */
        function checkAuth(routes) {
            return routes.some(function(route) {
                //当前route包含于hash中，代表有权限
                if (location.hash.indexOf(route.name) > 0) {
                    return true;
                } else {
                    //当前route不包含于hash中，递归检测其子route
                    if (route.children && route.children.length > 0) {
                        if (checkAuth(route.children)) {
                            return true;
                        }
                    }
                }
                return false;
            });
        }

        /**
         * 根据加载的页面列表获取Vue路由数组
         */
        function getVueRoute() {
            var routes = [];
            //获取页面vue对象以及子节点列表
            var childrenIdList = [];
            SPRITE_LOCAL.AUTH_PAGES.forEach(function(page, pageIndex) {
                page.index = pageIndex;
                page.component = loadPage(page.location, page.components);
                if (page.children && page.children instanceof Array) {
                    childrenIdList = childrenIdList.concat(page.children);
                }
            });

            //构建子节点映射，通id可以获取到这个子节点，并且在原数组中标记子节点的isChild为true
            var childrenObjs = {};
            childrenIdList.forEach(function(childId, index) {
                SPRITE_LOCAL.AUTH_PAGES.forEach(function(page, index) {
                    if (page.id === childId) {
                        page.isChild = true;
                        childrenObjs[page.id] = page;
                    }
                });
            });

            var indexPages = []; //首页集合
            //把SPRITE_LOCAL.AUTH_PAGES解析为vue的路由数组
            SPRITE_LOCAL.AUTH_PAGES.forEach(function(page, index) {
                if (!page.isChild) {
                    var pageComponent = page.component; //vue组件对象
                    var pageName = page.id; //路由跳转名称
                    var pagePath = "/" + page.id; //路由路径
                    var isIndex = page.isIndex === "true"; //是否首页
                    var needCache = page.keepAlive === "true"; //是否缓存

                    var routeObj = {};
                    routeObj.path = pagePath;
                    routeObj.component = pageComponent;
                    routeObj.name = pageName;
                    routeObj.meta = {
                        keepAlive: needCache
                    };
                    addChildrenRoute(page, routeObj, childrenObjs);

                    if (isIndex) {
                        //配置为多首页时使用
                        routeObj.meta.index = page.id; //首页标识
                        routeObj.meta.indexIcon = page.indexIcon; //首页图表
                        routeObj.meta.indexName = page.indexName; //首页中文名
                        indexPages.push(routeObj);
                    } else {
                        routes.push(routeObj);
                    }
                }
            });

            return homePageProcess(routes, indexPages);
        }

        /**
         * 加载页面
         */
        function loadPage(path, components) {
            return function() {
                var dfd = $.Deferred();
                spriteUtil.loadComponent(path)().then(function(page) {
                    //注册应用自定义组件
                    if (!page.components) {
                        page.components = {};
                    }
                    if (components && components instanceof Array) {
                        components.forEach(function(component) {
                            page.components[component.name] = spriteUtil.loadComponent(component.jsPath);
                        });
                    }
                    dfd.resolve(page);
                });

                return dfd;
            };
        }

        /**
         * 递归添加子路由
         */
        function addChildrenRoute(page, routeObj, childrenObjsMap) {
            //如果当前页面存在子页面，则将子页面加入当前页面的子路由
            if (page.children && page.children instanceof Array) {
                routeObj.children = [];
                page.children.map(function(childId, index) {
                    var child = childrenObjsMap[childId];
                    var needCache = child.keepAlive === "true";
                    var childrouteObj = {};
                    childrouteObj.component = child.component;
                    childrouteObj.name = child.id;
                    childrouteObj.path = child.id;
                    childrouteObj.meta = {};
                    childrouteObj.meta.keepAlive = needCache;
                    //递归添加子页面的子页面
                    addChildrenRoute(child, childrouteObj, childrenObjsMap);
                    routeObj.children.push(childrouteObj);
                });
            }
        }

        /**
         * 处理首页
         */
        function homePageProcess(routes, indexPages) {
            SPRITE_LOCAL.indexPages = indexPages;
            //至少需要一个首页
            if (indexPages.length == 0) {
                throw new Error("need at least one home page!");
            }
            //单首页
            if (indexPages.length == 1) {
                routes.push(indexPages[0]);
                routes.push({
                    path: '/',
                    component: indexPages[0].component,
                    children: indexPages[0].children || [],
                    meta: {
                        keepAlive: indexPages[0].meta.keepAlive
                    }
                });
            }
            //多首页
            if (indexPages.length > 1) {
                var home = {
                    path: '/',
                    component: spriteUtil.loadComponent('home'),
                    children: indexPages,
                    redirect: indexPages[0].path
                };
                routes.push(home);
            }
            return routes;
        }

        /**
         * 正则扫描模板文件，实现按钮权限
         */
        function compileTpl(tpl) {
            //获取tpl中所有权限id
            var tplIds = [];
            var result;
            var pattern = new RegExp('auth-id=[\'|\"]{1}[^\'^\"]+[\'|\"]{1}', 'gm');
            while ((result = pattern.exec(tpl)) != null) {
                tplIds.push(result[0].substring(9, result[0].length - 1));
            };
            if (tplIds.length == 0) {
                return tpl;
            }

            //删除所有无权限的dom
            tplIds.forEach(function(id, index) {
                if (SPRITE_LOCAL.AUTH_DOMS.indexOf(id) < 0) {
                    var regExp = new RegExp('<[^/].*(auth.*?auth-id=[\'|\"]{1}' + id + '{1}[\'|\"]{1}).*>[^<]*?</.*(auth)?.*>', 'gm')
                    tpl = tpl.replace(regExp, "");
                }
            });

            return tpl;
        }

        /**
         * axios执行http请求
         */
        function doHttp(axiosOption) {
            var dfd = $.Deferred();
            mintUI.Indicator.open();
            axios(axiosOption).then(function(res) {
                mintUI.Indicator.close();
                dfd.resolve(res.data || res);
            }).catch(function(err) {
                //打印堆栈
                console.error(err);
                mintUI.Indicator.close();
                if (err.response) {
                    mintUI.MessageBox('网络错误(' + err.response.status + ')', err.message);
                } else {
                    err.message = err.message == 'Network Error' ? '网络连接不可用' : err.message;
                    mintUI.MessageBox('错误', err.message);
                }
                dfd.reject(err);
            });
            return dfd;
        }

        return spriteUtil;
    });
}(require));