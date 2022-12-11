
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        window.g_register = this
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

    start () {

    },

    // update (dt) {},
});
