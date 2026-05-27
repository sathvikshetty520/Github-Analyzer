import { useState } from "react";
import axios from "axios";

function App() {

  const [profileUrl, setProfileUrl] =
    useState("");

  const [data, setData] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function analyzeProfile() {

    try {

      setLoading(true);
      setError("");
      setData(null);

      const username =
        profileUrl
          .split("github.com/")[1]
          ?.replace("/", "");

      if (!username) {

        setError(
          "Please enter a valid GitHub profile URL"
        );

        return;
      }

      const response =
        await axios.post(
          "http://localhost:5000/analyze",
          { username }
        );

      setData(response.data);

    } catch (error) {

      console.log(error);

      setError(
        "Failed to analyze profile"
      );

    } finally {

      setLoading(false);
    }
  }

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >

      <h1>
        GitHub Profile Analyzer
      </h1>

      <div
        style={{
          marginTop: "20px"
        }}
      >

        <input
          type="text"
          placeholder="Paste GitHub Profile URL"
          value={profileUrl}
          onChange={(e) =>
            setProfileUrl(e.target.value)
          }
          style={{
            width: "400px",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid gray"
          }}
        />

        <button
          onClick={analyzeProfile}
          style={{
            padding: "12px 20px",
            marginLeft: "10px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer"
          }}
        >
          Analyze
        </button>

      </div>

      {loading && (
        <p style={{ marginTop: "20px" }}>
          Analyzing profile...
        </p>
      )}

      {error && (
        <p style={{ marginTop: "20px" }}>
          {error}
        </p>
      )}

      {data && (

        <div
          style={{
            marginTop: "40px",
            background: "white",
            padding: "30px",
            borderRadius: "12px"
          }}
        >

          <img
            src={data.user.avatar}
            alt=""
            width="120"
            style={{
              borderRadius: "50%"
            }}
          />

          <h2>
            {data.user.login}
          </h2>

          <p>
            {data.user.bio}
          </p>

          <a
            href={data.user.profileUrl}
            target="_blank"
            rel="noreferrer"
          >
            View GitHub Profile
          </a>

          <hr />

          <h3>Profile Stats</h3>

          <p>
            Public Repositories:
            {" "}
            {data.user.publicRepos}
          </p>

          <p>
            Followers:
            {" "}
            {data.user.followers}
          </p>

          <p>
            Following:
            {" "}
            {data.user.following}
          </p>

          <p>
            Total Stars:
            {" "}
            {data.stats.totalStars}
          </p>

          <p>
            Total Forks:
            {" "}
            {data.stats.totalForks}
          </p>

          <p>
            Most Used Language:
            {" "}
            {data.stats.mostUsedLanguage}
          </p>

          <p>
            Inactive Repositories:
            {" "}
            {data.stats.inactiveRepos}
          </p>

          <hr />

          <h3>Languages</h3>

          <ul>

            {Object.entries(
              data.stats.languages
            ).map(([lang, count]) => (

              <li key={lang}>
                {lang}: {count}
              </li>
            ))}

          </ul>

          <hr />

          <h3>Feedback</h3>

          <ul>

            {data.feedback.map(
              (item, index) => (

                <li key={index}>
                  {item}
                </li>
              )
            )}

          </ul>

        </div>
      )}

    </div>
  );
}

export default App;