import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
  RiContactsLine,
} from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title={"GENERAL"}>
          <NavLink icon={RiDashboardLine} children="Dashboard" />
          <NavLink icon={RiContactsLine} children="Users" />
        </NavSection>
        <NavSection title="AUTOMATION">
          <NavLink icon={RiDashboardLine} children="Forms" />
          <NavLink icon={RiContactsLine} children="Automation" />
        </NavSection>
      </Stack>
    </Box>
  );
}
