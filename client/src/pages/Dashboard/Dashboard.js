import Grid from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

function Dashboard() {
  const { data } = useQuery(QUERY_ME);
  let user;

  if (data) {
    user = data.me;
  }

  return (
    <Grid container spacing={2}>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Header />
        {user ? (
          <Typography variant="h3"> {user.name}'s Dashboard</Typography>
        ) : (
          <Typography variant="h3"> No User Defined</Typography>
        )}
      </Grid>
    </Grid>
  );
}

export default Dashboard;
