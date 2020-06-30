import config from '../config/config';

class BasicDataProvider {
    getPosts(count, search) {
        return fetch(`${config.api_url}/posts`)
            .then(response => response.json())
            .then(posts => {
                let filterPosts = posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));
                return filterPosts.slice(0, count);
            }); 
    }
}

export default new BasicDataProvider();
