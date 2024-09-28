// @input Component.ObjectTracking objectTracking
// @input SceneObject objectToAttach

function onObjectTracked(eventData) {
    if (script.objectToAttach) {
        // Update the position and rotation of the attached object
        script.objectToAttach.getTransform().setWorldPosition(eventData.position);
        script.objectToAttach.getTransform().setWorldRotation(eventData.rotation);
    } else {
        print("Error: objectToAttach is not assigned.");
    }
}

if (script.objectTracking) {
    // Add the event listener for object tracking
    script.objectTracking.onObjectTracked.add(onObjectTracked);
} else {
    print("Error: objectTracking component is not assigned.");
}

// Function to get the current position of the attached object
function getAttachedObjectPosition() {
    if (script.objectToAttach) {
        return script.objectToAttach.getTransform().getWorldPosition();
    } else {
        print("Error: objectToAttach is not assigned.");
        return null;
    }
}

// Example usage: Log the position to the console
print("Attached Object Position: " + getAttachedObjectPosition());