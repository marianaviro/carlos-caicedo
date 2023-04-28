document.querySelector(".hamburger").addEventListener("click", () => {
  //Make background unscrollable
  document.querySelector("body").classList.toggle("unscrollable");

  //Rotate toggle icon
  document.querySelector(".toggle").classList.toggle("rotated");

  //Show nav
  // document.querySelector(".nav-dropdown").classList.toggle("hidden");

  //Toggle nav container
  if (document.querySelector(".nav-container").classList.contains("expanded")) {
    document.querySelector(".nav-container").classList.remove("expanded");
    document.querySelector(".nav-container").classList.add("collapsed");
  } else {
    document.querySelector(".nav-container").classList.remove("collapsed");
    document.querySelector(".nav-container").classList.add("expanded");
  }
});

document.querySelector(".dropdown-toggle").addEventListener("click", () => {
  //Change text color
  document.querySelector(".dropdown-toggle").classList.toggle("text-pink");

  //Toggle dropdown container
  document.querySelector(".dropdown").classList.toggle("hidden");
});
