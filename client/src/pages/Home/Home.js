import Grid from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import Card from "../../components/Card";

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

function Home() {
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me || {};

  return (
    <Grid container spacing={2}>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Header />
        <Typography variant="h3">
          {" "}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <span>Welcome {user.name}. Currently on MatchMaker</span>
          )}
        </Typography>
        {/* dynamically render cards */}
        <Card />
      </Grid>
    </Grid>
  );
}

export default Home;
