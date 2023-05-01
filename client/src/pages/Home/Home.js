import Grid from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import Card from "../../components/Card";

function Home() {
  return (
    <Grid container spacing={2}>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Header />
        <Typography variant="h3"> Currently on MatchMaker</Typography>
        {/* dynamically render */}
        <Card />
      </Grid>
    </Grid>
  );
}

export default Home;
