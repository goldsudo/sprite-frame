define(function(require, exports, module) {
    require('css!modules/page1/page11/page11.css');
    var util = require('util');
    return {
        template: require('text!modules/page1/page11/page11.tpl'),
        data: function() {
            return {
                name: "小明",
                phone: "15033129823",
                idCard: "520182198712030433"
            }
        },
        created: function() {
            this.title = this.$route.params.title;
        },
        mounted: function() {
            $('#page1').data('test', 'jswang');
        },
        methods: {
            showPage2: function() {
                var param = {
                    from: "1",
                    name: this.name,
                    phone: this.phone,
                    idCard: this.idCard
                };
                this.$router.push({
                    name: 'two',
                    params: param
                });
            },
            showpage1_1_1: function() {
                this.$router.push({
                    name: 'page111'
                });
            }
        }
    }
})