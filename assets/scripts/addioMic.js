// AudioSourceControl.js
cc.Class({
    extends: cc.Component,

    properties: {
        audioSource: {
            type: cc.AudioSource,
            default: null
        },
    },

    play: function () {
        var self = this;
        self.audioSource.play();
    },

    pause: function () {
        this.audioSource.pause();
    },
});