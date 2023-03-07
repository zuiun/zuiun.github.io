/*
 * Imports a file
 *
 * path: String = path to file
 * 
 * Pre: none
 * Post: none
 * Return: response = response of file
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
 * Pre: none
 * Post: none
 * Return: JSON = JSON of file
 */
async function import_json (path) {
    return await import_file (path)
        .then ((response) => response.json ())
        .catch((error) => console.log ("JSON Import Error: " + error));
}

/*
 * Builds skeleton page (header and footer)
 *
 * Pre: none
 * Post: none
 * Return: none
 */
async function build_skeleton () {
    let file = await import_file (window.location.pathname);
    let template = await import_json ("/template.json");
    let head_element = document.getElementsByTagName ("head") [0];
    let body_element = document.getElementsByTagName ("body") [0];

    body_element.innerHTML = template ["header"].join ("") + body_element.innerHTML + template ["footer"].join ("");
    // TODO: Probably make some kind of automatic header dropdown creation

    // Add scroll button if necessary
    if (document.body.clientWidth < window.innerWidth) { // There is a scroll bar
        let aside_element = document.getElementsByTagName ("aside") [1];

        aside_element.innerHTML = template ["scroll"].join ("");
    }

    // Use normal page
    if (file.ok) {
        head_element.innerHTML = head_element.innerHTML + template ["favicons"].join ("");
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
 * Pre: none
 * Post: none
 * Return: none
 */
async function build_index () {
    // TODO: Implement some sort of JSON storage or file search before implementing this
}

/*
 * Builds article page
 *
 * Pre: none
 * Post: none
 * Return: none
 */
async function build_article () {
    // TODO: Implement some sort of JSON storage before implementing this
}


/*
 * Builds page
 *
 * Pre: none
 * Post: none
 * Return: none
 */
async function build_page () {
    let file = await import_file (window.location.pathname.replace ("html", "json"));

    build_skeleton ();
}

build_page ();
