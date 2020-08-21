import React from "react";

const Title = (userDetails) => {
  return (
    <h1>Welcome {userDetails.userDetails.full_name}</h1>
  );
}

export default Title;