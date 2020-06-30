import  MoreButton from './components/MoreButton';
import PostList from './components/PostList';
import React from './react-api';
import './components/PostListSearch';
import Search from "./components/PostListSearch";
import BasicDataProvider from './providers/basic-data-provider';

let startCount = 10;
let nextCount = 10;

const searchInput = Search.createInputTitle();

const searchButton = Search.createButtonSearch();
searchButton.onclick = function() {
    startCount = 10;
    update(startCount, searchInput.value); 
}

const moreButton = MoreButton.createButton();
moreButton.onclick = function() {
    startCount += nextCount;
    update(startCount, searchInput.value); 
}

function updateUI(posts) {
    let all = React.createElement("div",
    undefined,
    [
        Search.createSearchBlock(searchInput, searchButton),
        PostList.createPostList(posts),
        moreButton
    ]);

    document.querySelector("#app").innerHTML = '';

    React.render(all, document.querySelector("#app"));
};

function update(count, search) {
    BasicDataProvider.getPosts(count, search).
    then(posts => {
        updateUI(posts);
    });
}

updateUI([]);
update(startCount, '');
