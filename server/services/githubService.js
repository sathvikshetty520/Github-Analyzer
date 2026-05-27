const axios = require("axios");

const headers = {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
};

async function getUser(username) {
    const response = await axios.get(
        `https://api.github.com/users/${username}`,
        { headers }
    );

    return response.data;
}

async function getRepos(username) {
    const response = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=100`,
        { headers }
    );

    return response.data;
}

module.exports = {
    getUser,
    getRepos
};