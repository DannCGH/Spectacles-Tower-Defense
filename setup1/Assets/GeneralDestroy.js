// @input SceneObject targetObject

function onDestroy() {
    if (script.targetObject) {
        script.targetObject.destroy();
    }
}

script.createEvent("DestroyEvent").bind(onDestroy);