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
        .catch((error) => console.log ("File Import Error: " + error));
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
        .catch((error) => console.log ("JSON Import Error: " + error));
}

/*
 * Builds header with dropdown links
 *
 * template: string = template for tab
 *
 * Pre: None
 * Post: NOne
 * Return: None
 */
async function build_header (template) {
    let contents = [await import_json ("/history/index.json"), await import_json ("/projects/index.json")];
    let dropdowns = document.getElementsByClassName ("dropdown_content");

    // Populate dropdowns with appropriate tabs
    for (let i = 0; i < dropdowns.length; i ++) {
        Object.values (contents [i]).forEach (j => dropdowns [i].innerHTML += template.replace ("LINK", j [0]).replace ("TITLE", j [1]));
    }
}

/*
 * Builds skeleton page (header and footer)
 *
 * Pre: None
 * Post: None
 * Return: None
 */
async function build_skeleton () {
    let template = await import_json ("/template.json");
    // let head = document.getElementsByTagName ("head") [0];
    let body = document.getElementsByTagName ("body") [0];

    // head.innerHTML += template ["favicon"];
    body.innerHTML = template ["header"].join ("") + body.innerHTML + template ["footer"].join ("");
    build_header (template ["tab"]);

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

/*
 * Builds article index page
 *
 * json: JSON = JSON of index
 *
 * Pre: None
 * Post: None
 * Return: None
 */
async function build_index (json) {
    let template = await import_json ("/template.json");
    let container = document.getElementById ("articles");
    let count = 0;

    // Populate container with appropriate panels
    Object.values (json).forEach (i => {
        container.innerHTML += template ["articles_panel"].join ("").replace ("LINK", i [0]).replace ("TITLE", i [1]).replace ("IMAGE", i [2]).replaceAll ("CAPTION", i [3]);
        count ++;
    });

    // Three-align container
    if (count % 3 !== 0) {
        for (let i = 0; i < 3 - (count % 3); i ++) {
            let panel = document.createElement ("div");

            panel.classList.add ("articles_panel");
            container.appendChild (panel);
        }
    }
}

/*
 * Builds article page
 *
 * json: JSON = JSON of article
 *
 * Pre: None
 * Post: None
 * Return: None
 */
async function build_article (json) {
    // TODO: Implement some sort of JSON storage before implementing this
}

/*
 * Builds page
 *
 * Pre: None
 * Post: None
 * Return: None
 */
async function build_page () {
    let file = await import_json (window.location.pathname.replace (".html", ".json"));

    build_skeleton ();

    if (file !== undefined) {
        if (window.location.pathname.includes ("index")) {
            build_index (file);
        }
    }
}

build_page ();
