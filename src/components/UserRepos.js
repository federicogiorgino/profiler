import React from "react";
import Repo from "./Repo";

const UserRepos = ({ userRepos }) => {
  return (
    <>
      <p style={{ fontSize: "2rem", color: "white", fontWeight: "bold" }}>User repos</p>
      <div className='card-grid'>
        {userRepos && userRepos.map((repo, i) => <Repo repo={repo} key={i} />)}
      </div>
    </>
  );
};

export default UserRepos;
