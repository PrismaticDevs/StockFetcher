import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const NoPage = () => {
  return (
    <div className="App-header notFound">
      <SentimentVeryDissatisfiedIcon style={{ fontSize: "3em", margin: 0 }} />
      <h1 style={{ margin: 0 }}>404 Page Not Found</h1>
    </div>
  );
};

export default NoPage;
