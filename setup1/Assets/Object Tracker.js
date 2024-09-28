 @input Component.ObjectTracking objectTracking
 @input SceneObject objectToAttach

function onObjectTracked(eventData) {
    // Update the position and rotation of the attached object
    script.objectToAttach.getTransform().setWorldPosition(eventData.position);
    script.objectToAttach.getTransform().setWorldRotation(eventData.rotation);
}

// Add the event listener for object tracking
script.objectTracking.onObjectTracked.add(onObjectTracked);

// Function to get the current position of the attached object
function getAttachedObjectPosition() {
    return script.objectToAttach.getTransform().getWorldPosition();
}

// Example usage: Log the position to the console
print("Attached Object Position: " + getAttachedObjectPosition());