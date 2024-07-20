import { getUserData } from "@/actions/get-user-data"; 
import { getCurrentWorkspaceData, getUserWorkspaceData } from "@/actions/workspace";
import { Workspace as UserWorkspace } from '@/types/app';
import Sidebar from "@/components/sidebar";
import { redirect } from "next/navigation";

const Workspace = async ({ params: { id } }: { params: { id: string } }) => {
 
  const userData = await getUserData();  
  if (!userData) return redirect("/auth");
  const [userWorkspacesData,userWorkspaceDataError] = await getUserWorkspaceData(userData.workspaces!);
  const [currentWorkspaceData,currentWorkspaceDataError] = await getCurrentWorkspaceData(id);


  return <>
    <div className="hidden md:block">
    <Sidebar 
         currentWorkspaceData={currentWorkspaceData}
         userWorkspacesData={userWorkspacesData as UserWorkspace[]}
         userData={userData}
    />
    </div>
    <div className="md:hidden block min-h-screen">
        Mobile
    </div>
  </>;
};

export default Workspace;
