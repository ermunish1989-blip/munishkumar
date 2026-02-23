import defaultBlogData from '../data/blogData.json';

export const STORAGE_KEY = 'mk_blog_posts';
export const FEATURED_KEY = 'mk_featured_post';

export const getBlogPosts = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : defaultBlogData.posts;
    } catch {
        return defaultBlogData.posts;
    }
};

export const getFeaturedPost = () => {
    try {
        const stored = localStorage.getItem(FEATURED_KEY);
        return stored ? JSON.parse(stored) : defaultBlogData.featuredPost;
    } catch {
        return defaultBlogData.featuredPost;
    }
};

export const savePosts = (posts) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
};
