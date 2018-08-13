define(function(require, exports, module) {
    //加载当前页面对应的css
    require('css!modules/pagedemo/page.css');
    //返回一个vue对象，在该对象内实现业务逻辑
    return {
        //加载tpl模板文件
        template: require('text!modules/pagedemo/page.tpl'),
        data: function() {
            return {
                //key:value
            };
        },
        created: function() {
            //do something when page created...
        },
        methods: {
            //define business logic here...
        }
    };

});