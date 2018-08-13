define(function(require, exports, module) {
    return {
        template: require('text!modules/childrendemo/children/children.tpl'),
        data: function() {
            return {
                text:"Hi!这是子页面children2"
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