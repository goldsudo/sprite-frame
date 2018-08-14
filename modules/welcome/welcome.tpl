<div id="welcome">
    <h2>你好！欢迎使用 sprite </h2>
    <div class="description">
        <div>sprite是一个轻量级的移动SPA
            <span>
                (single page web application，即单页web应用)
            </span> 开发框架，你只需学会Vue的相关语法，即可利用sprite快速的开发你的应用
        </div>
        <br>
        <div class="spriteDescTitle">
            sprite特性介绍
        </div>
        <div>sprite是基于require,Vue,Vue-router,zepto,axios,mint-ui等前端框架以及UI库开发的，具备如下特性：</div>
        <ul>
            <li>
                <span class="title">团队协作</span>
                <span class="text">利用了require的模块加载功能实现了应用的模块化开发</span>
            </li>
            <li>
                <span class="title">配置简单</span>
                <span class="text">仅需一个配置文件以及极少的配置项即可完成复杂的功能</span>
            </li>
            <li>
                <span class="title">学习门槛低</span>
                <span class="text">sprite应用采用纯ES5语法编写，适合刚入门的前端开发者使用</span>
            </li>
            <li>
                <span class="title">易于debug</span>
                <span class="text">由于sprite出于轻量的考虑没有引入打包与压缩等功能，因此debug体验友好</span>
            </li>
            <li>
                <span class="title">高效开发</span>
                <span class="text">sprite屏蔽了一些复杂而无趣的工作，如Vue与Vuerouter的初始化、应用加载模式控制、组件加载、权限控制等，从而使得开发者可以专注于业务逻辑的开发</span>
            </li>
        </ul>
        <br>
        <div class="spriteDescTitle">
            sprite功能介绍
        </div>
        <div>sprite提供了很多利于开发者快速进行应用开发的功能：</div>
        <ul>
            <li>
                <span class="title">可配置的多首页</span>
                <span class="text">
                    你当前所浏览的这个应用就是利用了可配置的多首页功能，因此你可以看到屏幕底部有多个菜单以供选择，这并不需你来写额外的代码，只需简单的配置即可
                </span>
                <span class="comment">
                    注：参见pageRegister.json中isInde中配置为true的页面
                </span>
            </li>
            <li>
                <span class="title">可配置的页面加载方式</span>
                <span class="text">
                    仅需修改一个变量，即可控制应用的加载模式是一次性加载全部页面，以获得快速的页面切换效果；还是延迟加载页面，以提升应用初始化速度并且为用户节省流量
                </span>
                <span class="comment">
                    注：参见sprite/sprite.js中关于APP_LOAD_ASYNC变量的具体描述
                </span>
            </li>
            <li>
                <span class="title">支持递归嵌套的子页面</span>
                <span class="text">
                    和Vue-router支持嵌套子路由一样，sprite也支持嵌套子页面
                </span>
                <span class="comment">
                    注：参见“嵌套”菜单，以及对应的代码实现
                </span>
            </li>
            <li>
                <span class="title">灵活的组件模式</span>
                <span class="text">
                    sprite支持配置应用中所有页面都可使用的公共组件，也支持为某些页面配置局部共享的页面组件
                </span>
                <span class="comment">
                    注：参见“组件”菜单，以及对应的代码实现
                </span>
            </li>
            <li>
                <span class="title">页面权限与按钮权限</span>
                <span class="text">
                    sprite支持为不同用户配置不同的页面权限与按钮权限，仅需简单的配置即可实现
                </span>
                <span class="comment">
                    注：参见“权限”菜单，以及对应的代码实现
                </span>
            </li>
               <li>
                <span class="title">支持Vue的模板缓存功能</span>
                <span class="text">
                    在pageRegister.json中为页面配置keepAlive属性，取值范围为"true"或"false"，代表是否缓存该页面
                </span>
                <span class="comment">
                    注：将页面配置为缓存有利于性能提升，但是需要编写一些额外的代码，具体请参考：
                    <a target="_blank" href="https://cn.vuejs.org/v2/api/#keep-alive">
                        Vue官方中文文档：keep-alive
                    </a>
                </span>
            </li>
            <li>
                <span class="title">封装好的http请求方法</span>
                <span class="text">
                    我在sprite中对axios进行了封装，提供了doGet与doPost两个执行http请求的方法，在你的代码中用如下代码即可调用：
                    <div>var spriteUtil = require("spriteUtil");</div>
                    <div>spriteUtil.doGet(
                        {url:...,params:{...}}
                         ).then(function(res){
                             //do something
                         });
                     </div>
                </span>
                <span class="comment">
                    注：关于doGet与doPost的具体实现与使用参见sprite.js中的相关代码，搜索关键字doGet或doPost即可
                </span>
            </li>
        </ul>
        <br>
        <div class="spriteDescTitle">
            开始编写你的第一个sprite页面
        </div>
        <div>
            使用sprite进行页面开发前，你需要具备Vue的基础知识，之后你还需要适应sprite要求的开发规范，详情请参考“入门”菜单，以及对应的代码实现
        </div>
        <br>
        <div class="spriteDescTitle">
            sprite系列博文
        </div>
        <div>
            我在我的博客上记录了我实现sprite框架的详细过程，感兴趣的话可以去看看哦：
            <a target="_blank" href="http://goldsudo.com/develop/spriteframe">
                sprite框架全集
            </a>
            <span class="comment">
                    注：博文中的代码不是最新的，如需阅读源码还请参考本项目的代码
            </span>
        </div>
        <br>
        <div class="spriteDescTitle">
            sprite彩蛋
        </div>
        <ul>
            <li>
                <span class="title">框架名为什么取sprite呢？</span>
                <span class="text">
                    我养了两只猫，小的那只叫咖啡，而大的那只叫雪碧
                </span>
            </li>
             <li>
                <span class="title">打开浏览器(快捷键F12)的console</span>
                <span class="text">
                    当sprite应用初始化完成后，会在console中打印庆祝提示，have fun!~
                </span>
            </li>
        </ul>
    </div>
</div>