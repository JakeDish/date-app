import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import Container from "../../components/Container";
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
      <Container>
        <img src={user.photo} alt="user avatar" />
        <Typography variant="h4">Meet {user.name}</Typography>
        {/* dynamically render */}
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ fontSize: "18px" }}
        >
          {user.bio}
        </Typography>
      </Container>
    </div>
  );
}

export default Profile;
