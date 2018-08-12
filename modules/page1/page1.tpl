<div>
    <mt-header fixed title="页面1" id="page1"></mt-header>
    <router-link style="font-size:16px;margin-left:8px;" to="/"> &lt;回到首页 </router-link>
    <!-- <mt-button size="normal" type="primary" @click="backIndex">回到首页</mt-button> -->
    <br>
    <div style="text-align: center;"><img src="./././public/images/test.jpg"></div>
    <div style="text-align: center;color: #9e9e9e;"><span>以上是public/images/目录下的图片示例</span></div>
    <div style="margin-top:16px;">
        <router-view></router-view>
    </div>
    <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="1" @click.native="showPage11">
            <img slot="icon" src="public/images/test.jpg"> 子菜单1
        </mt-tab-item>
        <mt-tab-item id="2" @click.native="showPage12">
            <img slot="icon" src="public/images/test.jpg"> 子菜单2
        </mt-tab-item>
    </mt-tabbar>
</div>