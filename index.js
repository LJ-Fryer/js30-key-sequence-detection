const pressed = [];
const secretCode = "wtfiuwy";

window.addEventListener("keyup", (e) => {
  pressed.push(e.key); // Builds an array of the keys struck
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length); //Trim to the maximum length of the secret code
  console.log(pressed);

  // Check for secret code
  if (pressed.join("").includes(secretCode)) {
    console.log("Got it");
    cornify_add();
  }
});
