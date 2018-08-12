define(function(require, exports, module) {
    require('css!spriteComponent/selectrole/selectrole.css');
    var spriteUtil = require('spriteUtil');
    return {
        template: require('text!spriteComponent/selectrole/selectrole.tpl'),
        data: function() {
            return {
                //当前展示的数组
                roleList: []
            };
        },
        created: function() {
            this.getRoleList();
        },
        methods: {
            /**
             * 查询用户角色
             */
            getRoleList: function() {
                spriteUtil.doGet({
                    url: "sprite/components/selectrole/roleMapping.json"
                }).then(function(res) {
                    this.roleList = res.roleList;
                }.bind(this));
            },
            /**
             * 点击角色进入角色配置页面
             */
            gotoTargetMenu: function(role) {
                spriteUtil.doGet({
                    url: "/sprite/pageRegister.json"
                }).then(function(res) {
                    this.pageFilter(res.pages, role.pages);
                    SPRITE_LOCAL.AUTH_PAGES = res.pages;
                    SPRITE_LOCAL.AUTH_DOMS = role.doms;
                    spriteUtil.initApp(function() {
                        //应用初始化完成后删除掉选择角色的dom
                        $('#selectrole').remove();
                    });
                }.bind(this));
            },
            pageFilter: function(allPages, rolePages) {
                var i = allPages.length;
                while (i--) {
                    if (rolePages.indexOf(allPages[i].id) < 0) {
                        allPages.splice(i, 1);
                    }
                }
            }
        }
    };

});