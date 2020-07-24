import React, { useState } from "react";
import Logo from "../logo.png";
const Main = (props) => {
  const [username, setUsername] = useState("");

  const onChange = (e) => {
    setUsername(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.history.push(`/user/${username}`);
  };

  return (
    <>
      <div className='search-page'>
        <section>
          <img src={Logo} alt='' />
          <p>Profiler </p>
        </section>
        <form onSubmit={onSubmit} className='container'>
          <input type='text' placeholder='Enter Github Username' onChange={onChange} />
          <div className='search'></div>
        </form>
      </div>
    </>
  );
};

export default Main;
