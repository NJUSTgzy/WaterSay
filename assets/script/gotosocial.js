// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        sceneName:cc.String,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onClickSocial:function(){
        cc.director.loadScene(this.sceneName);
    },
    start () {

    },

    // update (dt) {},
});