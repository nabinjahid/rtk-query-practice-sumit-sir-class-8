export const getPosts = async () => {
    const res = await fetch(
        "https://jsonplaceholder.typicodes.com/posts?_limit=5"
    );
    return res.json();
};
