define(function(require, exports, module) {
    return {
        template: require('text!modules/tabdemo/tabmain.tpl'),
        data: function() {
            return {
                selectedTab: "tab1"
            };
        },
        created: function() {
            if (this.$route.name == "tabmain" || this.$route.path == "/" || this.$route.name == "tab1") {
                this.selectedTab = "tab1";
                this.$router.replace({
                    name: 'tab1'
                });
            } else if (this.$route.name == "tab2") {
                this.selectedTab = "tab2";
                this.$router.replace({
                    name: 'tab2'
                });
            }
        },
        methods: {
            showTab1: function() {
                this.$router.replace({
                    name: 'tab1'
                });
            },
            showTab2: function() {
                this.$router.replace({
                    name: 'tab2'
                });
            }
        }
    };

});