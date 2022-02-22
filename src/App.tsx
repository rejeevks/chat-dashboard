import React from "react";
import { Flex } from "@chakra-ui/react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <Flex bg="gray.500" h="100vh">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </Flex>
  );
}

export default App;
