import { Button, Image, Box, Flex, Text, VStack, Link } from "@chakra-ui/react";
import React from "react";
import "./card.css";
import { Link as RouterLink } from "react-router-dom";
const img = "https://i.ibb.co/LdJVxJP/DIsha.png";

const TermsOfService = () => {
  return (
    <Box>
      <Box
        className="card animated-card"
        minH="100vh"
        display="flex"
        flexDirection="column"
      >
        <Flex
          className="super-navbar"
          bg={`rgba(31, 41, 51, 0.55)`}
          p={4}
          justifyContent="space-between"
          alignItems="center"
          position="sticky"
          top={0}
          zIndex={1}
          boxShadow="md"
          h="60px"
        >
          <Flex alignItems="center">
            <Image src={img} boxSize="10" mr={2} borderRadius="full" />
            <RouterLink to="/">
              <Link>
                <Text fontSize="lg" fontWeight="bold" ml={2} color="white">
                  Disha
                </Text>
              </Link>
            </RouterLink>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center">
            <Link
              href="https://discord.com/oauth2/authorize?client_id=1196434256877068358&permissions=347208&response_type=code&redirect_uri=https://discord.com/invite/scRHp7T44F&scope=applications.commands+bot"
              target="_self"
            >
              <Button
                variant="ghost"
                colorScheme="yellow"
                _hover={{
                  bg: "yellow.400",
                  color: "white",
                }}
              >
                Invite
              </Button>
            </Link>
            <Link
              href="https://discord.gg/friends-we-never-met-official-1231128980724121652"
              target="_self"
            >
              <Button
                variant="ghost"
                colorScheme="yellow"
                _hover={{
                  bg: "yellow.400",
                  color: "white",
                }}
              >
                Support
              </Button>
            </Link>
            <Button
              variant="ghost"
              colorScheme="yellow"
              _hover={{
                bg: "yellow.400",
                color: "white",
              }}
            >
              Purchase
            </Button>
          </Flex>
        </Flex>
        <VStack flex={1} justifyContent="center" alignItems="center" p={4}>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            mb={2}
            color="white"
            style={{ textShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)" }}
          >
            Terms of Service
          </Text>
          <Text
            fontSize="xl"
            color="gray.200"
            mb={4}
            style={{
              fontFamily: "Montserrat",
              fontStyle: "italic",
              fontWeight: "bold",
              textShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)",
            }}
          >
            Last updated: [insert date]
          </Text>
          <Text fontSize="lg" color="gray.200" mb={4}>
            Please read these terms of service carefully before using our
            services.
          </Text>
          <Text fontSize="lg" color="gray.200" mb={4}>
            By using our services, you agree to be bound by these terms of
            service.
          </Text>
          {/* Add more terms of service content here */}
        </VStack>
      </Box>
      <Box
        bg="black"
        p={4}
        mt={0}
        h="50vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Flex flexDirection="column" alignItems="center">
          <Image src={img} boxSize="20" mb={2} borderRadius="full" />
          <Text fontSize="lg" fontWeight="bold" color="gray.400" mb={2}>
            {" "}
            Disha{" "}
          </Text>
          <Flex justifyContent="space-between" mb={2}>
            <Text fontSize="lg" color="gray.400" mr={4}>
              {" "}
              Copyright © 2024{" "}
            </Text>
            <RouterLink to="/terms-of-service">
              <Link>
                <Text
                  fontSize="lg"
                  color="gray.400"
                  mr={4}
                  transition="color 0.2s ease-in-out"
                  _hover={{ color: "purple.500" }}
                >
                  {" "}
                  Terms of Service{" "}
                </Text>
              </Link>
            </RouterLink>
            <RouterLink to="/privacy-policy">
              <Link>
                <Text
                  fontSize="lg"
                  color="gray.400"
                  mr={4}
                  transition="color 0.2s ease-in-out"
                  _hover={{ color: "purple.500" }}
                >
                  {" "}
                  Privacy Policy{" "}
                </Text>
              </Link>
            </RouterLink>
            <RouterLink to="/refund-policy">
              <Link>
                <Text
                  fontSize="lg"
                  color="gray.400"
                  mr={4}
                  transition="color 0.2s ease-in-out"
                  _hover={{ color: "purple.500" }}
                >
                  {" "}
                  Refund Policy{" "}
                </Text>
              </Link>
            </RouterLink>
          </Flex>
          <Text fontSize="lg" color="gray.400" mb={1}>
            {" "}
            Made with ❤️ by ilovethatbreathes{" "}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default TermsOfService;
