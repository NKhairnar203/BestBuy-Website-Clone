
import {
  Card,
  VStack,
  CardHeader,
  Text,
  Image,
  Box,
  Badge,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { RiShoppingCart2Fill } from "@remixicon/react";

export const CardR = () => {
  const cardData = [
    {
      imageUrl:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6340/6340284_sd.jpg;maxHeight=240;maxWidth=240",
      product_name:
        "Apple - AirPods (3rd generation) with Lightning Charging Case - White",
      product_price: "$200",
      offerSave: true,
      budgeButton: {
        text1: "Save $50",
        text2: "Was $200.39",
      },
      offerButton: {
        text1: "+ Save an extra $5.6",
        text2: "with Plus",
      },
      addToCartButton: "Add to Cart",
    },
    {
      imageUrl:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428324_sd.jpg;maxHeight=240;maxWidth=240",
      product_name:
        "Apple Watch Series 9 (GPS) 45mm Midnight Aluminum Case with Midnight Sport Band with Blood Oxygen - M/L - Midnight",
      product_price: "$379.00",
      offerSave: false,
      budgeButton: {
        text1: "Save $50",
        text2: "Was $200.39",
      },
      offerButton: {
        text1: "+ Save an extra $5.6",
        text2: "with Plus",
      },
      addToCartButton: "Add to Cart",
    },
    {
      imageUrl:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6376/6376551_sd.jpg;maxHeight=240;maxWidth=240",
      product_name: "Microsoft - Xbox Series X 1TB Console - Black",
      product_price: "$499.99",
      offerSave: true,
      budgeButton: {
        text1: "Save $80",
        text2: "Was $800.39",
      },
      offerButton: {
        text1: "+ Save an extra $5.6",
        text2: "with Plus",
      },
      addToCartButton: "Add to Cart",
    },
  ];
  return (
    <>
      {cardData.map((ele) => (
        <Card
          key={2}
          w={320}
          h={400}
          border={"1px solid gray"}
          boxShadow={"none"}
        >
          <CardHeader>
            <VStack>
              <Image boxSize={"120px"} src={ele.imageUrl} alt="Product Image" />
            </VStack>
            <Text noOfLines={2} mt={5} fontSize={12}>
              {ele.product_name}
            </Text>
            <Text as="h4" fontWeight={700}>
              {ele.product_price}
            </Text>
            {ele.offerSave ? (
              <Box
                style={{
                  height: "18px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Badge variant="solid" colorScheme="red">
                  {ele.budgeButton.text1}
                </Badge>
                <Text as={"p"} mt={4} fontWeight={400} ml={1} fontSize={12}>
                  {ele.budgeButton.text2}
                </Text>
              </Box>
            ) : null}

            <Button
              rightIcon={<ChevronRightIcon />}
              color="red"
              variant="outline"
              fontSize={12}
              mt={3}
              mb={5}
            >
              {ele.offerButton.text1}
              <Text ml={1} color={"gray"} mt={4}>
                {ele.offerButton.text2}
              </Text>
            </Button>
            <Button
              pos={"absolute"}
              bottom={7}
              left={5}
              w={"88%"}
              h={"30px"}
              _hover={{ color: "white", bg: "blue" }}
              leftIcon={<RiShoppingCart2Fill size={16} />}
              color="Blue"
              colorScheme="Blue"
              variant="outline"
              fontSize={12}
              mt={3}
            >
              <Text ml={1} mt={4}>
                {ele.addToCartButton}
              </Text>
            </Button>
          </CardHeader>
        </Card>
      ))}
    </>
  );
};

export default CardR;
