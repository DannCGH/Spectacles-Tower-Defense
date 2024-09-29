// @input SceneObject targetObject

function destroyTarget() {
    if (script.targetObject) {
        script.targetObject.destroy();
        print("Target object destroyed!");
    } else {
        print("No target object assigned.");
    }
}