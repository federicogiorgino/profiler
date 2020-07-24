import React from "react";

const UserInfo = ({ userInfo }) => {
  const formatDate = (d) => {
    let date = new Date(d);
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }

    d = dd + "/" + mm + "/" + yyyy;

    return d;
  };

  return (
    <div className='user-info-panel'>
      {userInfo.avatar_url && <img className='profile-image' src={userInfo.avatar_url} alt='' />}
      {userInfo.login && (
        <a
          className='image-link'
          href={userInfo.html_url}
          target='_blank'
          rel='noopener noreferrer'
        >
          @{userInfo.login}
        </a>
      )}
      <div className='user-info-specifics'>
        {userInfo.name && <h1 className='panel-item'>{userInfo.name}</h1>}

        {userInfo.location && (
          <p className='panel-item'>
            Located in <strong>{userInfo.location}</strong>
          </p>
        )}
        {userInfo.company && (
          <p className='panel-item'>
            Working at <strong>{userInfo.company}</strong>
          </p>
        )}
        {userInfo.created_at && (
          <p className='panel-item'>
            Github User since <strong>{formatDate(userInfo.created_at)}</strong>
          </p>
        )}
      </div>
      <div className='stats-panel'>
        <div className='stats-panel-item'>
          <p className='stats-panel-item-label'>
            <strong>Repos</strong>
          </p>
          <p className='stats-panel-item-number'>{userInfo.public_repos}</p>
        </div>

        <div className='stats-panel-item'>
          <p className='stats-panel-item-label'>
            <strong>Followers</strong>
          </p>
          <p className='stats-panel-item-number'>{userInfo.followers}</p>
        </div>
        <div className='stats-panel-item'>
          <p className='stats-panel-item-label'>
            <strong>Following</strong>
          </p>
          <p className='stats-panel-item-number'>{userInfo.following}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
