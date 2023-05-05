import Box from "@mui/material/Box";

function Container(props) {
  return (
    <Box
      sx={{
        width: "auto",
        padding: "40px 80px 120px 80px",
        minHeight: "100vh",
      }}
    >
      {props.children}
    </Box>
  );
}

export default Container;
