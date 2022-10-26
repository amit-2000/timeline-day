import React, { useState, useEffect } from "react";
import App from "./App";
import axios from "axios";

const Home = () => {
  const [dt, setDt] = useState();
  async function getData() {
    try {
      let webApiUrl = "https://slackround.api.edvora.dev/slack";
      let tokenStr = "eyJ0b2tlbiI6ImFqY1FlJDY9TUBmOVs9ZHk1Yk93VG1vaDtDLmowdCJ9";
      await axios
        .get(webApiUrl, { headers: { Authorization: `${tokenStr}` } })
        .then((res) => {
          setDt(res.data);
        });
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return <div>{dt && <App data={dt} />}</div>;
};

export default Home;
