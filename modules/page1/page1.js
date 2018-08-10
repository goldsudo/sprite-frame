define(function(require, exports, module) {
    return {
        template: require('text!modules/page1/page1.tpl'),
        data: function() {
            return {
                name: "one1111",
                selected: "1"
            }
        },
        created: function() {
            if (this.$route.params.selected) {
                this.selected = this.$route.params.selected;
            }
            this.init();
            if (this.selected === "1") {
                this.showPage11();
            } else if (this.selected === "2") {
                this.showPage12();
            }
        },
        mounted: function() {
            console.log("***jqueryTest***:" + $('#page1').data('test'));
        },
        methods: {
            init: function() {
                console.log(this.name);
            },
            showPage11: function() {
                this.$router.push({
                    name: 'page11'
                });
            },
            showPage12: function() {
                this.$router.push({
                    name: 'page12'
                });
            },
            backIndex: function() {
                this.$router.push('/');
            }
        }
    }
})