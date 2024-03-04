import {
  Grid,
  GridItem,
  Container,
  HStack,
  Text,
  Image,
  Box,
  Button,
  Link,
  Divider,
  Center,
} from "@chakra-ui/react";

import FreeDelivery from "../assets/free-delivery.png";
import Qr from "../assets/qr-code.png";
import cdFull from "../assets/cb-full-sol.jpg";
import readyInOneHour from "../assets/ready in one hour.png";
import { px } from "framer-motion";

const DeliverySection = () => {
  return (
    <>
      <Container mb={10} maxW="container.xl">
        <Grid
          h="90px"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={6}
        >
          <GridItem colSpan={2} bg="#F0F2F4">
            <Box h="70px" mt={5} display={"flex"} alignItems={"center"}>
              <Image mt={"-20px"} w={"65px"} ml={"100px"} src={Qr} />
              <Box mt={-4} ml={4}>
                <Text as={"h3"} m={0} fontSize={"20px"} fontWeight={"700"}>
                  {" "}
                  Best Buy Drops™.
                </Text>
                <Text m={0} fontSize={"13px"}>
                  Be among the first to snag limited releases and serious
                  savings.
                </Text>
                <Link m={0} color={"blue.500"} fontSize={14}>
                  Get the app
                </Link>
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan={2} bg="#F0F2F4">
            <Box h="70px" mt={5} display={"flex"} alignItems={"center"}>
              <Box
                h={"88px"}
                mt={-5}
                w={"150px"}
                bg={"red"}
                backgroundSize={"cover"}
                backgroundImage={cdFull}
              ></Box>
              <Box mt={-4} ml={4}>
                <Text as={"h3"} m={0} fontSize={"20px"} fontWeight={"700"}>
                  {" "}
                  Yes, Best Buy sells that.
                </Text>
                <Text m={0} fontSize={"13px"}>
                  Check out some of Best Buy’s emerging offerings.
                </Text>
                <Link m={0} color={"blue.500"} fontSize={14}>
                  Shop now
                </Link>
              </Box>
            </Box>
          </GridItem>
        </Grid>
        <HStack mt={"30px"}>
          <Box display={"flex"} ml={10} w={"370px"}>
            <Image src={FreeDelivery} boxSize={"70px"} />
            <Box ml={3}>
              <Text
                mt={"14px"}
                color={"gray.600"}
                fontWeight={700}
                fontSize={"22px"}
                as={"h4"}
              >
                Free next-day delivery
              </Text>
              <Text mt={-2} fontSize={"12px"} as={"p"}>
                on thousands of items.
              </Text>
            </Box>
          </Box>
          <Center height="80px">
            <Divider orientation="vertical" />
          </Center>
          <Box display={"flex"} ml={8} w={"370px"}>
            <Image src={readyInOneHour} boxSize={"70px"} />
            <Box ml={3}>
              <Text
                mt={"10px"}
                color={"gray.600"}
                fontWeight={700}
                fontSize={"22px"}
                as={"h4"}
              >
                Ready in one hour
              </Text>
              <Text fontSize={"12px"} mt={-2} as={"p"}>
                with Store or Curbside Pickup.
              </Text>
            </Box>
          </Box>
          <Center height="80px">
            <Divider orientation="vertical" />
          </Center>
          <Box display={"flex"} alignItems={"center"} ml={10} w={"370px"}>
            <Image src={FreeDelivery} boxSize={"70px"} />
            <Box ml={3}>
              <Text
                mt={"10px"}
                color={"gray.600"}
                fontWeight={700}
                fontSize={"22px"}
                as={"h4"}
              >
                Same-day delivery.
              </Text>
            </Box>
          </Box>
        </HStack>
      </Container>
    </>
  );
};

export default DeliverySection;
