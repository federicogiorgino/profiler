import React from "react";

const Repo = ({ repo }) => {
  return (
    <div className='repos-card'>
      <div className='card-title'>
        <a href={repo.html_url}>
          <i className='fa fa-folder' />
          {` ${repo.name}`}
        </a>
      </div>
      <div className='card-bottom'>
        <div className='card-infos'>
          <p>
            <i className='fa fa-file-code-o' /> {`  ${repo.language}`}
          </p>
          <p>
            <i className='fa fa-star' />
            {`  ${repo.stargazers_count}`}{" "}
          </p>
          <p>
            <i className='fa fa-code-fork'></i> {`  ${repo.forks}`}
          </p>
        </div>

        <p>{`${repo.size} kb`} </p>
      </div>
    </div>
  );
};

export default Repo;
