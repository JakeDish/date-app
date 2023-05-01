import Grid from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard";

function Matches() {
  return (
    <Grid container spacing={2}>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Header />
        <Typography variant="h3"> Your Matches</Typography>
        {/* dynamically render */}
        <ProfileCard />
      </Grid>
    </Grid>
  );
}

export default Matches;