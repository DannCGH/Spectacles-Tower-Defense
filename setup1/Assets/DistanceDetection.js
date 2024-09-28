// @input SceneObject parentObject
// @input SceneObject childObject
function checkDistance() {
    var objectPosition = script.parentObject.getTransform().getWorldPosition();
    var targetPosition = script.childObject.getTransform().getWorldPosition();
    
    var distance = objectPosition.distance(targetPosition);
    
    if (distance <= script.detectionDistance) {
        print("Prefab is within the detection distance!");
        // Add your custom logic here
    }
}

var updateEvent = script.createEvent("UpdateEvent");
updateEvent.bind(checkDistance);