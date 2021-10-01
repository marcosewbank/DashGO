import React from "react";
import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine } from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

interface Props {}

export const SidebarNav = (props: Props) => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title={"GENERAL"}>
        <NavLink
          icon={RiDashboardLine}
          href="/dashboard"
          children="Dashboard"
        />
        <NavLink icon={RiContactsLine} href="/users" children="Users" />
      </NavSection>
      <NavSection title="AUTOMATION">
        <NavLink icon={RiDashboardLine} href="/forms" children="Forms" />
        <NavLink
          icon={RiContactsLine}
          href="/automation"
          children="Automation"
        />
      </NavSection>
    </Stack>
  );
};
