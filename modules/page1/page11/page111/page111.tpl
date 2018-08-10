<div>
    <span style="color:red;">子菜单1的嵌套子页面page1_1_1</span>
    <!-- <div v-for="(item, index) in cellArr">
        <mt-cell :title="index" :value="item.text"></mt-cell>
    </div> -->
    <mt-navbar v-model="selected">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
        <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
            <mt-cell v-for="n in 3" :title="'内容 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
            <mt-cell v-for="n in 6" :title="'测试 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
            <mt-cell v-for="n in 5" :title="'选项 ' + n" />
        </mt-tab-container-item>
    </mt-tab-container>
</div>