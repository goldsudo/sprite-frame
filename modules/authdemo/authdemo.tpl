<div id="auth-demo">
    <h2>页面、按钮权限demo</h2>
    <div class="description">
        <span>
             页面权限与按钮权限需要依赖角色选择模式的，而sprite默认是关闭角色选择模式，在/sprite/sprite.js中找到checkNeedSelectRole方法，将其中的变量NEED_SELECTROLE的值改为true即可开启角色选择模式
            </span>
        <span class="comment">
            	注：角色选择模式依赖权限映射配置文件：sprite/selecrole/roleMapping.json，这个文件用来配置每个角色拥有的页面与按钮权限，本示例app已经给出了一个默认的配置便于测试
        	</span>
    </div>
    <h3>按钮权限测试</h3>
    <div class="buttonList">以下的3个按钮用于权限测试</div>
    <div>
        <mt-button auth auth-id="button1" class="roleButton" size="large" type="primary">
        	按钮1(角色1,2,3均可见)
        </mt-button auth>
        <mt-button auth auth-id="button2" class="roleButton" size="large" type="primary">
        	按钮2(仅角色2,3可见)
   		 </mt-button auth>
        <mt-button auth auth-id="button3" class="roleButton" size="large" type="primary">
        	按钮3(仅角色3可见)
    	</mt-button auth>
    </div>
    <span class="tip">注：需要进入角色选择模式才生效，并且按钮权限不仅限于button元素，任何dom标签都可进行权限控制。按钮权限具体的配置参考authdemo.tpl与roleMapping.json这两个文件</span>
</div>