<div id="page3">
    <mt-header fixed title="这是第二个首页"></mt-header>
    <br>
    <mt-actionsheet :actions="actions" v-model="sheetVisible" cancelText="关闭">
    </mt-actionsheet>
    <div id="container">
        <mt-button style="margin-top: 200px;" size="large" type="primary" @click="showActionSheet">展示菜单项</mt-button>
    </div>
</div>