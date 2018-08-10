define(function() {
    var util = {
        add: function(a, b) {
            return a + b;
        },
        warn: function() {
            console.warn("warn!")
        },
        getVueRoute: function(_arguments) {
            var self = this;
            var routes = [];

            //获取arguments参数数组，从第一个非组件的位置开始获取，之后的所有参数都认为是vue页面
            var pages = [];
            for (var i = _REQUIRDEFAULTEARR_.length; i < _arguments.length; ++i) {
                var pageInit = _arguments[i];
                pages.push(pageInit());
            }

            //子节点列表
            var idList = [];
            var childrenIdList = [];
            for (var i = 0; i < PAGE_ARR.length; ++i) {
                idList.push(PAGE_ARR[i].id);
                PAGE_ARR[i].index = i;
                PAGE_ARR[i].component = pages[i];
                if (PAGE_ARR[i].childrenIds && PAGE_ARR[i].childrenIds instanceof Array) {
                    childrenIdList = childrenIdList.concat(PAGE_ARR[i].childrenIds);
                }
            }

            //构建子节点映射，通id可以获取到这个子节点，并且再原数组中标记子节点的isChild为true
            var childrenObjs = {};
            for (var i = 0; i < childrenIdList.length; ++i) {
                for (var j = 0; j < PAGE_ARR.length; ++j) {
                    if (PAGE_ARR[j].id === childrenIdList[i]) {
                        PAGE_ARR[j].isChild = true;
                        var key = PAGE_ARR[j].id;
                        childrenObjs[key] = PAGE_ARR[j];
                    }
                }
            }

            //把PAGE_ARR解析为vue的路由数组
            for (var i = 0; i < PAGE_ARR.length; ++i) {
                var page = PAGE_ARR[i];
                if (!page.isChild) {
                    //页面对应vue组件
                    var pageComponent = page.component;
                    //路由跳转时用到的名称
                    var pageName = page.vueRouteName;
                    //路由路径
                    var pagePath = page.vueRoute;

                    //判断是否是首页
                    if (page.isIndex) {
                        routes.push({
                            path: '/',
                            component: pageComponent
                        });
                    }

                    var routeObj = {};
                    routeObj.path = pagePath;
                    routeObj.component = pageComponent;
                    routeObj.name = pageName;
                    //递归添加子路由
                    self.addChildrenRoute(page, routeObj, childrenObjs);
                    //将当前页面增加到vue的路由对象中
                    routes.push(routeObj);
                }
            }

            return routes;
        },
        addChildrenRoute: function(page, routeObj, childrenObjs) {
            var self = this;
            //如果当前页面存在子页面，则将子页面加入当前页面的子路由
            if (page.childrenIds && page.childrenIds instanceof Array) {
                routeObj.children = [];
                page.childrenIds.map(function(childId, index) {
                    var child = childrenObjs[childId];
                    var childrouteObj = {};
                    childrouteObj.component = child.component;
                    childrouteObj.name = child.vueRouteName;
                    childrouteObj.path = child.vueRoute.substr(child.vueRoute.indexOf('/') + 1);
                    //递归添加子页面的嵌套子页面
                    self.addChildrenRoute(child, childrouteObj, childrenObjs);
                    routeObj.children.push(childrouteObj);
                });
            }
            //递归出口
            else {
                return;
            }
        }
    }

    return util;
})