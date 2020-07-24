import React, { useState, useEffect } from "react";
import axios from "axios";
import GhPolyglot from "gh-polyglot";
import UserInfo from "../components/UserInfo";
import UserRepos from "../components/UserRepos";
import Stats from "../components/Stats";

const UserPage = (props) => {
  const username = props.match.params.userId;
  const [userInfo, setUserInfo] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [stats, setStats] = useState(null);

  const getUserInfo = () => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((data) => setUserInfo(data.data))
      .catch((err) => console.error(err));
  };

  const getUserRepos = () => {
    axios
      .get(`https://api.github.com/users/${username}/repos?per_page=30`)
      .then((data) => setUserRepos(data.data))
      .catch((err) => console.error(err));
  };

  const getStats = () => {
    const user = new GhPolyglot(`${username}`);
    user.userStats((err, stats) => {
      if (err) console.error(err);
      setStats(stats);
    });
  };
  //as soon as the component/page loads fires up the functions
  useEffect(() => {
    getUserInfo();
    getUserRepos();
    getStats();
  }, [username]);

  return (
    <div>
      {userInfo && <UserInfo userInfo={userInfo} />}
      {stats && <Stats stats={stats} userRepos={userRepos} />}
      {userRepos && <UserRepos userRepos={userRepos} />}
    </div>
  );
};

export default UserPage;
