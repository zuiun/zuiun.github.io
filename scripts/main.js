/*
 * Imports a file
 *
 * path: string = path to file
 * 
 * Pre: None
 * Post: None
 * Return: response = response of file
 */
async function import_file (path) {
    return await fetch (path)
        .catch ((error) => console.log ("File Import Error: " + error));
}

/*
 * Imports a file as a JSON
 *
 * path: string = path to file
 * 
 * Pre: None
 * Post: None
 * Return: JSON = JSON of file
 */
async function import_json (path) {
    return await import_file (path)
        .then ((response) => response.json ())
        .catch ((error) => console.log ("JSON Import Error: " + error));
}

/*
 * Builds skeleton page (header and footer)
 *
 * Pre: None
 * Post: None
 * Return: None
 */
async function build_skeleton () {
    let template = await import_json ("/data/template.json");
    let body = document.getElementsByTagName ("body") [0];

    body.innerHTML = template ["header"].join ("") + body.innerHTML + template ["footer"].join ("");

    // Add scroll button if necessary
    if (window.innerWidth > document.documentElement.clientWidth || window.innerHeight < document.body.clientHeight) {
        let aside = document.getElementsByTagName ("aside") [1];

        aside.innerHTML = template ["scroll"].join ("");
    }

    // Fade header as page is scrolled
    window.onscroll = function () {
        let header = document.getElementsByTagName ("header") [0];
        let bounds = document.getElementsByTagName ("hr") [0].getBoundingClientRect ();

        header.style.opacity = Math.max (bounds.bottom / (bounds.bottom + window.pageYOffset), 0.5);
    }
}

build_skeleton ();
