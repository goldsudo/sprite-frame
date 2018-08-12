<div id="sprite-selectrole">
    <mt-header fixed title="选择角色"></mt-header>
     <div id="container">
        <mt-button class="roleButton" v-for="item in roleList" size="large" type="primary" @click="gotoTargetMenu(item)">{{item.name}}</mt-button>
    </div>
</div>