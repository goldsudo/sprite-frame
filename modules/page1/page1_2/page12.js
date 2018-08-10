define(function(require, exports, module) {
    var util = require('util');
    var tpl = require('text!modules/page1/page1_2/template.html');

    return function() {
        var page = {
            template: tpl,
            data: function() {
                return {
                    name: "小亮",
                    email: "xiaoliang@wisedu.com",
                    birthday: "1990-01-01"
                }
            },
            created: function() {},
            methods: {
                showPage2: function() {
                    var param = {
                        from: "2",
                        name: this.name,
                        email: this.email,
                        birthday: this.birthday
                    };
                    this.$router.push({ name: 'two', params: param });
                }
            }
        }

        return page;
    }

})