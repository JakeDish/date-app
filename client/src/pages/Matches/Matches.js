import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Header from "../../components/Header";
import Container from "../../components/Container";

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { QUERY_USERS } from "../../utils/queries";

function Matches() {
  const loggedInUser = useQuery(QUERY_ME);
  const { data } = useQuery(QUERY_USERS);

  let user;
  let userInterests;
  if (loggedInUser.data) {
    user = loggedInUser.data.me;
    userInterests = user.interests;
  }

  let allusers;
  if (data) {
    allusers = data.users;
  }

  return (
    <>
      <Header />
      <Container>
        <Typography variant="h3" align="center">
          {" "}
          Your Matches
        </Typography>

        {allusers && (
          <>
            {allusers.map((item) => {
              if (
                userInterests.includes(item.interests) &&
                user._id !== item._id
              ) {
                return (
                  <>
                    <Card sx={{ maxWidth: 345 }} key={item._id}>
                      <CardMedia
                        sx={{ height: 240 }}
                        image={item.photo}
                        title="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.bio}
                        </Typography>
                      </CardContent>
                    </Card>
                  </>
                );
              }
            })}
          </>
        )}
      </Container>
    </>
  );
}

export default Matches;
