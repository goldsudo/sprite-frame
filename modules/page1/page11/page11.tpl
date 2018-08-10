<div id="page11" style="margin-bottom: 68px;">
    <br>
    <div auth auth-id='123' style="text-alin:center;">这是子菜单1的页面</div auth>
    <br>
    <mt-field label="姓名" placeholder="请输入姓名" v-model="name"></mt-field>
    <br>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <br>
    <mt-field label="身份证" placeholder="请输入身份证" type="number" v-model="idCard"></mt-field>
    <br>
    <span auth auth-id="authButton1" style="font-size:16px;text-decoration:underline;cursor:pointer;color:rgb(83, 83, 240);" @click="showpage1_1_1">点击加载子页面page1_1_1</span auth>
    <br>
    <router-view></router-view>
    <br>
    <mt-button id="buttonId" auth auth-id="test" size="large" type="primary" @click="showPage2">子菜单1_跳转到页面2</mt-button auth>
</div>