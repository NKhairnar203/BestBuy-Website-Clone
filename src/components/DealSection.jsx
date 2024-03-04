import { Grid, GridItem, Box, Container, Text, Image } from "@chakra-ui/react";
import DealOfDay from "../assets/dealOfDay.png";
import Clearance from "../assets/ClearanceOpenBox.png";

const DealSection = () => {
  return (
    <>
      <Container mb={8} maxW="container.xl">
        <Grid
          h="390px"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={7}
        >
          <GridItem borderTop={"1px solid gray"} pt={4} colSpan={1}>
            <Text fontSize={6} letterSpacing={2} color={"gray"} as={"p"}>
              ADVERTISEMENT
            </Text>
          </GridItem>
          <GridItem colSpan={1} bg="#F0F2F4">
            <Box pos={"relative"}>
              <Image src={DealOfDay} />

              <Text
                fontWeight={700}
                fontSize={"14px"}
                pos={"absolute"}
                left={"130px"}
                bottom={"80px"}
                color={"white"}
              >
                Great deals. Every Day.
              </Text>
            </Box>
          </GridItem>
          <GridItem border={"1px solid gray"} colSpan={1} bg="#F0F2F4">
            {" "}
            <Box pos={"relative"}>
              <Image src={Clearance} />
              <Text
                fontWeight={700}
                fontSize={"14px"}
                pos={"absolute"}
                left={"50px"}
                bottom={"80px"}
              >
                Save when you shop Best Buy Outlet deals.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default DealSection;
