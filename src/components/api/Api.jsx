const Api = {
    GetAllPosts: () => {
        return fetch("https://api.github.com/users/Kamol21/repos");
    },
    GetAvatar: () => {
        return fetch("https://api.github.com/users/Kamol21");
    }
}

export default Api;