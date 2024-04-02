import React from "react";
import { Link } from "react-router-dom";
export default function Users({ users, activeUser, setActiveUser }) {
  return (
    <div
      style={{
        height: "100vh",
        border: "2px solid #6E6E6E",
        padding: "16px",
        borderRadius: " 8px",
        width: "40%",
      }}
    >
      {users.map((user, index) => (
        <UserItem
          user={user}
          isActiveUser={user.id === activeUser.id}
          setActiveUser={setActiveUser}
        />
      ))}
    </div>
  );
}
function UserItem({ user, isActiveUser, setActiveUser }) {
  return (
    <div
      onClick={() => setActiveUser(user)  }
      style={{
        padding: "8px",
        background: isActiveUser ? "#26AE60" : "#586776",
        marginTop: 8,
        borderRadius: "8px",
        color: isActiveUser ? "#000" : "#53E0BC",
        cursor: isActiveUser ? "alias" : "pointer",
      }}
    >
      <Link to={`/${user.id}`}>
      {user.name}
      </Link>
    </div>
  );
}