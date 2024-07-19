'use client';
import { FC } from "react"
import { User, Workspace } from "@/types/app"

type SideBarProps = {
    userWorkspacesData :Workspace[],
    currentWorkspaceData :Workspace,
    userData :User
}
const Sidebar:FC<SideBarProps> = ({userWorkspacesData,currentWorkspaceData,userData}) => {
  return (
    <aside>

    </aside>
  )
}

export default Sidebar