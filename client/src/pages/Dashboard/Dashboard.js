import Grid from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";

function Dashboard() {
  return (
    <Grid container spacing={2}>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Header />
        <Typography variant="h3"> Your Dashboard</Typography>
        {/* dynamically render */}
      </Grid>
    </Grid>
  );
}

export default Dashboard;
