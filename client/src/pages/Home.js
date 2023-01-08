import React from "react";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box className="content">
      <Box className="App-header">
        <Typography variant="h2">Home</Typography>
      </Box>
      <Box sx={{}}>
        <Typography sx={{ textAlign: "center" }} variant="h4">
          Welcome to PrismaticDevs' web app that fetches financial data from the
          Yahoo Finace API.
        </Typography>
        <Typography sx={{ paddingLeft: "3em", paddingRight: "3em" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          dolorum, enim molestiae quasi repudiandae sed vero laborum eum ipsa!
          Officiis aut esse id minus voluptate eum, illo in eaque voluptatem
          tenetur nulla recusandae ut ducimus, deserunt dignissimos et
          repellendus beatae, consequuntur ex optio impedit. Ea delectus
          voluptate, doloremque excepturi labore accusantium vel officiis atque
          dicta repellendus necessitatibus consectetur maiores voluptatem amet
          provident cupiditate consequuntur aliquid sequi nostrum quo id.
          Cupiditate, voluptate. Autem accusamus iure delectus inventore iusto
          in molestiae molestias similique vel, odio beatae, dolor, provident
          reiciendis esse eum harum animi corporis velit nisi vitae magni nam
          perferendis impedit. Corrupti!
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
