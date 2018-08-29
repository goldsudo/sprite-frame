define(function(require, exports, module) {
    return {
        template: require('text!spriteComponent/home/home.tpl'),
        data: function() {
            return {
                homeSelectedTab: "",
                pageList: window.SPRITE_LOCAL.indexPages
            };
        },
        mounted: function() {
            this.homeSelectedTab = this.$route.meta.index;
        },
        watch: {
            '$route': function(to, from) {
                if (this.$route.meta.index) {
                    this.homeSelectedTab = this.$route.meta.index;
                }
            }
        },
        methods: {
            changePage: function(page) {
                this.$router.replace({
                    name: page.name
                });
            }
        }
    };

});