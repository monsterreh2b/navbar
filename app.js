// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggle = document.querySelector(".nav-toggle");
console.log(toggle);

const links = document.querySelector(".links");

toggle.addEventListener("click", function(){
  //console.log("hi");
  console.log(links.classList);
  console.log(links.classList.contains("links"));
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  }
  else{
    links.classList.add("show-links");
  }

});