<div id="sprite-page-demo">
    <h2>sprite应用demo页面</h2>
    <ul>
        <li class="description">
            <span>
             每个sprite页面都由一个js文件作为主体，该文件将定义页面对应的vue对象，在其中实现具体的业务逻辑，在本例中page.js就是这样的js文件
            </span>
            <span class="comment">
            注：编写vue对象需要具备vue.js的基础，参见：
            <a target="_blank" href="https://cn.vuejs.org/v2/guide/index.html">
                Vue官方文档中文版
            </a>
        </span>
        </li>
        <li class="description">
            <span>
            每个sprite页面都需要一个tpl文件作为当前页面对应vue对象的模板，即描述这个页面应“长什么样”，在本例中page.tpl就是这样的tpl文件。
            </span>
            <span class="comment">
            注：一个tpl文件中只能有一个父级dom元素，否则vue的模板解析引擎将无法识别该模板文件。该模板的编写语法完全采用vue的template语法，参见：
            <a target="_blank" href="https://cn.vuejs.org/v2/guide/syntax.html">
                Vue模板语法
            </a>
        </span>
        </li>
        <li class="description">
            <span>
            每个sprite页面可以有一个可选的css文件，作为当前页面tpl模板文件的样式控制，该css文件最后将会被统一加载到主页
            </span>
            <span class="comment">
            注：在编写该css文件时，为了避免css选择器造成冲突，最好给tpl模板文件中的dom元素增加一个全局唯一的id，然后css选择器以该id进行筛选，具体写法可参考本例中的page.css文件
        </span>
        </li>
    </ul>
</div>