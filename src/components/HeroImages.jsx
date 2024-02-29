import { Container, HStack, Text, Image, Box, Button } from "@chakra-ui/react";

export const HeroImages = () => {
  return (
    <>
      <Container mt={12} mb={10} maxW="container.xl">
        <HStack gap={8}>
          <Box pos={"relative"}>
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-510776_TopDealsGHP-LV-82d476b2-8238-447e-a5ba-031a67f017e0.jpg;maxHeight=960;maxWidth=960" />
            <Button
              borderRadius={"3px"}
              w={"90px"}
              h={"30px"}
              bottom={"100px"}
              left={"150px"}
              zIndex={1}
              pos={"absolute"}
              color={"blue.600"}
              _hover={{
                color: "white",
                bg: "blue",
                border: "1px solid white",
              }}
            >
              Shop Now
            </Button>
          </Box>
          <Box pos={"relative"} zIndex={1} color={"white"}>
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/ghp-MMT-773907-starlink-430cc7ce-2bc8-4b19-bb9d-90123efbde34.jpg;maxHeight=960;maxWidth=960" />
            <Box p={"25px"} pos={"absolute"} bottom={"40px"} left={"5px"}>
              <Text
                noOfLines={2}
                fontWeight={"700"}
                fontSize={"19px"}
                as={"h3"}
              >
                The Latest Starlink Standard Kit is here.
              </Text>
              <Text fontSize={"14px"} as={"h6"} fontWeight={300}>
                Enjoy high-speed,low-latency internet.
              </Text>
              <Text as={"p"} fontSize={"12px"}>
                Check service availability on the Starlink map before you buy.
              </Text>
            </Box>
          </Box>
          <Box pos={"relative"} zIndex={1} color={"black"}>
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-76584-flx-house-ad-business-220831-b4dc8164-c31b-441c-8cf0-6d3cf544790e.jpg;maxHeight=960;maxWidth=960" />
            <Box p={"25px"} pos={"absolute"} top={"5px"} left={"5px"}>
              <Text
                noOfLines={2}
                fontWeight={"700"}
                fontSize={"21px"}
                as={"h3"}
              >
                Sign up for a free Best Buy Business account.
              </Text>
              <Text mt={-2} fontSize={"14px"} as={"h6"} fontWeight={700}>
                Your success is our Business.
              </Text>
              <Text as={"p"} fontSize={"14px"}>
                Discover the tech and the industry-specific expertise your
                organization needs to thrive.
              </Text>
            </Box>
          </Box>
        </HStack>
      </Container>
    </>
  );
};

export default HeroImages;
