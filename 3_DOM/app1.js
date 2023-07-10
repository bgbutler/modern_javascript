let val;

val = document;
val = document.all[2];
val = document.all.length;

val = document.head;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;


val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.action;

val = document.links;
val = document.links[0];
val = document.links[5].className;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptArr = Array.from(scripts);

scriptArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});





console.log(val);
