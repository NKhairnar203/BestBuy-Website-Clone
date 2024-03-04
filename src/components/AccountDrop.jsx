import { Container, Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SignUp from "../pages/SignUp";

function AccountDrop() {
  return (
    <>
      <Container right={"80px"} top={"30px"} zIndex={1} pos={"absolute"}>
        <Box
          overflowY={"scroll"}
          backgroundColor={"#F0F2F4"}
          w={"340px"}
          color={"black"}
          h={"430px"}
          border={"1px solid black"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            p={"30px"}
            bg={"white"}
            pb={"40px"}
          >
            <Text textAlign={"center"} fontSize={"12px"} color={"black"}>
              My Best Buy® members get free shipping with no minimum purchase.
              Plus, exclusive offers and more.
            </Text>
           
            <Link to={"/login"}>
              <Text
                mt={3}
                mb={0}
                p={"2px"}
                w={"210px"}
                textAlign={"center"}
                color={"white"}
                borderRadius={"5px"}
                border={"1px solid blue"}
                bg={"blue"}

              >
                Sign In
              </Text>
            </Link>
            <Link to={"/sign-up"}>
              <Text
                mt={3}
                p={"2px"}
                w={"210px"}
                textAlign={"center"}
                color={"blue"}
                borderRadius={"5px"}
                border={"1px solid blue"}
                _hover={{ bg: "blue", color: "white" }}
              >
                Create Account
              </Text>
            </Link>
          </Box>
          <Box color={"blue"} mt={"10px"} p={"10px"} bg={"white"}>
            <Box
              borderBottom={"1px solid gray"}
              display={"flex"}
              justifyContent={"space-between"}
              pt={2}
              alignItems={"center"}
            >
              <Text>Account</Text>
              <Text color={"gray"} fontSize={"10px"}>
                Your info at a glance
              </Text>
            </Box>
            <Box
              borderBottom={"1px solid gray"}
              display={"flex"}
              justifyContent={"space-between"}
              pt={2}
              alignItems={"center"}
            >
              <Text>Purchases</Text>
              <Text color={"gray"} fontSize={"10px"}>
                Track, change, cancel
              </Text>
            </Box>
            <Box
              borderBottom={"1px solid gray"}
              display={"flex"}
              justifyContent={"space-between"}
              pt={2}
              alignItems={"center"}
            >
              <Text>Products</Text>
              <Text color={"gray"} fontSize={"10px"}>
                Support, manuals, guides
              </Text>
            </Box>
          </Box>
          <Box color={"blue"} mt={"10px"} p={"10px"} bg={"white"}>
            <Box
              borderBottom={"1px solid gray"}
              display={"flex"}
              justifyContent={"space-between"}
              pt={2}
              alignItems={"center"}
            >
              <Text>Payment Methods</Text>
              <Text color={"gray"} fontSize={"10px"}>
                Saved credit cards
              </Text>
            </Box>
            <Box
              borderBottom={"1px solid gray"}
              display={"flex"}
              justifyContent={"space-between"}
              pt={2}
              alignItems={"center"}
            >
              <Text>Plans and Subscriptions</Text>
              <Text color={"gray"} fontSize={"10px"}>
                Membership & protection info
              </Text>
            </Box>
            <Box
              borderBottom={"1px solid gray"}
              display={"flex"}
              justifyContent={"space-between"}
              pt={2}
              alignItems={"center"}
            >
              <Text>Digital Library</Text>
              <Text color={"gray"} fontSize={"10px"}>
                Manage your downloads
              </Text>
            </Box>
          </Box>
          <Box color={"blue"} mt={"10px"} p={"10px"} bg={"white"}>
            <Box
              borderBottom={"1px solid gray"}
              display={"flex"}
              justifyContent={"space-between"}
              pt={2}
              alignItems={"center"}
            >
              <Text>Member Offers</Text>
              <Text color={"gray"} fontSize={"10px"}>
                View to redeem
              </Text>
            </Box>
            <Box
              borderBottom={"1px solid gray"}
              display={"flex"}
              justifyContent={"space-between"}
              pt={2}
              alignItems={"center"}
            >
              <Text>My Best Buy Memberships™</Text>
              <Text color={"gray"} fontSize={"10px"}>
                Compare tiers
              </Text>
            </Box>
            <Box
              borderBottom={"1px solid gray"}
              display={"flex"}
              justifyContent={"space-between"}
              pt={2}
              alignItems={"center"}
            >
              <Text>Free In-Home Consultation</Text>
              <Text color={"gray"} fontSize={"10px"}>
                Get expert design support
              </Text>
            </Box>
          </Box>
          <Box color={"blue"} mt={"10px"} p={"10px"} bg={"white"}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              pt={2}
              alignItems={"center"}
            >
              <Text>Account Settings</Text>
              <Text color={"gray"} fontSize={"10px"}>
                Addresses, password, preferences
              </Text>
            </Box>
            <Box display={"flex"} pt={2} alignItems={"center"}>
              <Text>X Close</Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default AccountDrop;
