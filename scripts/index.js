import {import_json} from "/modules/utilities.mjs"

/*
 * Builds article panel
 *
 * article: JSON = JSON of article
 *
 * Pre: None
 * Post: None
 * Return: HTMLAnchorElement = Article panel
 */
function build_articles_panel (article) {
    let articles_panel = document.createElement ("a");
    let figure = document.createElement ("figure");
    let img = document.createElement ("img");
    let figcaption = document.createElement ("figcaption");

    /*
     * "<a href = \"LINK\" class = \"articles_panel\">",
     *     "<figure>",
     *         "<img src = \"COVER\" alt = \"CAPTION\" title = \"CAPTION\">",
     *         "<figcaption>TITLE</figcaption>",
     *     "</figure>",
     * "</a>"
     */
    articles_panel.classList.add ("articles_panel");
    articles_panel.href = article ["link"];
    img.src = article ["cover"] [0];
    img.alt = img.title = article ["cover"] [1];
    figcaption.innerHTML = article ["title"];
    figure.appendChild (img);
    figure.appendChild (figcaption);
    articles_panel.appendChild (figure);
    return articles_panel;
}

/*
 * Builds article index page
 *
 * Pre: None
 * Post: None
 * Return: None
 */
async function build_index () {
    let articles = await import_json ("/data/articles.json");
    let container = document.getElementById ("articles");
    let count = 0;

    // Populate container with appropriate panels
    for (let i of Object.values (articles [ARTICLES_TYPE])) {
        container.appendChild (build_articles_panel (await import_json (i)));
        count ++;
    }

    // Three-align container
    for (let i = count; i % 3 !== 0; i ++) {
        let panel = document.createElement ("div");

        panel.classList.add ("articles_panel");
        container.appendChild (panel);
    }
}

build_index ();
