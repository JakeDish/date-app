import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Heart from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import Auth from "../utils/auth";
import { QUERY_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import "animate.css";

const styles = {
  links: {
    color: "white",
    textDecoration: "none",
  },
};

export default function Header() {
  const { data } = useQuery(QUERY_ME);

  let user;
  if (data) {
    user = data.me;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#130C11" }} position="static">
        <Toolbar>
          <Heart sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={styles.links}>
              {" "}
              MatchMaker{" "}
            </Link>
          </Typography>
          <Link to="/matches" style={styles.links}>
            {user ? (
              <Button
                // color="inherit"
                sx={{
                  color: "#ED254E",
                  fontWeight: "900",
                  border: "2px solid #ED254E",
                }}
                variant="outlined"
                className="animate__animated animate__infinite	infinite animate__pulse"
              >
                <Diversity1Icon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                />
                YOUR MATCHES{" "}
              </Button>
            ) : (
              ""
            )}
          </Link>
          <Link to="/register" style={styles.links}>
            {user ? "" : <Button color="inherit">Register </Button>}
          </Link>
          {user ? (
            <Button color="inherit" onClick={() => Auth.logout()}>
              <Link to="/" style={styles.links}>
                Logout
              </Link>
            </Button>
          ) : (
            <Button color="inherit">
              <Link to="/login" style={styles.links}>
                Login
              </Link>
            </Button>
          )}
          {user ? (
            <Link to="/dashboard">
              <Avatar alt="Remy Sharp" src={user.photo} />
            </Link>
          ) : (
            <AccountCircleIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
