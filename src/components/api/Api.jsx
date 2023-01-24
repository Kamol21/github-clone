const Api = {
    GetAllPosts: () => {
        return fetch("https://api.github.com/users/Kamol21/repos");
    }
}

export default Api;