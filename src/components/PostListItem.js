import React from '../react-api';

import '../style.css';

class PostListItem {
    createPostListItem(id, title, body) {
        const item = React.createElement(
            'div',
            undefined,
            [
                React.createElement('h3', undefined, `id: ${id}`),
                React.createElement('h4', undefined, `Title: ${title}`),
                React.createElement('p', undefined, `${body}`),
            ]
        );

        item.classList.add("item");

        return item;
    }
}

export default new PostListItem();