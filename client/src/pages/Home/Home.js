import Grid from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard";

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { QUERY_USERS } from "../../utils/queries";

function Home() {
  const loggedInUser = useQuery(QUERY_ME);
  const { data } = useQuery(QUERY_USERS);

  let user;
  if (loggedInUser.data) {
    user = loggedInUser.data.me;
  }

  let allusers;
  if (data) {
    allusers = data.users;
  }

  return (
    <Grid container spacing={2}>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Header />
        {user ? (
          <Typography variant="h3">
            Welcome {user.name}. Currently on MatchMaker
          </Typography>
        ) : (
          <Typography variant="h3"> No User Defined</Typography>
        )}
        {/* Render all users in ProfileCard component */}
        {allusers
          ? allusers.map((user) => {
              return <ProfileCard name={user.name} />;
            })
          : "No users"}
      </Grid>
    </Grid>
  );
}

export default Home;
