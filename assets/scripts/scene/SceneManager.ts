import { SocicalSceneEnum } from "../enum";

const { ccclass } = cc._decorator;
const { director } = cc;

@ccclass
export default class SceneManager extends cc.Component {
    switchScene(e: Event, sceneName: string) {
        director.loadScene(sceneName as SocicalSceneEnum);
    }
}
