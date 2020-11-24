(function () {
  var youtube = document.querySelectorAll(".youtube");

  for (var i = 0; i < youtube.length; i++) {
    var source =
      "https://img.youtube.com/vi/" +
      youtube[i].dataset.embed +
      "/sddefault.jpg";

    var image = new Image();
    image.src = "images/nexstand-laptop-stand.webp";
    image.addEventListener(
      "load",
      (function () {
        youtube[i].appendChild(image);
      })(i)
    );

    youtube[i].addEventListener("click", function () {
      var iframe = document.createElement("iframe");

      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute(
        "src",
        "https://www.youtube.com/embed/" +
          this.dataset.embed +
          "?rel=0&showinfo=0&autoplay=1"
      );

      this.innerHTML = "";
      this.appendChild(iframe);
    });
  }
})();

let myLabels = document.querySelectorAll(".lbl-toggle");

Array.from(myLabels).forEach((label) => {
  label.addEventListener("keydown", (e) => {
    // 32 === spacebar
    // 13 === enter
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      label.click();
    }
  });
});
