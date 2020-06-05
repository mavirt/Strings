var userName = prompt("What's your name?");
var character = userName.split("");

var one = character[0];
var second = character[character.length-1];
var reverse = character.reverse().join("");

  for(var a=0; a<character.length; a++){
    var rand = Math.floor(Math.random() * character.length);
    var custom = character[a];
    character[a] = character[rand];
    character[rand] = custom;
  }

var jumble = character.join("");

document.write("Reverse order - "+reverse+"<br>");
document.write("First character -  "+one+"<br>");
document.write("Last character - "+second+"<br>");
document.write("Jumbled word - "+jumble+"<br>");