@component
export class NewScript extends BaseScriptComponent {
    onAwake() {
        // Initialization code can be added here
    }

    collisionEnter(other: Collision) {
        print("Collision Enter");
    }
}
