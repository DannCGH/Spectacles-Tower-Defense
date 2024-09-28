// @input Asset.ObjectPrefab objectPrefab
// @input SceneObject parentObject

function spawnObject() {
    if (script.objectPrefab) {
        var newObject = script.objectPrefab.instantiate(script.parentObject);
        newObject.getTransform().setWorldPosition(new vec3(0, 0, 0)); // Set initial position
    } else {
        print("Prefab not assigned.");
    }
}

// Bind the spawnObject function to a Tap event
var tapEvent = script.createEvent("TapEvent");
tapEvent.bind(spawnObject);