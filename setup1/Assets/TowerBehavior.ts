@component
export class NewScript extends BaseScriptComponent {
    onAwake() {

    }
    collisionEnter(other: Collision) {
        print("Collision Enter");
    }
}
