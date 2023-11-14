let myNodelist = document.getElementsByTagName("li");
for (let i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
let getClose = document.getElementsByClassName("close");
for(let x = 0; x < getClose.length; x++){
  getClose[x].onclick = function(){
    let closed = this.parentElement;
    closed.style.display = "none";
  }
}

function addLists(){
let li = document.createElement("li");
let inputValue = document.getElementById("myInput").value;
let t = document.createTextNode(inputValue);
li.appendChild(t);

if(inputValue === ""){
  alert("Please write something here")
}else{
  document.getElementById("lists").appendChild(li)
}
document.getElementById("myInput").value = "";
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

for(let x = 0; x < getClose.length; x++){
  getClose[x].onclick = function(){
    let closed = this.parentElement;
    closed.style.display = "none";
  }
}
}

