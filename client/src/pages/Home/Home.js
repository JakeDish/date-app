import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard";
import Container from "../../components/Container";
import Button from "@mui/material/Button";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { QUERY_USERS } from "../../utils/queries";

const styles = {
  links: {
    color: "black",
    marginRight: "10px",
  },
};

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
    <div>
      <Header />
      <Container>
        {user ? (
          <Typography variant="h4" textAlign="center">
            {user.name}, Welcome to MatchMaker.
            <br />
            Please browse to find your match!
          </Typography>
        ) : (
          <Typography variant="h4" textAlign="center">
            Welcome to MatchMaker! <br />
            Sign up today to see your matches!
            <br />
            <Link to="/register" style={styles.links}>
              <Button size="large" color="primary" variant="outlined">
                SIGN UP!
              </Button>
            </Link>
            <Link to="/login" style={styles.links}>
              <Button size="large" color="primary" variant="outlined">
                Login
              </Button>
            </Link>
          </Typography>
        )}
        {/* Render all users in ProfileCard component */}
        {allusers
          ? allusers.map((singleUser) => {
              return (
                <>
                  {user ? (
                    <ProfileCard
                      image={singleUser.photo}
                      name={singleUser.name}
                      bio={singleUser.bio}
                      singleUser={singleUser._id}
                      loggedIn={user}
                      key={singleUser._id}
                    />
                  ) : (
                    <ProfileCard
                      image={singleUser.photo}
                      name={singleUser.name}
                      bio={singleUser.bio}
                      singleUser={singleUser._id}
                      loggedIn={user}
                      key={singleUser._id}
                    />
                  )}
                </>
              );
            })
          : "No users"}
      </Container>
    </div>
  );
}

export default Home;
