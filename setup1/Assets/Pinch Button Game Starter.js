//@input Component.ScriptComponent pinchButtonScript
//@input SceneObject childObject

onAwake(){
    // Function to toggle the child object's enabled state
function onButtonPinched() {
    script.childObject.enabled = !script.childObject.enabled;
}

// Add the onButtonPinched callback to the pinch button
script.pinchButtonScript.onButtonPinched.add(onButtonPinched);
}
