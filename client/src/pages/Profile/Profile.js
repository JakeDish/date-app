import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import { QUERY_USER } from "../../utils/queries";

function Profile() {
  const { userId } = useParams();

  const { data } = useQuery(QUERY_USER, {
    variables: { userId: userId },
  });

  const user = data?.user || {};

  return (
    <div>
      <Header />
      <img src={user.photo} alt="user avatar" />
      <Typography variant="h4">{user.name}'s Profile</Typography>
      {/* dynamically render */}
      <Typography
        variant="body2"
        color="text.secondary"
        style={{ fontSize: "18px" }}
      >
        {user.bio}
      </Typography>
    </div>
  );
}

export default Profile;
