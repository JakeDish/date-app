import Grid from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import Container from "../../components/Container";

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

function Dashboard() {
  const { data } = useQuery(QUERY_ME);
  let user;

  if (data) {
    user = data.me;
  }

  return (
    <div>
      <Header />
      <Container>
        {user ? (
          <Typography variant="h3"> {user.name}'s Dashboard</Typography>
        ) : (
          <Typography variant="h3"> No User Defined</Typography>
        )}
      </Container>
    </div>
  );
}

export default Dashboard;
