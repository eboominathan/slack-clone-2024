"use client";
import { FC } from "react";
import { User, Workspace } from "@/types/app";
import SidebarNav from "./sidebar-nav";

type SideBarProps = {
  userWorkspaceData: Workspace[];
  currentWorkspaceData: Workspace;
  userData: User;
};
const Sidebar: FC<SideBarProps> = ({
  userWorkspaceData,
  currentWorkspaceData,
  userData,
}) => {
  return (
    <aside
      className={`
        fixed
        top-0
        left-0
        pt-[68px]
        pb-8
        z-30
        flex
        flex-col
        items-center
        h-screen
        w-20
        `}
    >
      <SidebarNav
        currentWorkspaceData={currentWorkspaceData}
        userWorkspaceData={userWorkspaceData}
      />
    </aside>
  );
};

export default Sidebar;
