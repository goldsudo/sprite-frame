define(function(require, exports, module) {
    var util = require('util');
    var api = require('api');
    return {
        template: require('text!modules/page2/page2.tpl'),
        data: function() {
            return {
                name: "",
                phone: "",
                idCard: "",
                birthday: "",
                email: "",
                fromTab1: true,
                from: ""
            }
        },
        created: function() {
            axios({
                method: 'get',
                url: api.getMenuInfo
            }).then(function(data) {
                console.log(data);
            }).catch(function(error) {
                console.log(error)
            });
            var param = this.$route.params;
            this.name = param.name;
            this.phone = param.phone;
            this.idCard = param.idCard;
            this.birthday = param.birthday;
            this.email = param.email;
            this.from = param.from;
            if (this.from !== "1") {
                this.fromTab1 = false;
            }
            util.warn();
        },
        methods: {
            showPage1: function() {
                this.$router.push({
                    name: "one",
                    params: {
                        selected: this.from
                    }
                });
            }
        }
    }
})