// @input SceneObject targetObject
// @input vec3 startPosition
// @input vec3 endPosition
// @input float duration = 1.0

var tween = script.targetObject.getComponent("Component.TweenTransform");

function startTween() {
    tween.start = script.startPosition;
    tween.end = script.endPosition;
    tween.time = script.duration;
    tween.play(1);
}

script.createEvent("TurnOnEvent").bind(startTween);