import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [status, setStatus] = useState<Boolean>();

  useEffect(() => {
    if ("password" in localStorage) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, []);
  
  return (
    <Flex bg="gray.500" h="100vh">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="dashboard"
            element={
              <PrivateRoute isAuthenticated={status}>
                <Dashboard />
              </PrivateRoute>
            }
          />
          {/* <Route path="dashboard" element={<Dashboard authorized={status} />} /> */}
        </Routes>
      </Router>
    </Flex>
  );
}

export default App;
