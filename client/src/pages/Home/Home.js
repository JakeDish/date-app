import { Link } from "react-router-dom";
import styled from "styled-components";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Typography from "@mui/material/Typography";
import ArrowDown from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileCard from "../../components/ProfileCard";
import Container from "../../components/Container";
import Button from "@mui/material/Button";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { QUERY_USERS } from "../../utils/queries";
import Couple from "../../img/pexels-photo-1405739.webp";
import "animate.css";

const Hero = styled.header`
  height: 60vh;

  background ${`
    linear-gradient(0deg,
      rgba(40, 11, 128, 0.8),
      rgba(40, 11, 128, 0.8)
    ),
    url(${Couple})
      no-repeat center center/cover;
      `}
`;

const styles = {
  heroInner: {
    position: "relative",
    height: "100%",
  },
  heroText: {
    paddingTop: "8%",
  },
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
      <Hero>
        <div style={styles.heroInner}>
          <div style={styles.heroText}>
            {user ? (
              <>
                <Typography
                  variant="h2"
                  textAlign="center"
                  sx={{ fontWeight: "900" }}
                >
                  {user.name}
                </Typography>
                <Typography variant="h4" textAlign="center">
                  <div style={{ marginBottom: "24px" }}>
                    Welcome to MatchMaker.
                    <br />
                    Please browse to find your match!
                  </div>
                  <Link to="/dashboard" style={styles.links}>
                    <Button size="large" color="primary" variant="outlined">
                      View Your Dashboard
                    </Button>
                  </Link>
                  <br />
                  <ScrollLink to="#start" smooth={true} duration={500}>
                    <ArrowDown
                      style={{
                        width: 50,
                        height: 50,
                        cursor: "pointer",
                        marginTop: "40px",
                      }}
                      className="animate__animated animate__slideInDown animate__fast animate__repeat-2"
                    />
                  </ScrollLink>
                </Typography>
              </>
            ) : (
              <Typography variant="h4" textAlign="center">
                <div style={{ marginBottom: "24px" }}>
                  Welcome to MatchMaker! <br />
                  Sign up today to see your matches!
                </div>
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
                <br />
                <ScrollLink to="#start" smooth={true} duration={500}>
                  <ArrowDown
                    style={{
                      width: 50,
                      height: 50,
                      cursor: "pointer",
                      marginTop: "40px",
                    }}
                    className="animate__animated animate__slideInDown animate__fast animate__repeat-2"
                  />
                </ScrollLink>
              </Typography>
            )}
          </div>
        </div>
      </Hero>
      <Container>
        <div id="#start"></div>
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
      <Footer />
    </div>
  );
}

export default Home;
