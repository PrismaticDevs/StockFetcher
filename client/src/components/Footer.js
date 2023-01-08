import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box, Paper } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1976d2",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
}));

const Footer = () => {
  return (
    <>
      <Box>
        <Grid className="footer" container spacing={2}>
          <Grid item xs={8}>
            <Item>Hi</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Hi</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>Hi</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>Hi</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>Hi</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>Hi</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
