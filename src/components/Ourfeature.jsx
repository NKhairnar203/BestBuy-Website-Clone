import {
  Center,
  HStack,
  Container,
  Text,
  Image,
  Box,
  Divider,
} from "@chakra-ui/react";

const Ourfeature = () => {
  return (
    <>
      <Container mb={10} maxW="container.xl">
        <Text as={"h4"} display={"flex"}>
          Our featured offers
        </Text>
        <Divider />
        <Center>
          <HStack>
            <Box ml={10} w={"370px"}>
              <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-CO-125983update2-der-410bf5d9-e11a-499e-9cf4-171bc8aab9de.jpg;maxHeight=504;maxWidth=740" />
              <Text mt={"20px"} fontSize={"22px"} as={"h4"}>
                Final Fantasy VII Rebirth.
              </Text>
              <Text fontSize={"12px"} as={"p"}>
                Experience an epic adventure in this PlayStation 5 exclusive.
              </Text>
            </Box>
            <Center height="400px">
              <Divider orientation="vertical" />
            </Center>
            <Box ml={10} w={"370px"}>
              <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-755269-pol_DER-00afbe23-0888-40ca-9fe4-96544dfd2e69.jpg;maxHeight=504;maxWidth=740" />
              <Text mt={"20px"} fontSize={"22px"} as={"h4"}>
                AirPods Pro (2nd gen.)
              </Text>
              <Text as={"h5"}>Save $60.</Text>
            </Box>
            <Center height="400px">
              <Divider orientation="vertical" />
            </Center>
            <Box ml={10} w={"370px"}>
              <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_MMT-779532_der-41e2eb23-c058-41f9-9dc7-8f7f34b828f6.jpg;maxHeight=504;maxWidth=740" />
              <Text mt={"20px"} fontSize={"20px"} as={"h4"}>
                Save up to $150 on all Tineco floor care.
              </Text>
              <Text fontSize={"12px"} as={"p"}>
                Minimum savings is $40.
              </Text>
            </Box>
          </HStack>
        </Center>
      </Container>
    </>
  );
};

export default Ourfeature;
