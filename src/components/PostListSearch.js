class Search {
    createInputTitle() {
        let inputTitle = document.createElement("input");
        inputTitle.setAttribute("placeholder", "search for title ...");
        inputTitle.setAttribute("value", "");

        return inputTitle;
    }

    createButtonSearch() {
        let btn = document.createElement("button");
        btn.setAttribute("class", "search-btn");
        btn.innerText = "search";

        return btn;
    }

    createSearchBlock(input, button) {
        let searchBlock = document.createElement("div");
        searchBlock.setAttribute("class", "search-block");
        searchBlock.appendChild(input);
        searchBlock.appendChild(button);

        return searchBlock;
    }
}

export default new Search();
