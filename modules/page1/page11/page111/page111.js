define(function(require, exports, module) {
    return {
        template: require('text!modules/page1/page11/page111/page111.tpl'),
        data: function() {
            return {
                selected: "1",
                cellArr: [{
                    text: "page1_1_1的CELL"
                }, {
                    text: "page1_1_1的CELL"
                }, {
                    text: "page1_1_1的CELL"
                }, {
                    text: "page1_1_1的CELL"
                }, {
                    text: "page1_1_1的CELL"
                }]
            }
        },
        created: function() {
            console.log(_.slice(this.cellArr, 2))
        },
        methods: {}
    }
})