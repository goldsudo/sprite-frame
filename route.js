window.PAGE_ARR = [{
        id: "zero",
        vueJsPath: "modules/page0/page0",
        vueRoute: "/zero",
        vueRouteName: "zero",
        isIndex: true
    },
    {
        id: "one",
        vueJsPath: "modules/page1/page1",
        vueRoute: "/one",
        vueRouteName: "one",
        childrenIds: ['page1_1', 'page1_2']
    },
    {
        id: "page1_1",
        vueJsPath: "modules/page1/page1_1/page11",
        vueRoute: "/page1_1",
        vueRouteName: "page1_1",
        childrenIds: ['page1_1_1']
    },
    {
        id: "page1_2",
        vueJsPath: "modules/page1/page1_2/page12",
        vueRoute: "/page1_2",
        vueRouteName: "page1_2"
    },
    {
        id: "page1_1_1",
        vueJsPath: "modules/page1/page1_1/page1_1_1/page111",
        vueRoute: "/page1_1_1",
        vueRouteName: "page1_1_1"
    },
    {
        id: "two",
        vueJsPath: "modules/page2/page2",
        vueRoute: "/two",
        vueRouteName: "two"
    }
];