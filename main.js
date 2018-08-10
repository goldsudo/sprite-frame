require(_REQUIREARR_, function(Vue, VueRouter, mintUI, util, $, axios, deferred) {
    window.axios = axios;
    Vue.use(VueRouter);
    Vue.use(mintUI);

    //根据route.js中的配置生成vue路由数组
    const routes = util.getVueRoute(arguments);

    const router = new VueRouter({
        routes: routes
    })

    //挂载主vue对象
    app = new Vue({
        el: '#app',
        data: {
            hello: "hello vue"
        },
        router
    });

    $('#app').before('<div>JQEURY</div>');
    var testFunc = function() {
        var dfd = $.Deferred();
        setTimeout(function() {
            dfd.resolve("hello zepto");
        }, 2000);
        return dfd;
    }
    testFunc().then(function(str) {
        alert(str);
    });


});