import { FC, useState } from "react";
import { Workspace } from "@/types/app";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
 
import Typography from "./ui/typography";
 
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

type SidebarNavProps = {
  userWorkspaceData: Workspace[];
  currentWorkspaceData: Workspace;
};

const SidebarNav: FC<SidebarNavProps> = ({
  currentWorkspaceData,
  userWorkspaceData,
}) => {
 
 

  return (
    <nav>
      <ul className="flex flex-xol space-y-4">
        <li>
          <div className="cursor-pointer items-center text-white mb-4 w-10 h-10 rounded-lg overflow-hidden">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Avatar>
                    <AvatarImage
                      src={currentWorkspaceData?.image_url || ""}
                      alt={currentWorkspaceData?.name}
                      className="object-cover w-full h-full"
                    />
                    <AvatarFallback className="bg-neutral-700">
                      <Typography
                        variant="p"
                        text={currentWorkspaceData?.name.slice(0, 2)}
                        className=""
                      />
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent className="p-0" side="bottom">
                  <Card className="w-[350px] border-0">
                    <CardContent className="flex p-0 flex-col">
                      {userWorkspaceData?.map((workspace) => (
                        <div
                          key={workspace.id}
                          className="hover:opacity-70 px-2 py-1 flex gap-2"
                        >
                          <>
                          <Avatar>
                            <AvatarImage
                              src={currentWorkspaceData?.image_url || ""}
                              alt={currentWorkspaceData?.name}
                              className="object-cover w-full h-full"
                            />
                            <AvatarFallback>
                              <Typography
                                variant="p"
                                text={currentWorkspaceData?.name.slice(0, 2)}
                                className=""
                              />
                            </AvatarFallback>
                            </Avatar>
                          </>
                          <div>
                            <Typography
                              variant="p"
                              text={workspace.name}
                              className="text-sm"
                            />
                            <Typography
                              variant="p"
                              text={workspace.invite_code || ""}
                              className="text-xs lg:text-xs"
                            />
                          </div>
                        </div>
                      ))}
                      <Separator />
                    </CardContent>
                  </Card>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNav;
