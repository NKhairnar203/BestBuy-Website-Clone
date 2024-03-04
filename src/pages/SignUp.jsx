import React, { useState } from "react";
import logo from "../assets/logo.svg";
import {
  Container,
  Box,
  Text,
  Button,
  Image,
  HStack,
  Divider,
  Center,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  InputGroup,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
// import { Link } from "react-router-dom";
const SignUp = () => {
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
      <Container  bg={"#F0F2F4"} pb={"100px"} pt={10} maxW={"100%"}>
        <Box maxW="md" mx="auto" mt="8" p="10" bg={"white"}>
          <Text
            mb={"50px"}
            fontSize={"25px"}
            textAlign={"center"}
            fontWeight={"700"}
          >
            Create an Account
          </Text>
          <FormControl mb={"20px"} id="first">
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Enter First Name" type="text" />
          </FormControl>
          <FormControl mb={"20px"} id="last">
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Enter Last Name" type="text" />
          </FormControl>
          <FormControl mb={"20px"} id="email">
            <FormLabel>Email address</FormLabel>
            <Input placeholder="Enter Email Address" type="email" />
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
          <Button colorScheme="blue" mt="4" w="100%">
            Create Account
          </Button>
          <Box mt="4" textAlign="center">
            <Link color="blue.500" href="#">
              Forgot Password?
            </Link>
          </Box>
          <Divider />
          <Box
            display={"flex"}
            justifyContent={"center"}
            mt="4"
            textAlign="center"
          >
            <span>
              <Text fontWeight={"700"} mr={2}>
                Already have an account?{" "}
              </Text>
            </span>
            <Link color="blue.500" href="/login">
              Sign in
            </Link>
          </Box>
        </Box>
      </Container>

      <Container  borderTop={"1px solid black"} maxW={"100%"}>
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

export default SignUp;
