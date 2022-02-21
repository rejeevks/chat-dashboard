import React, { useState } from "react";
import {
  Avatar,
  Box,
  Circle,
  Flex,
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
    <Flex w="40%" bg="gray.100" flexDirection="column" overflow="scroll">
      <Box p={8} h="full">
        <Flex bg="gray.200" p={4} justifyContent="space-between">
          <Flex>
            <Avatar src="https://bit.ly/ryan-florence" />
            <Box pl={2}>
              <Text fontWeight="semibold">Test Name</Text>
              <Text fontSize="md" color="blue.500">
                last online 5 hours ago
              </Text>
            </Box>
          </Flex>

          <Flex>
            <Flex pr={1}>
              <Circle size="40px" bg="white" color="black">
                <Icon as={GrAttachment} />
              </Circle>
            </Flex>
            <Flex>
              <Circle size="40px" bg="white" color="black">
                <Icon as={BsThreeDotsVertical} />
              </Circle>
            </Flex>
          </Flex>
        </Flex>
        <Box borderWidth="1px" h="700px">
          <Text fontSize="md" pb={2}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            aliquid inventore quos, cumque voluptatibus quasi voluptatem esse
            asperiores vero. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Ea optio magni facere iure maxime maiores quod repellat iste
            tenetur fugit quas, veritatis exp
          </Text>
        </Box>

        <Box borderWidth="1p">
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
    </Flex>
  );
};

export default Message;
