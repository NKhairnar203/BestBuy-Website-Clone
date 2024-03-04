import {
  Grid,
  GridItem,
  Container,
  Text,
  Image,
  Link,
} from "@chakra-ui/react" ;

const FourComSection = () => {
  return (
    <>
      <Container mb={8} maxW="container.xl">
        <Grid
          h="520px"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={7}
        >
          <GridItem p={5} colSpan={1} bg="#F0F2F4">
            <Text fontWeight={700}>Bring your next project to life</Text>
            <Grid
              h="90%"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(2, 1fr)"
              gap={5}
            >
              <GridItem rowSpan={1}>
                <Image
                  borderRadius={3}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-90570-explore-hc-240311-4d6def06-d971-44c4-ac0f-908b01f7b353.jpg;maxHeight=432;maxWidth=432"
                />
                <Link color={"blue.500"} fontSize={14}>
                  <Text mt={2} mb={0} lineHeight={1}>
                    Free home consultation
                  </Text>
                </Link>
              </GridItem>
              <GridItem colSpan={1}>
                <Image
                  borderRadius={3}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-90570-explore-he-240311-03f6972c-af10-46b3-b9cc-5ea15a3f5c71.jpg;maxHeight=432;maxWidth=432"
                />
                <Link color={"blue.500"} fontSize={14}>
                  <Text mt={2} mb={0} lineHeight={1}>
                    Home Expert resources
                  </Text>
                </Link>
              </GridItem>
              <GridItem colSpan={1}>
                <Image
                  borderRadius={3}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-90570-explore-expert-online-240311-979dea6a-c7ad-4f50-ae14-e4d8432fe555.jpg;maxHeight=432;maxWidth=432"
                />
                <Link color={"blue.500"} fontSize={15}>
                  <Text mt={2} mb={0} lineHeight={1}>
                    Shop online with an Expert
                  </Text>
                </Link>
              </GridItem>
              <GridItem colSpan={1}>
                <Image
                  borderRadius={3}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-90570-explore-cc-240311-f88bd997-091b-49a4-a38e-54ca6b44e7b5.jpg;maxHeight=432;maxWidth=432"
                />
                <Link color={"blue.500"} fontSize={15}>
                  <Text mt={2} mb={0} lineHeight={1}>
                    Rewards or flexible financing options
                  </Text>
                </Link>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem p={5} colSpan={1} bg="#F0F2F4">
            <Text fontWeight={700}>Created for you by us</Text>
            <Grid
              h="90%"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(2, 1fr)"
              gap={4}
            >
              <GridItem rowSpan={1}>
                <Image
                  borderRadius={3}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-90571-explore-tv-240311-ec839e30-9997-454d-a823-9b84099dc1ec.jpg;maxHeight=432;maxWidth=432"
                />
                <Link color={"blue.500"} fontSize={14}>
                  <Text mt={2} mb={0} lineHeight={1}>
                    You deserve dependable. Best Buy brands.
                  </Text>
                </Link>
              </GridItem>
              <GridItem colSpan={1}>
                <Image
                  borderRadius={3}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-90571-explore-ph-acc-240311-6443ba5d-bbd5-4ea7-be4d-374c7a47874f.jpg;maxHeight=432;maxWidth=432"
                />
                <Link color={"blue.500"} fontSize={14}>
                  <Text mt={2} mb={0} lineHeight={1}>
                    You deserve features. Welcome to Insignia™.
                  </Text>
                </Link>
              </GridItem>
              <GridItem colSpan={1}>
                <Image
                  borderRadius={3}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-90571-explore-hdmi-240311-8d65823a-e153-4609-aa0c-94be5efa0fb0.jpg;maxHeight=432;maxWidth=432"
                />
                <Link color={"blue.500"} fontSize={15}>
                  <Text mt={2} mb={0} lineHeight={1}>
                    You deserve quality. Rocketfish™ delivers.
                  </Text>
                </Link>
              </GridItem>
              <GridItem colSpan={1}>
                <Image
                  borderRadius={3}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-90571-explore-bbe-240311-1a3dabcc-bc1b-45a5-a947-0fa9fc33f201.jpg;maxHeight=432;maxWidth=432"
                />
                <Link color={"blue.500"} fontSize={15}>
                  <Text mt={2} mb={0} lineHeight={1}>
                    You deserve value. Best Buy essentials™.
                  </Text>
                </Link>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem p={5} colSpan={1} bg="#F0F2F4">
            <Text fontWeight={700}>Yes, Best Buy sells that</Text>
            <Grid
              h="90%"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(2, 1fr)"
              gap={4}
            >
              <GridItem rowSpan={1}>
                <Image
                  borderRadius={3}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-90578-explore-pet-240311-58bf9115-172e-4621-9c0c-591c33791b79.jpg;maxHeight=432;maxWidth=432"
                />
                <Link color={"blue.500"} fontSize={14}>
                  <Text mt={2} mb={0} lineHeight={1}>
                    Pet tech and supplies
                  </Text>
                </Link>
              </GridItem>
              <GridItem colSpan={1}>
                <Image
                  borderRadius={3}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-90578-explore-travel-240311-4677ca2a-10cd-43d6-bcd1-cbeef864580a.jpg;maxHeight=432;maxWidth=432"
                />
                <Link color={"blue.500"} fontSize={14}>
                  <Text mt={2} mb={0} lineHeight={1}>
                    Luggage and travel tech
                  </Text>
                </Link>
              </GridItem>
              <GridItem colSpan={1}>
                <Image
                  borderRadius={3}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-90578-explore-craft-240311-9ca54c0d-54a8-4efd-8d87-61d60130b38d.jpg;maxHeight=432;maxWidth=432"
                />
                <Link color={"blue.500"} fontSize={15}>
                  <Text mt={2} mb={0} lineHeight={1}>
                    Crafting tech
                  </Text>
                </Link>
              </GridItem>
              <GridItem colSpan={1}>
                <Image
                  borderRadius={3}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-90578-explore-pik-240311-f93ae80f-5404-4c82-8cca-6428b64a30b0.jpg;maxHeight=432;maxWidth=432"
                />
                <Link color={"blue.500"} fontSize={15}>
                  <Text mt={2} mb={0} lineHeight={1}>
                    Yes, we sell that, too
                  </Text>
                </Link>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Container>
     
    </>
  );
};

export default FourComSection;
