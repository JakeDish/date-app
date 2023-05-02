import { useQuery } from "@apollo/client";
import Grid from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import { QUERY_USER } from "../../utils/queries";



function Profile() {
  const { error, data } = useQuery(QUERY_USER);
  let user;
  if (data) {
    user = data.user;    
  }
  console.log(error)
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
