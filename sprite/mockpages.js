define(function() {
	return {
		pages: [{
			id: "zero",
			vueJsPath: "modules/page0/page0",
			vueRoute: "/zero",
			vueRouteName: "zero",
			isIndex: "true"
		}, {
			id: "one",
			vueJsPath: "modules/page1/page1",
			vueRoute: "/one",
			vueRouteName: "one",
			childrenIds: ['page11', 'page12']
		}, {
			id: "page11",
			vueJsPath: "modules/page1/page11/page11",
			vueRoute: "/page11",
			vueRouteName: "page11",
			childrenIds: ['page111']
		}, {
			id: "page12",
			vueJsPath: "modules/page1/page12/page12",
			vueRoute: "/page12",
			vueRouteName: "page12"
		}, {
			id: "page111",
			vueJsPath: "modules/page1/page11/page111/page111",
			vueRoute: "/page111",
			vueRouteName: "page111"
		}, {
			id: "two",
			vueJsPath: "modules/page2/page2",
			vueRoute: "/two",
			vueRouteName: "two"
		}]
	}
})