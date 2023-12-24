import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../data/styles.css";
import Rangoli from "../Images/Rangoli.jpg";

export const ResetPassword = () => {
  const [newPassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetToken, setResetToken] = useState("");

  function handleReset() {
    if (newPassword == confirmPassword) {
      axios
        .post(`http://localhost:8080/user/reset-password?token=${resetToken}`, {
          newPassword,
        })
        .then((res) => {
          // console.log(res.data);
        });
    } else {
      console.log("password is not matching");
    }
  }

  useEffect(() => {
    const getTokenFromUrl = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");
      setResetToken(token);
    };

    getTokenFromUrl();
  }, []);

  return (
    <div>
      <Box display="flex" m="auto" width="98vw" justifyContent="space-evenly">
        <Box width="20%" height="30%" mt="20px" className="rotating-image">
          <Image src={Rangoli} width="100%" height="100%" alt="img-not-found" />
        </Box>
        <Box
          width={{ lg: "30vw", base: "80vw" }}
          boxShadow="base"
          m="20px auto"
          mb="8vh"
          p={"10px"}
        >
          <Heading m="5px" fontSize="3xl" color="#22548A">
            Forgot password
          </Heading>
          <FormControl>
            <FormLabel m={2}>Password</FormLabel>

            <Input
              type="text"
              placeholder="new password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormLabel m={2}>Confirm Password</FormLabel>

            <Input
              type="text"
              placeholder="confirm new password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              m="20px auto"
              display={"block"}
              p={"10px 50px"}
              size="lg"
              colorScheme="linkedin"
              variant="ghost"
              onClick={handleReset}
            >
              Reset Password
            </Button>
          </FormControl>
        </Box>
        <Box width="20%" height="30%" mt="20px" className="rotating-image">
          <Image src={Rangoli} width="100%" height="100%" alt="img-not-found" />
        </Box>
      </Box>
    </div>
  );
};
