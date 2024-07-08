import {
  Button,
  Image,
  Text,
  VStack,
  Flex,
  Box,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import "./card.css";
const Card = ({ img, checkoutHandler }) => {
  const navbarShadow = useColorModeValue("md", "lg");

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
          boxShadow={navbarShadow}
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
            fontSize="6xl"
            fontWeight="bold"
            mb={2}
            color="white"
            style={{ textShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)" }}
          >
            Build a community of your dreams
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
            Disha is the best feature packed Discord bot that can manage your
            server A to Z efficiently!
          </Text>
          <Flex justifyContent="space-between" alignItems="center" mt={4}>
            <Link
              href="https://discord.com/oauth2/authorize?client_id=1196434256877068358&permissions=347208&response_type=code&redirect_uri=https://discord.com/invite/scRHp7T44F&scope=applications.commands+bot"
              target="_self"
            >
              <Button
                colorScheme="yellow"
                variant="outline"
                size="lg"
                mr={4}
                fontSize="xl"
                py={6}
                px={10}
                _hover={{
                  transform: "scale(1.1)",
                  boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)",
                }}
              >
                Add to Server
              </Button>
            </Link>
            <Button
              colorScheme="yellow"
              variant="solid"
              size="lg"
              bg="yellow.400"
              fontSize="xl"
              py={6}
              px={10}
              _hover={{
                transform: "scale(1.1)",
                boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)",
                bg: "#ffff00",
              }}
              onClick={checkoutHandler}
            >
              Purchase
            </Button>
          </Flex>
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

export default Card;
