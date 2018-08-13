define(function(require, exports, module) {
    return {
        template: require('text!modules/childrendemo/children/children.tpl'),
        data: function() {
            return {
                text:"Hi! 这是子页面children1的子页面children1_1"
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