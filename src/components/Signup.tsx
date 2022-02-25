import { Button, Flex, Grid, Heading, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const UserSignup = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);
    navigate("/");
    window.location.reload();
  };

  return (
    <Flex flexDirection="column" p={80}>
      <Grid>
        <Heading as="h3" size="lg" pb={10}>
          Signup
        </Heading>
        <Flex>
          <Input
            type="text"
            placeholder="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Flex>
        <Flex pt={5}>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Flex>
        <Flex pt={5}>
          <Button onClick={UserSignup} size="md" height="48px" width="300px">
            create account
          </Button>
        </Flex>
        <Flex pt={5}>
          <Link to={"/"}>
            <Text color="cyan.300">Existing User? Log in</Text>
          </Link>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default Signup;
