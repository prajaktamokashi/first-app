import React from 'react';
import { useParams } from 'react-router-dom';
const UserDetails = ({ users,setActiveUser }) => {
  const { userId } = useParams();
  const activeUser = users.find((user) => user.id.toString() === userId);
  if (!activeUser) {
    return <div>User not found</div>;
  }
  return (
    <div>
      <h2>User Details</h2>
      <p>
        <strong>Name:</strong> {activeUser.name}
      </p>
      <p>
        <strong>Username:</strong> {activeUser.username}
      </p>
      <p>
        <strong>Email:</strong> {activeUser.email}
      </p>
      <p>
        <strong>Address:</strong> {activeUser.address.street},{" "}
        {activeUser.address.suite}, {activeUser.address.city},{" "}
        {activeUser.address.zipcode}
      </p>
      <p>
        <strong>Phone:</strong> {activeUser.phone}
      </p>
      <p>
        <strong>Website:</strong> {activeUser.website}
      </p>
      <p>
        <strong>Company:</strong> {activeUser.company.name}
      </p>
    </div>
  );
};
export default UserDetails;