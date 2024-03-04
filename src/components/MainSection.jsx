
import laptop from "../assets/laptop.jpg";
import product1 from "../assets/product1.jpg";
import SaleImage from "../assets/sale-image.jpeg";
import tablet from "../assets/tablet.jpg";
import watch from "../assets/watch.jpg";
import OutletDeals from "../assets/OutletDeals.png";
import Product2 from "../assets/Product2.jpg";

import {
  Container,
  VStack,
  Grid,
  GridItem,
  Image,
  Box,
  Text,
  Card,
  Heading,
  HStack,
  CardFooter,
  CardBody,
  Badge,
  Link,
  
} from "@chakra-ui/react";

const MainSection = () => {
  return (
    <>
      <VStack align="stretch">
        <Container maxW="container.xl" color="white" mt={5}>
          <Grid
            h="600px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={2} bg="tomato" pos="relative" zIndex={"-1"}>
              <Image boxSize="100%" src={SaleImage} alt="Sale image" />
              <Text
                fontSize="3xl"
                color={"white"}
                bottom={"17%"}
                left={"10%"}
                right={"10%"}
                fontWeight={"700"}
                pos={"absolute"}
                textAlign={"center"}
              >
                Save up to 40% on appliances Hottest Deals.
              </Text>
              <Text
                fontSize="10px"
                color={"white"}
                bottom={"14%"}
                left={"10%"}
                right={"10%"}
                pos={"absolute"}
                textAlign={"center"}
              >
                Minimum Saving is 5%.
              </Text>
            </GridItem>
            <GridItem colSpan={3} bg="white" border={"1px solid blue"}>
              <Heading p={"10px "} color={"black"} size="md">
                Recommended for you
              </Heading>
              <HStack spacing="24px" gap={4}>
                <Card h={"250px"} p={"10px"} zIndex={"1"}>
                  <CardBody>
                    <Image src={product1} alt="Product Image" />
                  </CardBody>

                  <CardFooter>
                    <Text fontSize={"10px"}>
                      Vornado - Duo Tower Circulator Fan - Black
                    </Text>
                  </CardFooter>
                </Card>
                <Card h={"250px"} p={"10px"}>
                  <CardBody>
                    <Image src={laptop} alt="Product Image" />
                  </CardBody>
                  <CardFooter>
                    <Text fontSize={"10px"}>
                      Vornado - Duo Tower Circulator Fan - Black
                    </Text>
                  </CardFooter>
                </Card>
                <Card h={"250px"} p={"10px"}>
                  <CardBody>
                    <Image src={tablet} alt="Product Image" />
                  </CardBody>
                  <CardFooter fontSize={"10px"}>
                    <Text>Vornado - Duo Tower Circulator Fan - Black</Text>
                  </CardFooter>
                </Card>
                <Card h={"250px"} p={"10px"}>
                  <CardBody>
                    <Image src={watch} alt="Product Image" />
                  </CardBody>
                  <CardFooter fontSize={"10px"}>
                    <Text>Vornado - Duo Tower Circulator Fan - Black</Text>
                  </CardFooter>
                </Card>
              </HStack>
            </GridItem>
            <GridItem colSpan={3} display="flex" gap={4}>
              <Box border={"1px solid blue"} h="100%" w="100%" p={"20px"} color={"black"} >
                <Image src={OutletDeals} />
                <Link color={"blue"}>View Outlet Deals</Link>
              </Box>
              <Box h="100%" w="100%" p={"20px"} border={"1px solid blue"}>
                <Badge variant="solid" colorScheme="red">
                  Top Deals
                </Badge>
                <Image m={"auto"} mt={"40px"} h={"120px"} src={Product2} />
                <Text mt={"40px"} as={"h4"} fontSize={"12px"} color={"blue"}>
                  Dyson - Cool Tower Fan AM07 - White/Silver
                </Text>
                <Text fontSize={"12px"} color={"black"}>
                  <Text as="b">$249.99</Text>
                  <br />
                  <Text as="del">$369.99</Text>
                </Text>
                <Link mt={"40px"} color={"blue"}>Shop all Top Deals</Link>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </VStack>
    
    </>
  );
};

export default MainSection;
