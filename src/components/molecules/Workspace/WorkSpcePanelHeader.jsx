import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useWorkSpacePreference } from "@/hooks/Workspace/useWorkSpacePreference";
import { ChevronDownIcon } from "lucide-react";
import React from "react";

function WorkSpcePanelHeader() {
  const { setOpenPreferenceModel } = useWorkSpacePreference();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="transparent"
          className="font-semibold text-lg w-auto p-1.5 overflow-hidden"
        >
          <span className="truncate">WorkSpace</span>
          <ChevronDownIcon className="size-5 ml-1" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent side="bottom" align="start" className="w-64">
        <DropdownMenuItem className="size-full ">Item 1</DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer py-2"
          onClick={() => {
            console.log("Button Clicked");
            setOpenPreferenceModel(true);
          }}
        >
          Preferences
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer py-2">
          Invite people to
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default WorkSpcePanelHeader;
