document.querySelector(".toggle").addEventListener("click", () => {
  //Make background unscrollable
  document.querySelector("body").classList.toggle("unscrollable");

  //Rotate hamburger container
  document.querySelector(".star").classList.toggle("rotated");

  //Hide or show overlay
  document.querySelector(".nav-dropdown").classList.toggle("hidden");

  //Toggle nav container
  if (document.querySelector(".nav-container").classList.contains("expanded")) {
    document.querySelector(".nav-container").classList.remove("expanded");
    document.querySelector(".nav-container").classList.add("collapsed");

    //Disable vertical scroll
    document
      .querySelector(".nav-dropdown")
      .classList.remove("overflow-y-scroll");
    document.querySelector(".nav-dropdown").classList.add("overflow-hidden");

    //Hide cancel icon
    document.querySelector(".cancel").classList.add("shrink");
    document.querySelector(".cancel").classList.remove("increase");

    //Display hamburger icon
    document.querySelector(".hamburger").classList.remove("shrink");
    document.querySelector(".hamburger").classList.add("increase");
  } else {
    document.querySelector(".nav-container").classList.remove("collapsed");
    document.querySelector(".nav-container").classList.add("expanded");

    //Enable vertical scroll
    document.querySelector(".nav-dropdown").classList.remove("overflow-hidden");
    document.querySelector(".nav-dropdown").classList.add("overflow-y-scroll");

    //Hide hamburger icon
    document.querySelector(".hamburger").classList.remove("increase");
    document.querySelector(".hamburger").classList.add("shrink");

    //Display cancel icon
    document.querySelector(".cancel").classList.add("increase");
    document.querySelector(".cancel").classList.remove("shrink");
  }
});
