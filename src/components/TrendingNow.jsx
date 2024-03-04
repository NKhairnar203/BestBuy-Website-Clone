import {
  Card,
  Container,
  Text,
  Image,
  Box,
  Divider,
  CardHeader,
  CardBody,

} from "@chakra-ui/react";

const TrendingNow = () => {
  const cpName = [{
    component:"Trending Now"
  }]
  const data = [
    
    {
      imageUrl:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6537/6537363_sd.jpg;maxHeight=272;maxWidth=400",
      pName: "Samsung - 65” Class CU7000 Crystal UHD 4K Smart Tizen TV",
      stars: "",
      review: "2,961",
      Price: {
        price1: "$399.99",
        price2: "$479.99",
      },
    },
    {
      imageUrl:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6549/6549067_sd.jpg;maxHeight=272;maxWidth=400",
      pName:
        "Lenovo - Ideapad 3i 15.6 FHD Touch Laptop - Core i5-1155G7 with 8GB Memory - 512GB SSD ",
      stars: "",
      review: "3,503",
      Price: {
        price1: "$349.99",
        price2: "$629.99",
      },
    },
    {
      imageUrl:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534606_sd.jpg;maxHeight=272;maxWidth=400",
      pName:
        "Apple - MacBook Air 15 Laptop - M2 chip - 8GB Memory - 256GB SSD (Latest Model) - Midnight User Rating: 4.9 out of 5 stars with 3278",
      stars: "",
      review: "3,278",
      Price: {
        price1: "$999.00",
        price2: "$1,299.00",
      },
    },
    {
      imageUrl:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4901/4901809_sd.jpg;maxHeight=272;maxWidth=400",
      pName:
        "Apple - 10.2-Inch iPad (9th Generation) with Wi-Fi - 64GB - Space Gray",
      stars: "",
      review: "24,485",
      Price: {
        price1: "$249.99",
        price2: "$329.99",
      },
    },
    {
      imageUrl:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6542/6542964cv16d.jpg;maxHeight=272;maxWidth=400",
      pName:
        "ASUS - ROG Ally 7 120Hz FHD 1080p Gaming Handheld - AMD Ryzen Z1 Extreme Processor",
      stars: "",
      review: "6,518",
      Price: {
        price1: "$599.99",
        price2: "$699.99",
      },
    },
  ]

  return (
    <>
      <Container mb={10} maxW="container.xl">
        {cpName.map((e,i) => (
          <Text key={i} as={"h4"} mb={"-20px"} display={"flex"}>
            {e.component}
            <Text
              ml={"4px"}
              mt={"8px"}
              as={"p"}
              fontSize={"15px"}
              fontWeight={"400"}
            >
              (6 items)
            </Text>
          </Text>
        ))}

        <Divider />

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
        >
          <Box
            w={"35px"}
            display={"flex"}
            cursor={"pointer"}
            justifyContent={"center"}
            alignItems={"center"}
            h={"340px"}
          >
            {" "}
            L{" "}
          </Box>
          {data.map((item, index) => (
            <Card boxShadow={"none"} w="230px" h={"350px"} key={index}>
              <CardHeader>
                <Image m={"auto"} h={"100px"} src={item.imageUrl} />
              </CardHeader>
              <CardBody>
                <Text fontSize={"12px"} color={"blue.400"} noOfLines={3}>
                  {item.pName}
                </Text>
                <Text fontSize={"12px"}>({item.review})</Text>
                <Text as={"b"} m={0}>
                  {item.Price.price1}
                </Text>
                <br />
                <Text as={"del"} mt={-4}>
                  {item.Price.price2}
                </Text>
              </CardBody>
            </Card>
          ))}
          <Box
            w={"35px"}
            display={"flex"}
            cursor={"pointer"}
            justifyContent={"center"}
            alignItems={"center"}
            h={"340px"}
          >
            R
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default TrendingNow;
