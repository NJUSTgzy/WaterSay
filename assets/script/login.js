
cc.Class({
    extends: cc.Component,

    properties: {
        m_Account:cc.EditBox,
        m_PassWord:cc.EditBox,
        m_RegPrefab:cc.Prefab,
        sceneName:cc.String,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        window.g_login = this
    },

    show:function(){
        this.node.active = true
    },
    hide:function(){
        this.node.active = false
    },
    onClickClose:function(){
        this.hide()
    },
    onClickRegister:function(){
        if(this.m_RegView == null){
            this.m_RegView = cc.instantiate(this.m_RegPrefab)
            this.node.parent.addChild(this.m_RegView)
            this.m_RegView = this.m_RegView.Component('register')
        }
        this.m_RegView.show()
        // this.hide()
        // g_welcome.showRegisterView()
    },
    onClickLogin:function(){
    
        cc.director.loadScene(this.sceneName);

    },
    start () {

    },
    // update (dt) {},
});
