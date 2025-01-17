let i = 0;
let j = 5;

const dots = document.quertSelectorAll(" .dot-container button");

function next(){
  document.getElementById("content" + (i+1)).
  classList.remove("active");
  i = ( j + i + 1) % j;
  document.getElementById("content" + (i+1)).
  classList.add("active");
  indicator (i + 1);
}

function prev(){
  document.getElementById("content" + (i+1)).
  classList.remove("active");
  i = ( j + i - 1) % j;
  document.getElementById("content" + (i+1)).
  classList.add("active");
  indicator (i + 1);
}

function indicator (num){
  dots.forEach(function(dot){
    dot.style.backgroundColor = "transparent";

  });

  document.quertSelectorAll(" .dot-container button:nth-child (" + num +")").style.backgroundColor ="#17202A";
}