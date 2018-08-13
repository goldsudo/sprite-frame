<div style="width: 100%;margin:0 16px 0 16px">
    <div style="margin-top: 56px;margin-bottom: 16px;">之所以要写这个Tab页的demo，是因为这是我之前实际使用sprite进行应用开发过程中总结出来的最佳实践。</div>
     <div style="margin-bottom: 16px;">如果直接参考mint-ui的关于navbar的教学文档开发你自己的tab页，可能很顺理成章的就将多个tab页的代码写在同一个js文件中了，因为对于navbar组件来说，所有tab页中的内容只是当前页面的一部分而已。</div>
     <div style="margin-bottom: 16px;">将所有tab页的相关代码写到一起的做法，在页面功能不是特别复杂时还好，但是当每个tab页中的业务逻辑都比较复杂时，这时候就显得非常臃肿且难以维护了</div>
     <div style="margin-bottom: 16px;">我在实践过程中就遇到了这样的问题，于是我对navbar组件进行了拆解，利用pageRegister.json中的子页面注册功能，将每个tab页拆分为当前页面的一个子页面，这样每个tab页的代码就独立出来了，代码结构也更清晰。</div>
</div>