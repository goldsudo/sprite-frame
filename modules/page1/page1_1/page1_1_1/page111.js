define(function(require, exports, module) {
    var util = require('util');
    var tpl = require('text!modules/page1/page1_1/page1_1_1/template.html');

    return function() {
        var page = {
            template: tpl,
            data: function() {
                return {
                    selected: "1",
                    cellArr: [
                        { text: "page1_1_1的CELL" },
                        { text: "page1_1_1的CELL" },
                        { text: "page1_1_1的CELL" },
                        { text: "page1_1_1的CELL" },
                        { text: "page1_1_1的CELL" }
                    ]
                }
            },
            created: function() {
                console.log(_.slice(this.cellArr, 2))
            },
            methods: {}
        }

        return page;
    }

})