/*
 * Builds article index page
 *
 * Pre: None
 * Post: None
 * Return: None
 */
async function build_index () {
    let container = document.getElementById ("articles");
    let count = container.children.length;

    // Three-align container
    for (let i = count; i % 3 !== 0; i ++) {
        let panel = document.createElement ("div");

        panel.classList.add ("articles_panel");
        container.appendChild (panel);
    }
}

build_index ();
