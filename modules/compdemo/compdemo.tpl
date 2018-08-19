<div style="margin: 0 16px 0 16px;display: flex;flex-direction: column;align-items: center;justify-content: center;">
    <h2>组件功能demo</h2>
    <pub-demo text="hello public component" style="margin-top: 20px;"></pub-demo>
    <page-demo text="hello page component" style="margin-top: 20px;"></page-demo>
    <ul>
        <li style="margin-top:16px;">
            pub-demo为公共级组件，需要在sprite.js文件中进行注册，一旦注册，所有页面都可在tpl文件直接使用
        </li>
        <li style="margin-top:16px;">
            page-demo为页面级组件，可在pageRegister.json文件中为需要使用该组件的页面进行注册，即按需注册，而不是全局注册。
        </li>
        <li style="margin-top:16px;">
            在pageRegister.json中将compdemo中的components内容删除掉，再回来查看这个页面，将会发现名称为“page-demo”的组件将不再显示，这就是页面级按需注册的效果
        </li>
    </ul>
</div>
