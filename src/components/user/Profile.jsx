import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const Profile = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="container my-5 text-center">
      <h1>Welcome {user?.name}</h1>
    </div>
  );
};

export default Profile;
