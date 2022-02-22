import {
  Alert,
  AlertIcon,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [localName, setLocalName] = useState<null | string>();
  const [localPassword, setLocalPassword] = useState<null | string>();
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [accont, setAccount] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLocalName(localStorage.getItem("name"));
    setLocalPassword(localStorage.getItem("password"));
  }, []);

  const UserLogin = () => {
    if (localName == userName && localPassword == userPassword) {
      navigate("/dashboard");
    } else {
      setAccount(true);
    }
    console.log(localName, localPassword);
  };

  return (
    <Flex flexDirection="column" p={80}>
      <Grid>
        <Heading as="h3" size="lg" pb={10}>
          Login
        </Heading>
        <Flex>
          <Input
            type="text"
            placeholder="User Name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </Flex>
        <Flex pt={5}>
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </Flex>
        <Flex pt={5}>
          <Button onClick={UserLogin} size="md" height="48px" width="300px">
            Login
          </Button>
        </Flex>
        <Flex pt={5}>
          <Link to={"/signup"}>
            <Text color="cyan.300">New to Chat App? Create an account</Text>
          </Link>
        </Flex>
        {accont ? (
          <Flex pt={10}>
            <Alert status="error">
              <AlertIcon />
              User Not Found
            </Alert>
          </Flex>
        ) : null}
      </Grid>
    </Flex>
  );
};

export default Login;
