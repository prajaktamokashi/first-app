
import React, { useState } from 'react';

const Userfrom = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>User Information Form</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={userInfo.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={userInfo.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" value={userInfo.age} onChange={handleChange} />
        </label>
      </form>
      <div>
        <h3>Information</h3>
        <p>Name: {userInfo.name}</p>
        <p>Email: {userInfo.email}</p>
        <p>Age: {userInfo.age}</p>
      </div>
    </div>
  );
};

export default Userfrom;
