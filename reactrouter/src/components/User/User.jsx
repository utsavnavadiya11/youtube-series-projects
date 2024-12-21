import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-green-600 text-white text-3xl rounded-lg shadow-lg p-4 m-6 text-center">
      User : {userid}
    </div>
  );
}

export default User;
