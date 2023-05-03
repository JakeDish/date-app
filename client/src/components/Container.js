import Box from "@mui/material/Box";

function Container(props) {
  return (
    <Box
      sx={{
        width: "auto",
        padding: "40px",
      }}
    >
      {props.children}
    </Box>
  );
}

export default Container;
