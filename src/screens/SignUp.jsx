import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SMInput from "../components/SMInput";
import SMButton from "../components/SMButton";

import { SignUpUser } from "../config/firebaseconfig/firebaseMethods";

function SignUp(props) {
  const [model, setModel] = useState({});

  let createUser = () => {
    console.log(model);
    SignUpUser(model)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        margin={"auto"}
        marginTop={15}
        padding={5}
        maxWidth={400}
        sx={{
          boxShadow: "8px 8px 25px grey ",
          borderRadius: "25px",
        }}
      >
        <Typography variant="h4" textAlign={"start"}>
          SignUp
        </Typography>

        <Box margin={2}>
          <SMInput
            label="FullName*"
            type="text"
            onChange={(e) => setModel({ ...model, fullName: e.target.value })}
          />
        </Box>
        <Box margin={2}>
          <SMInput
            label="Email*"
            type="email"
            onChange={(e) => setModel({ ...model, email: e.target.value })}
          />
        </Box>
        <Box margin={2}>
          <SMInput
            label="Password*"
            type="password"
            onChange={(e) => setModel({ ...model, password: e.target.value })}
          />
        </Box>
        <Box>
          <SMButton label="SignUp" onClick={createUser} />
        </Box>
      </Box>
    </>
  );
}

export default SignUp;
