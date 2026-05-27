function getMostUsedLanguage(repos) {

    const languages = {};

    repos.forEach(repo => {

        if (!repo.language) return;

        languages[repo.language] =
            (languages[repo.language] || 0) + 1;
    });

    let mostUsed = "";
    let max = 0;

    for (const lang in languages) {

        if (languages[lang] > max) {
            max = languages[lang];
            mostUsed = lang;
        }
    }

    return {
        mostUsed,
        languages
    };
}

function getTotalStars(repos) {

    return repos.reduce((total, repo) => {
        return total + repo.stargazers_count;
    }, 0);
}

function getTotalForks(repos) {

    return repos.reduce((total, repo) => {
        return total + repo.forks_count;
    }, 0);
}

function getInactiveRepos(repos) {

    const sixMonthsAgo =
      new Date(
        Date.now() - 1000 * 60 * 60 * 24 * 180
      );

    return repos.filter(repo => {

        return (
          new Date(repo.pushed_at)
          < sixMonthsAgo
        );
    });
}

function generateFeedback(stats) {

    const feedback = [];

    if (stats.inactiveRepos > 5) {

        feedback.push(
          "Most repositories became inactive after creation."
        );
    }

    if (stats.totalStars > 20) {

        feedback.push(
          "Your projects are gaining attention."
        );
    }

    if (
      stats.mostUsedLanguage === "JavaScript"
    ) {

        feedback.push(
          "You work more on JavaScript ecosystems."
        );
    }

    return feedback;
}

module.exports = {
    getMostUsedLanguage,
    getTotalStars,
    getTotalForks,
    getInactiveRepos,
    generateFeedback
};