define(function(require, exports, module) {
    var util = require('util');
    var tpl = require('text!modules/page0/template.html');

    return function() {
        var page = {
            template: tpl,
            data: function() {
                return {}
            },
            created() {

            },
            methods: {
                showPage1: function() {
                    this.$router.push({ name: 'one' });
                }
            }
        }
        return page;
    }

})