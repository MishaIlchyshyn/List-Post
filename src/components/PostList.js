import PostListItem from './PostListItem';
import React from '../react-api';

class PostList {
    createPostList(posts) {
        let postListItems = posts.map(post => {
            return PostListItem.createPostListItem(post.id, post.title, post.body);
        })

        const todo = React.createElement("div", undefined, postListItems);
        todo.setAttribute("id", "todo");

        return todo;
    }
}

export default new PostList();
