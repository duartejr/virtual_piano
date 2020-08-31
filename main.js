let pianoKeys = new Set('ADEFGHJSTUVWY');

document.addEventListener("keypress", function(e){
    let key = e.key.toUpperCase()
    if (pianoKeys.has(key)) {
       let audio = new Audio("/AUDIO/" + key + ".mp3");
       audio.load();
       audio.play();
       console.log("The '" + e.key.toUpperCase() + "' key is pressed.");
   }
});