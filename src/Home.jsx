import React, { useState } from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./card";
import axios from "axios";
const Home = () => {
  const checkoutHandler = async (amount) => {
    const url = `https://pages.razorpay.com/pl_OTfnE8oOLWzW5z/view`;
    window.location.href = url;
  };


return (
  <Card
    img="https://i.ibb.co/LdJVxJP/DIsha.png"
    checkoutHandler={checkoutHandler}
  ></Card>
);
};
export default Home;
