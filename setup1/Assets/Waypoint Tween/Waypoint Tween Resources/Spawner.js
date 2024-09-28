// @input float createInterval = 3.0
// @input Asset.ObjectPrefab objectPrefab
// @input SceneObject parentObject

var timeElapsed = 0;

function onUpdate(eventData) {
    timeElapsed += getDeltaTime();
    if (timeElapsed >= script.createInterval) {
        timeElapsed = 0;
        
        var newObject = script.objectPrefab.instantiate(script.parentObject);
        newObject.getTransform().setWorldPosition(new vec3(0, 0, 0));
    }
    
}

script.createEvent("UpdateEvent").bind(onUpdate);