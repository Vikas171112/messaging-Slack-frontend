import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import React, { useState } from "react";

function WorkSpaceSwitcher() {
  // Static workspace data
  const staticWorkspaces = [
    { id: "1", name: "Development Team" },
    { id: "2", name: "Marketing Hub" },
    { id: "3", name: "Design Studio" },
  ];

  // State for active workspace
  const [activeWorkspace, setActiveWorkspace] = useState(staticWorkspaces[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="size-9 relative overflow-hidden bg-[#ABABAD] hover:bg-[#ABABAD]/80 text-black">
          <span>{activeWorkspace.name.charAt(0).toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-dark">
        {/* Show active workspace */}
        <DropdownMenuItem
          className="cursor-pointer flex-col justify-start items-start bg-dark"
          onSelect={(e) => e.preventDefault()} // Prevent closing on active
        >
          <p className="font-semibold">{activeWorkspace.name}</p>
          <span className="text-xs text-muted-foreground">
            (Active Workspace)
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        {/* Show other workspaces */}
        {staticWorkspaces.map((workspace) =>
          workspace.id === activeWorkspace.id ? null : (
            <DropdownMenuItem
              key={workspace.id}
              className="cursor-pointer flex-col justify-start items-start"
              onSelect={() => setActiveWorkspace(workspace)}
            >
              <p className="truncate">{workspace.name}</p>
            </DropdownMenuItem>
          )
        )}

        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer flex justify-center items-center font-medium"
          onSelect={() => console.log("Open Create Workspace Modal")}
        >
          + Create New
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default WorkSpaceSwitcher;
