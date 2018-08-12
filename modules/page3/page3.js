define(function(require, exports, module) {
    require('css!modules/page3/page3.css');
    var util = require('util');
    return {
        template: require('text!modules/page3/page3.tpl'),
        data: function() {
            return {
                sheetVisible: false,
                actions: [{
                    name: '菜单一',
                    method: function() {
                        mintUI.Toast("点击了菜单一");
                    }
                }, {
                    name: '菜单二',
                    method: function() {
                        mintUI.Toast("点击了菜单一");
                    }

                }]
            }
        },
        created() {

        },
        methods: {
            showActionSheet: function() {
                this.sheetVisible = true;
            }
        }
    }
})