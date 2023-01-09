import SceneManager from "./SceneManager";

const { ccclass } = cc._decorator;
const { EventType } = cc.Node;

@ccclass
class SocialSceneManager extends SceneManager {
    protected onLoad(): void {
        // this.node.on(EventType.TOUCH_END, (e:Event) => {
        //     this.switchScene(e);
        // });
    }
}
