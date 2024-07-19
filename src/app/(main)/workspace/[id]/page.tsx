import { getUserData } from "@/actions/get-user-data"; 
import { getCurrentWorkspaceData, getUserWorkspaceData } from "@/actions/workspace";
import Sidebar from "@/components/sidebar";
import { redirect } from "next/navigation";

const Workspace = async ({ params: { id } }: { params: { id: string } }) => {
 
  const userData = getUserData();
  if (!userData) return redirect("/auth");

  const [userWorkspaceData,userWorkspaceDataError] = await getUserWorkspaceData(userData.workspaces!);
  const [currentWorkspaceData,currentWorkspaceDataError] = await getCurrentWorkspaceData(id);
 

 


  return <>
    <div className="hidden md:block">
    <Sidebar 
         currentWorkspaceData={currentWorkspaceData}
         userData={userData}
         userWorkspacesData={userWorkspaceData as UserWorkspace[]}
    />
    </div>
    <div className="md:hidden block min-h-screen">
        Mobile
    </div>
  </>;
};

export default Workspace;
