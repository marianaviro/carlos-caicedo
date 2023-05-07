document.querySelector(".hamburger").addEventListener("click", () => {
  //Make background unscrollable
  document.querySelector("body").classList.toggle("unscrollable");

  //Rotate toggle icon
  document.querySelector(".toggle").classList.toggle("rotated");

  //Toggle nav container
  if (document.querySelector(".nav-container").classList.contains("expanded")) {
    document.querySelector(".nav-container").classList.remove("expanded");
    document.querySelector(".nav-container").classList.add("collapsed");
    document
      .querySelector(".nav-dropdown")
      .classList.remove("overflow-y-scroll");
    document.querySelector(".nav-dropdown").classList.add("overflow-hidden");
  } else {
    document.querySelector(".nav-container").classList.remove("collapsed");
    document.querySelector(".nav-container").classList.add("expanded");
    document.querySelector(".nav-dropdown").classList.remove("overflow-hidden");
    document.querySelector(".nav-dropdown").classList.add("overflow-y-scroll");
  }
});

document.querySelector(".dropdown-toggle").addEventListener("click", () => {
  //Change text color
  document.querySelector(".dropdown-toggle").classList.toggle("text-pink");

  //Toggle dropdown container
  document.querySelector(".dropdown").classList.toggle("hidden");
});
