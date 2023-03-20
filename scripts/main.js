import {import_json} from "/modules/files.mjs"

/*
 * Builds dropdown item
 *
 * article: JSON = JSON of article
 *
 * Pre: None
 * Post: None
 * Return: HTMLAnchorElement = Dropdown item
 */
function build_dropdown_item (article) {
    let dropdown_item = document.createElement ("a");

    // "<a href = \"LINK\" class = \"dropdown_item menu_link\">TITLE</a>"
    dropdown_item.classList.add ("dropdown_item", "menu_link");
    dropdown_item.href = article ["link"];
    dropdown_item.innerHTML = article ["title"];
    return dropdown_item;
}

/*
 * Builds header with dropdown links
 *
 * Pre: None
 * Post: None
 * Return: None
 */
async function build_header () {
    let articles = await import_json ("/data/articles.json");
    let dropdowns = document.getElementsByClassName ("dropdown_content");

    // Populate dropdowns with appropriate tabs
    for (let i = 0; i < dropdowns.length; i ++) {
        let type = dropdowns [i].textContent;

        dropdowns [i].innerHTML = "";

        for (let j of Object.values (articles [type])) {
            dropdowns [i].appendChild (build_dropdown_item (await import_json (j)));
        }
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
    let template = await import_json ("/data/template.json");
    let body = document.getElementsByTagName ("body") [0];

    body.innerHTML = template ["header"].join ("") + body.innerHTML + template ["footer"].join ("");
    build_header ();

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
