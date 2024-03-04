import {
  Button,
  Container,
  Text,
  Image,
  Box,
  Link,
  Divider,
  Input,
} from "@chakra-ui/react";
import QuestionMark from "../assets/QuestionMark.svg";
import boxImage from "../assets/BoxIage.svg";
import delivery from "../assets/delivery.svg";
import Printer from "../assets/printart.svg";
import Facebook from "../assets/faceBook.svg";
import Instagram from "../assets/Insta.svg";
import Shift from "../assets/shift.svg";
import Tweet from "../assets/tweeter.svg";
import Youtube from "../assets/youTubeIcon.svg";
import optional from "../assets/optinal.svg";

const Footer = () => {
  return (
    <>
      <Container mb={-4} maxW={"container.xl"} bg={"#F0F2F4"}>
        <Box
          borderBottom={"0.1px solid gray"}
          gap={"100px"}
          h={"200px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box>
            <Image m={"auto"} boxSize={"60px"} src={QuestionMark} />
            <Link>
              <Text fontWeight={"700"} color={"blue.500"} mt={3}>
                Visit Our Support Center
              </Text>
            </Link>
          </Box>
          <Box>
            <Image m={"auto"} src={boxImage} boxSize={"60px"} />
            <Link>
              <Text fontWeight={"700"} color={"blue.500"} mt={3}>
                Check Your Oredr Status
              </Text>
            </Link>
          </Box>
          <Box>
            <Image m={"auto"} src={delivery} boxSize={"60px"} />
            <Link>
              <Text fontWeight={"700"} color={"blue.500"} mt={3}>
                Shipping, Delivery & Store Pickup
              </Text>
            </Link>
          </Box>
          <Box>
            <Image m={"auto"} src={Shift} boxSize={"60px"} />
            <Link>
              <Text fontWeight={"700"} color={"blue.500"} mt={3}>
                Return & Exchanges
              </Text>
            </Link>
          </Box>
        </Box>
        <Box display={"flex"} gap={"90px"}>
          <Box>
            <Text fontWeight={"700"} color={"black"} mt={8}>
              Order & Purchases
            </Text>
            <Link>
              <Text fontSize={"14px"} color={"blue.400"}>
                Check Order Status
              </Text>
            </Link>
            <Link>
              <Text fontSize={"14px"} color={"blue.400"}>
                Shipping, Delivery & Pickup
              </Text>
            </Link>
            <Link>
              {" "}
              <Text fontSize={"14px"} color={"blue.400"}>
                Returns & Exchanges
              </Text>
            </Link>
            <Link>
              {" "}
              <Text fontSize={"14px"} color={"blue.400"}>
                Price Match Guarantee
              </Text>
            </Link>
            <Link>
              {" "}
              <Text fontSize={"14px"} color={"blue.400"}>
                Product Recalls
              </Text>
            </Link>
            <Link>
              {" "}
              <Text fontSize={"14px"} color={"blue.400"}>
                Trade-In
              </Text>
            </Link>
            <Link>
              {" "}
              <Text fontSize={"14px"} color={"blue.400"}>
                Program Gift Cards
              </Text>
            </Link>
            <Text fontWeight={"700"} color={"black"} mt={8}>
              Payment Options
            </Text>
            <Link>
              <Text fontSize={"14px"} color={"blue.400"}>
                My Best Buy® Credit Card
              </Text>
            </Link>
            <Link>
              <Text fontSize={"14px"} color={"blue.400"}>
                Pay Your Bill at Citibank
              </Text>
            </Link>
            <Link>
              {" "}
              <Text fontSize={"14px"} color={"blue.400"}>
                Lease to Own
              </Text>
            </Link>
          </Box>
          <Box>
            <Text fontWeight={"700"} color={"black"} mt={8}>
              Support & Services
            </Text>
            <Link>
              <Text fontSize={"14px"} color={"blue.400"}>
                Visit our Support Center
              </Text>
            </Link>
            <Link>
              <Text fontSize={"14px"} color={"blue.400"}>
                Shop with an Expert
              </Text>
            </Link>
            <Link>
              {" "}
              <Text fontSize={"14px"} color={"blue.400"}>
                Schedule a Service
              </Text>
            </Link>
            <Link>
              {" "}
              <Text fontSize={"14px"} color={"blue.400"}>
                Manage an Appointment
              </Text>
            </Link>
            <Link>
              {" "}
              <Text fontSize={"14px"} color={"blue.400"}>
                Protection & Support Plans
              </Text>
            </Link>
            <Link>
              {" "}
              <Text fontSize={"14px"} color={"blue.400"}>
                Haul Away & Recycling
              </Text>
            </Link>
            <Link>
              {" "}
              <Text fontSize={"14px"} color={"blue.400"}>
                Contact Us
              </Text>
            </Link>

            <Text fontWeight={"700"} color={"black"} mt={8}>
              Rewards & Membership
            </Text>
            <Link>
              <Text fontSize={"14px"} color={"blue.400"}>
                My Best Buy Memberships
              </Text>
            </Link>
            <Link>
              <Text fontSize={"14px"} color={"blue.400"}>
                View Points & Certificates
              </Text>
            </Link>
            <Link>
              {" "}
              <Text fontSize={"14px"} color={"blue.400"}>
                Member Offers
              </Text>
            </Link>
          </Box>
          <Box>
            <Text fontWeight={"700"} color={"black"} mt={8}>
              Partnerships
            </Text>
            <Link>
              <Text fontSize={"14px"} color={"blue.400"}>
                Affiliate Program
              </Text>
            </Link>
            <Link>
              <Text fontSize={"14px"} color={"blue.400"}>
                Influencer Network
              </Text>
            </Link>
            <Link>
              {" "}
              <Text fontSize={"14px"} color={"blue.400"}>
                Advertise with Us
              </Text>
            </Link>
            <Link>
              {" "}
              <Text fontSize={"14px"} color={"blue.400"}>
                Developers
              </Text>
            </Link>
            <Link>
              {" "}
              <Text fontSize={"14px"} color={"blue.400"}>
                Best Buy Health
              </Text>
            </Link>
            <Link>
              {" "}
              <Text fontSize={"14px"} color={"blue.400"}>
                Best Buy Education
              </Text>
            </Link>
            <Link>
              {" "}
              <Text fontSize={"14px"} color={"blue.400"}>
                Best Buy Business
              </Text>
            </Link>
            <Text fontWeight={"700"} color={"black"} mt={8}>
              About Best Buy
            </Text>
            <Link>
              <Text fontSize={"14px"} color={"blue.400"}>
                Corporate Information
              </Text>
            </Link>
            <Link>
              <Text fontSize={"14px"} color={"blue.400"}>
                Careers
              </Text>
            </Link>
            <Link>
              {" "}
              <Text fontSize={"14px"} color={"blue.400"}>
                Corporate Responsibility
              </Text>
            </Link>{" "}
            <Link>
              {" "}
              <Text fontSize={"14px"} color={"blue.400"}>
                Sustainability
              </Text>
            </Link>
          </Box>

          <Box ml={"60px"} mt={"20px"} p={5} height={"auto"} bg={"white"}>
            <Link color={"blue.500"}>
              {" "}
              <Text mb={"25px"}>Sign in or Create Account</Text>{" "}
            </Link>
            <Divider />
            <Text fontWeight={"700"} fontSize={"20px"}>
              Get the latest deals and more.
            </Text>
            <Input
              border={"1px solid black"}
              placeholder="Enter Email Address"
              outline={true}
            />
            <Button
              mb={"10px"}
              mt={"17px"}
              w={"100%"}
              colorScheme="green"
              bg={"blue"}
              variant="solid"
            >
              Sign Up
            </Button>
            <Divider />
            <Box mb={"10px"} mt={"10px"} display={"flex"}>
              <Image src={optional} boxSize={"56px"} />
              <Box ml={1}>
                <Text mt={-1} fontSize={"20px"} fontWeight={"700"}>
                  Best Buy app
                </Text>
                <Link>
                  <Text fontWeight={"600"} color={"blue"} mt={"-5"}>
                    Learn more ›
                  </Text>
                </Link>
              </Box>
            </Box>
            <Divider />
            <Box display={"flex"} gap={10} mt={7} mb={7}>
              <Image boxSize={10} src={Youtube} />
              <Image boxSize={10} src={Instagram} />
              <Image boxSize={10} src={Facebook} />
              <Image boxSize={10} src={Printer} />
              <Image boxSize={10} src={Tweet} />
            </Box>
            <Divider />
          </Box>
        </Box>{" "}
        <Box mt={"80px"} display={"flex"} justifyContent={"space-between"}>
          <Box>
            <Text>
              How was your experience?
              <Link color={"blue.400"}> Give feedback about our website</Link>
            </Text>
          </Box>{" "}
          <Box gap={6} fontSize={"15px"} display={"flex"} color={"blue.400"}>
            <Text>
              <Link>Mobile Site </Link>
            </Text>
            <Text>
              <Link>Best Buy Canada</Link>
            </Text>
          </Box>
        </Box>
        <Divider />
        <Text mt={"30px"} pb={"40px"} fontSize={"14px"}>
          In-store pricing may vary. Prices and offers are subject to change. ©
          2024 Best Buy. All rights reserved. BEST BUY, the BEST BUY logo, the
          tag design, and MY BEST BUY are trademarks of Best Buy and its
          affiliated companies.
        </Text>
      </Container>
    </>
  );
};

export default Footer;
