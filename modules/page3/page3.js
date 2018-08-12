define(function(require, exports, module) {
    var util = require('util');
    return {
        template: require('text!modules/page3/page3.tpl'),
        data: function() {
            return {}
        },
        created() {

        },
        methods: {
            showPage1: function() {
                this.$router.push({
                    name: 'one'
                });
            }
        }
    }
})