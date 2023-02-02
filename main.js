/*
 * Gets current page file path
 *
 * pre: none
 * post: none
 * return: string = file path
 */
function get_file_path () {
    return window.location.pathname;
}

/*
 * Converts HTML path to JSON path
 *
 * path: string = path to HTML file
 * 
 * pre: none
 * post: none
 * return: string = path to JSON file
 */
function convert_html_json (path) {
    return path.replace ("html", "json");
}

/*
 * Imports a file
 *
 * path: string = path to file
 * 
 * pre: none
 * post: none
 * return: response = response of file
 */
async function import_file (path) {
    return await fetch (path)
        .catch((error) => console.log ("Error: " + error));
}

/*
 * Imports a file as a JSON
 *
 * path: string = path to file
 * 
 * pre: none
 * post: none
 * return: JSON = JSON of file
 */
async function import_json (path) {
    return await import_file (path)
        .then ((response) => response.json ())
        .catch((error) => console.log ("Error: " + error));
}

/*
 * Builds page
 *
 * pre: none
 * post: none
 * return: none
 */
async function build_page () {
    let file = await import_file (get_file_path ());
    let template_json = await import_json ("/template.json");
    let head_element = document.getElementsByTagName ("head") [0];
    let body_element = document.getElementsByTagName ("body") [0];

    body_element.innerHTML = template_json ["header"].join ("") + body_element.innerHTML + template_json ["footer"].join ("");

    // Add scroll button if necessary
    if (document.body.clientWidth < window.innerWidth) {
        let aside_element = document.getElementsByTagName ("aside") [1];

        aside_element.innerHTML = template_json ["scroll"].join ("");
    }

    // Use normal page
    if (file.ok) {
        head_element.innerHTML = head_element.innerHTML + template_json ["head"].join ("");
    // Use 404 page
    } else {
        let title_element = document.getElementById ("title");

        head_element.innerHTML = head_element.innerHTML + template_json ["404"] [0].join ("");
        title_element.innerHTML = template_json ["404"] [1].join ("");
    }

    // Fade header as page is scrolled
    window.onscroll = function () {
        let header = document.getElementsByTagName ("header") [0];
        let bounds = document.getElementsByTagName ("hr") [0].getBoundingClientRect ();

        header.style.opacity = Math.max (bounds.bottom / (bounds.bottom + window.pageYOffset), 0.5);
    }
}

build_page ();
