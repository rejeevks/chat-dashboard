import React, { useState } from "react";
import {
  Avatar,
  Box,
  Circle,
  Container,
  Grid,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { GrAttachment } from "react-icons/gr";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiSendPlaneLine, RiFilmLine } from "react-icons/ri";
import { VscAdd } from "react-icons/vsc";
import { AiOutlineFile, AiOutlinePicture } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";

const Message = () => {
  const [icons, setIcons] = useState(false);

  const IconsOpen = () => {
    if (icons === false) {
      setIcons(true);
    } else {
      setIcons(false);
    }
  };
  return (
    <Container>
      <Box minW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box
          background="gray.100"
          display="flex"
          justifyContent="space-between"
          p={4}
        >
          <Box display="flex">
            <Avatar src="https://bit.ly/ryan-florence" />
            <Box pl={2}>
              <Text fontWeight="semibold">Test Name</Text>
              <Text fontSize="md" color="blue.500">
                last online 5 hours ago
              </Text>
            </Box>
          </Box>

          <HStack>
            <Circle size="40px" bg="white" color="black">
              <Icon as={GrAttachment} />
            </Circle>
            <Circle size="40px" bg="white" color="black">
              <Icon as={BsThreeDotsVertical} />
            </Circle>
          </HStack>
        </Box>
        <Box maxW="xl" borderWidth="1px" overflow="hidden">
          <Text fontSize="md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            aliquid inventore quos, cumque voluptatibus quasi voluptatem esse
            asperiores vero. Optio enim magnam nulla dolorem consectetur
            quibusdam culpa. Eaque, molestiae nulla. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Odio aliquid inventore quos, cumque
            voluptatibus quasi voluptatem esse asperiores vero. Optio enim
            magnam nulla dolorem consectetur quibusdam culpa. Eaque, molestiae
            nulla.
          </Text>
        </Box>

        <Box maxW="xl" borderWidth="1px" overflow="hidden">
          {icons ? (
            <Box>
              <Circle size="40px" bg="#2A8BF2" color="white">
                <Icon as={AiOutlineFile} />
              </Circle>
              <Circle size="40px" bg="#2A8BF2" color="white">
                <Icon as={AiOutlinePicture} />
              </Circle>
              <Circle size="40px" bg="#2A8BF2" color="white">
                <Icon as={RiFilmLine} />
              </Circle>
            </Box>
          ) : null}

          <InputGroup>
            icons === true ?{" "}
            <Circle size="40px" bg="#2A8BF2" color="white" onClick={IconsOpen}>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={VscAdd} />}
              />
            </Circle>
            <Input type="" placeholder="Type a message here" size="lg" />
            <InputRightElement
              children={<Icon as={BsEmojiSmile} />}
              pr={14}
              color="gray.500"
            />
            <Circle size="40px" bg="#2A8BF2" color="white">
              <InputRightElement children={<Icon as={RiSendPlaneLine} />} />
            </Circle>
          </InputGroup>
        </Box>
      </Box>
    </Container>
  );
};

export default Message;
