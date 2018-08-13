<div style="display: flex;flex-direction: column;align-items: center;justify-content: center;">
    <h2>嵌套子页面demo</h2>
    <h3>{{text}}</h3>
    <div style="margin:16px 16px 0 16px;">
        在浏览器url的末尾增加"/children1"或"/children2"，即可查看对应的子页面
    </div>
    <div style="margin:16px 16px 0 16px;">
        在"/children1"之后增加"/children1_1"还可查看子页面的嵌套子页面
    </div>
    <div style="margin:16px 16px 0 16px;">
        但是在"/children2"之后增加"/children1_1"将无法正常展示页面，因为没有为children2页面注册名为children1_1的子页面
    </div>
    <div style="margin:16px 16px 0 16px;font-size: 14px;color:#9e9e9e;">
        注：具体的父子页面配置方法参见：pageRegister.json
    </div>
    <router-view></router-view>
</div>