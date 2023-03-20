import {import_json} from "/modules/files.mjs"

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
    img.src = article ["cover"];
    img.alt = img.title = article ["caption"];
    figcaption.innerHTML = article ["title"];
    figure.appendChild (img);
    figure.appendChild (figcaption);
    articles_panel.appendChild (figure);
    return articles_panel;
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
async function build_index () {
    let articles = await import_json ("/data/articles.json");
    let container = document.getElementById ("articles");
    let type = container.textContent;
    let count = 0;

    container.innerHTML = "";

    // Populate container with appropriate panels
    for (let i of Object.values (articles [type])) {
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
