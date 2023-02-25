/*
 * Imports a file
 *
 * path: String = path to file
 * 
 * pre: none
 * post: none
 * return: response = response of file
 */
async function import_file (path) {
    return await fetch (path)
        .catch((error) => console.log ("File Import Error: " + error));
}

/*
 * Imports a file as a JSON
 *
 * path: String = path to file
 * 
 * pre: none
 * post: none
 * return: JSON = JSON of file
 */
async function import_json (path) {
    return await import_file (path)
        .then ((response) => response.json ())
        .catch((error) => console.log ("JSON Import Error: " + error));
}

/*
 * Builds skeleton page (header and footer)
 *
 * pre: none
 * post: none
 * return: none
 */
async function build_skeleton () {
    let file = await import_file (window.location.pathname);
    let template = await import_json ("/template.json");
    let head_element = document.getElementsByTagName ("head") [0];
    let body_element = document.getElementsByTagName ("body") [0];

    body_element.innerHTML = template ["header"].join ("") + body_element.innerHTML + template ["footer"].join ("");

    // Add scroll button if necessary
    if (document.body.clientWidth < window.innerWidth) { // There is a scroll bar
        let aside_element = document.getElementsByTagName ("aside") [1];

        aside_element.innerHTML = template ["scroll"].join ("");
    }

    // Use normal page
    if (file.ok) {
        head_element.innerHTML = head_element.innerHTML + template ["favicons"].join ("");
    // Use 404 page
    } else {
        /* let title_element = document.getElementById ("title");

        head_element.innerHTML = head_element.innerHTML + template ["404"] [0].join ("");
        title_element.innerHTML = template ["404"] [1].join (""); */
    }

    // Fade header as page is scrolled
    window.onscroll = function () {
        let header = document.getElementsByTagName ("header") [0];
        let bounds = document.getElementsByTagName ("hr") [0].getBoundingClientRect ();

        header.style.opacity = Math.max (bounds.bottom / (bounds.bottom + window.pageYOffset), 0.5);
    }
}

/*
 * Builds index page
 *
 * pre: none
 * post: none
 * return: none
 */
async function build_index () {
    let file = await import_file (window.location.pathname);
    let template = await import_json ("/template.json");
    let head_element = document.getElementsByTagName ("head") [0];
    let body_element = document.getElementsByTagName ("body") [0];

    body_element.innerHTML = template ["header"].join ("") + body_element.innerHTML + template ["footer"].join ("");

    // Add scroll button if necessary
    if (document.body.clientWidth < window.innerWidth) {
        let aside_element = document.getElementsByTagName ("aside") [1];

        aside_element.innerHTML = template ["scroll"].join ("");
    }

    // Use normal page
    if (file.ok) {
        head_element.innerHTML = head_element.innerHTML + template ["head"].join ("");
    // Use 404 page
    } else {
        let title_element = document.getElementById ("title");

        head_element.innerHTML = head_element.innerHTML + template ["404"] [0].join ("");
        title_element.innerHTML = template ["404"] [1].join ("");
    }

    // Fade header as page is scrolled
    window.onscroll = function () {
        let header = document.getElementsByTagName ("header") [0];
        let bounds = document.getElementsByTagName ("hr") [0].getBoundingClientRect ();

        header.style.opacity = Math.max (bounds.bottom / (bounds.bottom + window.pageYOffset), 0.5);
    }
}

/*
 * Builds article page
 *
 * pre: none
 * post: none
 * return: none
 */
async function build_article () {
    let file = await import_file (window.location.pathname);
    let template = await import_json ("/template.json");
    let head_element = document.getElementsByTagName ("head") [0];
    let body_element = document.getElementsByTagName ("body") [0];

    body_element.innerHTML = template ["header"].join ("") + body_element.innerHTML + template ["footer"].join ("");

    // Add scroll button if necessary
    if (document.body.clientWidth < window.innerWidth) {
        let aside_element = document.getElementsByTagName ("aside") [1];

        aside_element.innerHTML = template ["scroll"].join ("");
    }

    // Use normal page
    if (file.ok) {
        head_element.innerHTML = head_element.innerHTML + template ["head"].join ("");
    // Use 404 page
    } else {
        let title_element = document.getElementById ("title");

        head_element.innerHTML = head_element.innerHTML + template ["404"] [0].join ("");
        title_element.innerHTML = template ["404"] [1].join ("");
    }

    // Fade header as page is scrolled
    window.onscroll = function () {
        let header = document.getElementsByTagName ("header") [0];
        let bounds = document.getElementsByTagName ("hr") [0].getBoundingClientRect ();

        header.style.opacity = Math.max (bounds.bottom / (bounds.bottom + window.pageYOffset), 0.5);
    }
}


/*
 * Builds page
 *
 * pre: none
 * post: none
 * return: none
 */
async function build_page () {
    let file = await import_file (window.location.pathname.replace ("html", "json"));

    build_skeleton ();

    if (file [file.length - 1]) {

    }
}

build_page ();
