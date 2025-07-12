import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import React from "react";

function WorkSpaceSwitcher() {
  const workspaces = {};
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button className="size-9 relative overflow-hidden bg-[#ABABAD] hover:bg-[#ABABAD]/80 text-black">
            D
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="cursor-pointer flex-col justify-start items-start text-danger font-bold">
            Kuch Bhi
            {/* <span className="text-xs text-muted-foregorund">
              (Active Workspace)
            </span> */}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default WorkSpaceSwitcher;
