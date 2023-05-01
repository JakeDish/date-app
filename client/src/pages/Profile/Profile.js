import Grid from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";

function Profile() {
  return (
    <Grid container spacing={2}>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Header />
        <Typography variant="h3">[user name]'s Profile</Typography>
        {/* dynamically render */}
        <p>Other user's profile</p>
      </Grid>
    </Grid>
  );
}

export default Profile;
