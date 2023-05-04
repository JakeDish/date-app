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

import Auth from "../utils/auth";
import { QUERY_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";

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
      <AppBar position="static">
        <Toolbar>
          <Heart sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={styles.links}>
              {" "}
              MatchMaker{" "}
            </Link>
          </Typography>
          <Link to="/login" style={styles.links}>
            <Button color="inherit">Login</Button>{" "}
          </Link>
          <Link to="/register" style={styles.links}>
            <Button color="inherit">Register</Button>{" "}
          </Link>
          <Button color="inherit" onClick={() => Auth.logout()}>
            <Link to="/" style={styles.links}>
              Logout
            </Link>
          </Button>{" "}
          {data ? (
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
