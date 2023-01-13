// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        m_AccountLoginPrefab:cc.Prefab,
    },

    changeValue(){
        if (this.m_AccountLogin == null) {
            this.m_AccountLogin = cc.instantiate(this.m_AccountLoginPrefab);
            this.node.addChild(this.m_AccountLogin);
            this.m_AccountLogin = this.m_AccountLogin.getComponent("confirm");
        }
        this.m_AccountLogin.show();
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
