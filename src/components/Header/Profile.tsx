import React from "react";
import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}
export const Profile = ({ showProfileData }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Marcos Ewbank</Text>
          <Text color="gray.300" fontSize="small">
            ewbankmarcos@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Marcos Ewbank"
        src="https://github.com/marcosewbank.png"
      />
    </Flex>
  );
};
