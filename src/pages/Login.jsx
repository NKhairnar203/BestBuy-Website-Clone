import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  Container,
  Box,
  Text,
  Button,
  Image,
  HStack,
  Divider,
  Center,
  Link,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };
   const [showPassword, setShowPassword] = useState(false);

   const togglePasswordVisibility = () => {
     setShowPassword(!showPassword);
   };

  return (
    <>
      <header style={{ width: "100%", backgroundColor: "#0046BE" }}>
        <Container p={0} maxW={"1000px"} h={"70px"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Image mt={"15px"} src={logo} alt="Logo" />
            <Link _hover={{ textDecoration: "none" }} href={"/"}>
              <Text color={"white"} mt={"20px"}>
                Return to previous page
              </Text>
            </Link>
          </Box>
        </Container>
      </header>
      <Container bg={"#F0F2F4"} maxW="100%" pb={"100px"} pt={10}>
        <Box
         
          p="9"
          rounded="md"
          bg="white"
          borderWidth="1px"
          borderColor="gray.200"
          maxW="md"
          mx="auto"
        >
          <Text fontSize="xl" fontWeight={"700"} mb="6" textAlign="center">
            Sign In to Best Buy
          </Text>
          <FormControl id="email" mb="4">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl mb={"30px"} mt="4" id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                pr="4.5rem"
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button colorScheme="blue" width="100%" onClick={handleLogin}>
            Sign in
          </Button>
          <Box mt="4" textAlign="center">
            <Link color="blue.500" href="#">
              Forgot password?
            </Link>
          </Box>
          <Box mt="4" textAlign="center">
            <Text>
              Don't have an account?{" "}
              <Link color="blue.500" href="#">
                Sign up
              </Link>
            </Text>
          </Box>
        </Box>
      </Container>

      <Container borderTop={"1px solid black"} maxW={"100%"}>
        <Box maxW={"1000px"} m={"auto"} mt={"7"}>
          <HStack fontSize={"12px"} color={"blue.400"}>
            <Text>Terms and Conditions</Text>
            <Center height="20px">
              <Divider orientation="vertical" />
            </Center>
            <Text>Privacy</Text>
            <Center height="20px">
              <Divider orientation="vertical" />
            </Center>
            <Text>Interest-Based Ads</Text>
          </HStack>
          <Text fontSize={"12px"}>
            Prices and offers are subject to change. © 2024 Best Buy. All rights
            reserved. BEST BUY, the BEST BUY logo, the Tag Design, MY BEST BUY,
            and BESTBUY.COM are trademarks of Best Buy and its affiliated
            companies.
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default Login;
