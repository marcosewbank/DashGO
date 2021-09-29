import React from "react";
import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
}

export const PaginationItem = ({
  isCurrent = false,
  number,
}: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="sx"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ bgColor: "pink.500", cursos: "default" }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="sx"
      width="4"
      colorScheme="gray.700"
      _hover={{ bgColor: "gray.500" }}
    >
      {number}
    </Button>
  );
};
