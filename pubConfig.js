window._REQUIRECONFIG_ = {
    baseUrl: '/',
    paths: {
        vue: 'lib/vue',
        vueRouter: 'lib/vue-router',
        text: 'lib/require-text',
        css: 'lib/require-css',
        util: 'public/util/util',
        MINT: 'lib/mint/index',
        zepto: 'lib/zepto.min',
        deferred: 'lib/zepto.deferred',
        callbacks: 'lib/zepto.callbacks',
        axios: 'lib/axios'
    },
    shim: {
        'MINT': {
            deps: ['vue', 'css!lib/mint/style.css']
        },
        'deferred': {
            deps: ['zepto','callbacks']
        }
    }
};
window._REQUIRDEFAULTEARR_ = ['vue', 'vueRouter', 'MINT', 'util', 'zepto', 'axios','deferred'];

window._REQUIREARR_ = [].concat(window._REQUIRDEFAULTEARR_);

for (var key in window.PAGE_ARR) {
    window._REQUIRECONFIG_.paths[PAGE_ARR[key].id] = PAGE_ARR[key].vueJsPath;
    window._REQUIREARR_.push(PAGE_ARR[key].id);
}

require.config(window._REQUIRECONFIG_);