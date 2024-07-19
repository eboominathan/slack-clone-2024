import { getUserData } from "@/actions/get-user-data"; 
import { getCurrentWorkspaceData, getUserWorkspaceData } from "@/actions/workspace";
import { redirect } from "next/navigation";

const Workspace = async ({ params: { id } }: { params: { id: string } }) => {
 
  const userData = getUserData();
  if (!userData) return redirect("/auth");

  const [userWorkspaceData,userWorkspaceDataError] = await getUserWorkspaceData(userData.workspaces!);
  const [currentWorkspaceData,currentWorkspaceDataError] = await getCurrentWorkspaceData(id);
  console.log(currentWorkspaceData);
  

 


  return <div>Workspace</div>;
};

export default Workspace;
