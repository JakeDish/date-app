import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";

const styles = {
  icon: {
    padding: "4px",
    margin: "0 64px",
    color: "white",
  },
  text: {
    fontSize: "14px",
    color: "white",
    textAlign: "center",
  },
};

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
      }}
    >
      <BottomNavigation
        sx={{ backgroundColor: "#0a365e", padding: "16px 0" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to="https://github.com/JakeDish" target="_blank">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <GitHubIcon style={styles.icon} />
            <Typography style={styles.text} variant="body1">
              Jake
            </Typography>
          </Box>
        </Link>
        <Link to="https://github.com/siahmoymajid" target="_blank">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <GitHubIcon style={styles.icon} />
            <Typography style={styles.text} variant="body1">
              Sia
            </Typography>
          </Box>
        </Link>
        <Link to="https://github.com/Sm3gma" target="_blank">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <GitHubIcon style={styles.icon} />
            <Typography style={styles.text} variant="body1">
              Gabriel
            </Typography>
          </Box>
        </Link>
        <Link to="https://github.com/ericnguyen23" target="_blank">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <GitHubIcon style={styles.icon} />
            <Typography style={styles.text} variant="body1">
              Eric
            </Typography>
          </Box>
        </Link>
      </BottomNavigation>
    </Box>
  );
}
