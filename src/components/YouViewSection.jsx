
import {
  Card,
  Container,
  HStack,
  VStack,
  CardBody,
  CardFooter,
  Text,
  Link,
  Image,
  Box,
} from "@chakra-ui/react";

import Product2 from "../assets/Product2.jpg";
import Save from "../assets/save-instagram.png";
import membership from "../assets/MyBestBuy_Memberships.svg";

import CardR from "./CardR";

const YouViewSection = () => {
  const breakpoints = {
    base: "0em", // 0px
    sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "96em", // ~1536px
  };
  return (
    <>
      <VStack>
        <Container maxW="container.xl" h={"400px"} bg={""}>
          <Link
            fontSize="14px"
            color={"blue"}
            _hover={{
              color: "gray.600",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Manage all your recently viewed items
          </Link>
          <HStack>
            <Card
              color={"blue.500"}
              p={1}
              mt={5}
              w={"320px"}
              h={280}
              border={"1px solid gray"}
            >
              <CardBody>
                <Image
                  m={"auto"}
                  h={"110px"}
                  // w="150px"
                  src={Product2}
                  alt=""
                />
              </CardBody>
              <CardFooter>
                <div>
                  <Link lineHeight={1}>
                    Dyson - Cool Tower Fan AM07 - White/Silver
                  </Link>
                  <div style={{ display: "flex", marginTop: "15px" }}>
                    <Image
                      src={Save}
                      boxSize={5}
                      onClick={() => {
                        alert("Saved!");
                      }}
                    />

                    <p style={{ marginLeft: "10px" }}>Save</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </HStack>
        </Container>
        <Container style={breakpoints} maxW="container.xl" h={"400px"}>
          <HStack>
            <Box w={"250px"}>
              <Image w={150} src={membership} />
              <Text fontSize={28} fontWeight={"600"} mt={8} as={"h2"}>
                Don’t miss out on the best deals.
              </Text>
              <Text fontSize={14} as={"p"}>
                Unlock even more exclusive member deals when you become a My
                Best Buy Plus™ or My Best Buy Total™ member.
              </Text>
              <Link color={"blue.600"} fontWeight={700}>
                Discover more exclusive deals
              </Link>
            </Box>

            <CardR />
          </HStack>
        </Container>
      </VStack>
    </>
  );
};

export default YouViewSection;
