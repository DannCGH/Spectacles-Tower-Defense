// @input SceneObject targetObject
// @input string tweenName

function checkAndStopTween() {
    if (global.isNull(script.targetObject)) {
        print("The target object is null or destroyed. Stopping tween.");
        global.tweenManager.stopTween(script.targetObject, script.tweenName);
    } else {
        print("The target object is valid.");
    }
}

script.createEvent("TurnOnEvent").bind(checkAndStopTween)