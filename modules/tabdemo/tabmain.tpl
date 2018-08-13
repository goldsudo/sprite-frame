<div>
    <mt-navbar v-model="selectedTab" fixed="true">
        <mt-tab-item id="tab1" @click.native="showTab1">点击进入Tab1</mt-tab-item>
        <mt-tab-item id="tab2" @click.native="showTab2">点击进入Tab2</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selectedTab">
        <router-view></router-view>
    </mt-tab-container>
</div>