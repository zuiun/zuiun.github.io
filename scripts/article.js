import {import_json} from "/modules/utilities.mjs"

/*
 * Builds article title
 *
 * article: JSON = JSON of article
 *
 * Pre: None
 * Post: None
 * Return: HTMLAnchorElement = Article title
 */
function build_h1 (article) {
    let h1 = document.createElement ("h1");

    // <h1>TITLE</h1>
    h1.innerHTML = article ["title"];
    return h1;
}

/*
 * Builds article cover
 *
 * article: JSON = JSON of article
 *
 * Pre: None
 * Post: None
 * Return: HTMLAnchorElement = Article cover
 */
function build_article_cover (article) {
    let figure = document.createElement ("figure");
    let img = document.createElement ("img");
    let figcaption = document.createElement ("figcaption");
    let a = document.createElement ("a");

    /*
     * "<figure>",
     *     "<img src = \"COVER\" alt = \"CAPTION\" title = \"CAPTION\">",
     *     <figcaption>,
     *         "COMMENT<br>",
     *         "<a href = "SOURCE" target = "_blank">Image Source</a>",
     *     "</figcaption>",
     * "</figure>",
     */
    img.src = article ["cover"] [0];
    img.alt = img.title = article ["cover"] [1];
    figcaption.innerHTML = article ["cover"] [2];

    if (article ["cover"].length > 3) {
        a.href = article ["cover"] [3];
        a.target = "_blank";
        a.innerHTML = "Image Source";
        figcaption.append (document.createElement ("br"), a);
    }

    figure.appendChild (img);
    figure.appendChild (figcaption);
    return figure;
}

/*
 * Builds article summary
 *
 * article: JSON = JSON of article
 *
 * Pre: None
 * Post: None
 * Return: HTMLAnchorElement = Article summary
 */
function build_summary (article) {
    let p = document.createElement ("p");

    // <p>SUMMARY</p>
    p.innerHTML = article ["summary"];
    return p;
}

/*
 * Builds article section
 *
 * contents: array = article contents
 *
 * Pre: None
 * Post: None
 * Return: HTMLAnchorElement = Article section
 */
function build_section (contents) {
    let section = document.createElement ("section");
    let h2 = document.createElement ("h2");

    /*
     * "<section id = \"\">",
     *     "<h2>TITLE<sup><a href = \"#ID\">#</a></sup></h2>",
     * "</section>"
     */
    section.id = contents [0] [0];
    h2.innerHTML = contents [0] [1] + "<sup><a href = \"#" + contents [0] [0] + "\">#</a></sup>"
    section.appendChild (h2);

    for (let i = 1; i < contents.length; i ++) {
        let type = contents [i] [0];
        let element = document.createElement (type);

        switch (type) {
            case "p":
                for (let j = 1; j < contents [i].length; j ++) {
                    element.innerHTML += contents [i] [j] + " ";
                }

                break;
            case "ul":
                for (let j = 1; j < contents [i].length; j ++) {
                    let li = document.createElement ("li");

                    li.innerHTML = contents [i] [j];
                    element.appendChild (li);
                }

                break;
            case "embed":
                element.src = contents [i] [1];
                element.type = contents [i] [2];
                // element.innerHTML = "<embed src = \"" + contents [i] [1] + "\" type = \"" + contents [i] [2] + "\">";
                break;
            case "video":
                element.controls = true;
                // element.src = contents [i] [1];
                // Add sources here
                element.innerHTML = "Your browser does not support the video tag.";
        }

        section.appendChild (element);
    }

    return section;
}

/*
 * Builds article page
 *
 * Pre: None
 * Post: None
 * Return: None
 */
async function build_article () {
    let article = await import_json ("/data" + window.location.pathname.replace (".html", ".json"));
    let container = document.getElementsByTagName ("article") [0];

    container.append (build_h1 (article), document.createElement ("hr"));

    if (USE_COVER) {
        container.appendChild (build_article_cover (article));
    }

    container.appendChild (build_summary (article));

    for (let i of article ["sections"]) {
        container.appendChild (build_section (i));
    }
}

build_article ();
