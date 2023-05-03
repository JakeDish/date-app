import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard";
import Container from "../../components/Container";
import Yoda from "../../img/Yoda.webp"



import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { QUERY_USERS } from "../../utils/queries";

const styles = {
  links: {
    color: "black",
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
            {" "}
            Welcome to MatchMaker! <br />
            Please{" "}
            <Link to="/login" style={styles.links}>
              login
            </Link>{" "}
            to see your potential matches!
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
                    />
                  ) : (
                    <ProfileCard
                      image={Yoda}
                      name={singleUser.name}
                      bio={singleUser.bio}
                      singleUser={singleUser._id}
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
