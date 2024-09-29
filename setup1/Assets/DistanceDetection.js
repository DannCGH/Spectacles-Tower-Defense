// @input SceneObject parentObject
// @input SceneObject childObject
// @input float detectionDistance = 2
// @input Asset.ScriptAsset inputScript
function checkDistance() {
    var objectPosition = script.parentObject.getTransform().getWorldPosition();
    var targetPosition = script.childObject.getTransform().getWorldPosition();
    
    var distance = objectPosition.distance(targetPosition);
    
    if (distance <= script.detectionDistance) {
        print("Enemy is within the detection distance!");
        global.scene.createScript(script.inputScript);
    }
}

var updateEvent = script.createEvent("UpdateEvent");
updateEvent.bind(checkDistance);