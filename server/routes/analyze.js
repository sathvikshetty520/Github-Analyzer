const express = require("express");
const router = express.Router();

const {
    getUser,
    getRepos
} = require("../services/githubService");

const analyzer =
    require("../utils/analyzer");

router.post("/", async (req, res) => {

    try {

        const { username } = req.body;

        if (!username) {

            return res.status(400).json({
                message: "Username is required"
            });
        }

        const user =
            await getUser(username);

        const repos =
            await getRepos(username);

        // ANALYSIS

        const languageData =
            analyzer.getMostUsedLanguage(repos);

        const totalStars =
            analyzer.getTotalStars(repos);

        const totalForks =
            analyzer.getTotalForks(repos);

        const inactiveRepos =
            analyzer.getInactiveRepos(repos);

        const feedback =
            analyzer.generateFeedback({

                inactiveRepos:
                    inactiveRepos.length,

                totalStars,

                mostUsedLanguage:
                    languageData.mostUsed
            });

        // RESPONSE

        res.json({

            user: {

                login: user.login,

                avatar:
                    user.avatar_url,

                profileUrl:
                    user.html_url,

                publicRepos:
                    user.public_repos,

                followers:
                    user.followers,

                following:
                    user.following,

                bio:
                    user.bio
            },

            stats: {

                totalStars,

                totalForks,

                mostUsedLanguage:
                    languageData.mostUsed,

                languages:
                    languageData.languages,

                inactiveRepos:
                    inactiveRepos.length
            },

            feedback
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            message:
                "Failed to analyze GitHub profile"
        });
    }
});

module.exports = router;