define(function(require, exports, module) {
    return {
        template: require('text!modules/childrendemo/parent.tpl'),
        data: function() {
            return {
                text:"Hi! 这是父页面parent"
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