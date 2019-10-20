var characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
// var password = "";

// var lowerCase="abcdefghijklmnopqrstuvwxyz";
// var special="!@#$%^&*()_+"
// var numbers="1234567890"
var randomNum =
  password +
  characters.charAt(Math.floor(Math.random() * characters.length - 1));
console.log(randomNum);
// var box = document.getElementById('password').value

var lenGth = document.getElementById("length");

function random() {
    var password = ""
  
    for (var i = 0; i <= 10; i++) {
    password =
      password +
      characters.charAt(
        Math.floor(Math.random() * Math.floor(characters.length - 1))
      );

    if (password.value > 0) {
      password.value = 0 
    }
    else {
    //     var newPass2 =
    //       password +
    //       characters.charAt(
    //         Math.floor(Math.random() * Math.floor(characters.length - 1))
    //       );

    //    var newPass3 =
    //       password +
    //       characters.charAt(
    //         Math.floor(Math.random() * Math.floor(characters.length - 1))
    //       );
    //     var newPass4 =
    //       password +
    //       characters.charAt(
    //         Math.floor(Math.random() * Math.floor(characters.length - 1))
    //       );
    document.getElementById("password").value = password};
  }

  // }

  function copy() {
    document.getElementById("password").select();
    document.execCommand("copy");
    alert("You copied the password");
  }

  // document.getElementById("password").oninput = function (){
  //     if (document.getElementById("password").value > 0 ){

  //     }
  //     else (document.lenGth.
  // }
}
console.log(password);
