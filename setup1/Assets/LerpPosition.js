// @input SceneObject spawnPoint
// @input SceneObject enemy
// @input float lerpSpeed = 0.1


// @input vec3 bulletSpawnPoint = 
function sendBullet() {
    // Function to lerp the Bullet towards the Move prefab
    function lerpBullet() {
       var objectPosition = script.parentObject.getTransform().getWorldPosition();
       var targetPosition = script.childObject.getTransform().getWorldPosition();
        
       var lerpedPosition = vec3.lerp(objectPosition, targetPosition, script.lerpSpeed);
        
        // Optionally, you can add logic to destroy the Bullet when it reaches the target
        if (bulletPosition.distance(targetPosition) < 0.1) {
            bulletInstance.destroy();
        }
    }
    
    // Bind the lerp function to the UpdateEvent
    var updateEvent = script.createEvent("UpdateEvent");
    updateEvent.bind(lerpBullet);
}

// Call the sendBullet function to start the process
sendBullet();