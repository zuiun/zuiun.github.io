window.onscroll = function () {
    let header = document.querySelector ("header");
    let bounds = document.querySelector ("hr").getBoundingClientRect ();

    header.style.opacity = Math.max (bounds.bottom / (bounds.bottom + window.pageYOffset), 0.5);
}
