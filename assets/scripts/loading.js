cc.Class({
    extends: cc.Component,
    properties: {
        m_ProMaxLen: {
            default: 690,
            type: cc.Integer,
        },
        m_Speed: {
            default: 690,
            type: cc.Integer,
        },
        m_Progress: {
            type: cc.Integer,
            default: 0,
            slide: true,
            min: 0,
            max: 690,
            step: 1,
            notify() {
                this._progressChange();
            },
        },
        m_ProImage: cc.Node,
    },
    ctor: function () {
        this.m_progressIng = false;
    },
    _progressChange: function () {
        this.m_ProImage.width = this.m_Progress;
    },
    //我们规定进度条整体长度百分比.0-1
    setProgress: function (pro) {
        if (pro > 1 || pro < 0) {
            return;
        }
        var width = this.m_ProMaxLen * pro;
        if (width < this.m_SetWidth) {
            return;
        }
        this.m_SetWidth = this.m_ProMaxLen * pro;

        this.m_progressIng = true;
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.m_ProImage.width = 0;
    },

    start() {},

    update(dt) {
        if (this.m_progressIng) {
            if (this.m_ProImage.width < this.m_SetWidth) {
                this.m_ProImage.width += dt * this.m_Speed;
            }

            if (this.m_ProImage.width >= this.m_ProMaxLen) {
                this.m_progressIng = false;
                if (this.finishCallBack != null) {
                    this.finishCallBack();
                }
            }
        }
    },
});
