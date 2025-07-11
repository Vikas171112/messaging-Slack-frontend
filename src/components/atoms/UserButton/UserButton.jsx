import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/apis/auth/useAuth";
import { useCreateWorkSpace } from "@/hooks/Workspace/useCreateWorkSpace";
import { PencilIcon } from "lucide-react";

export const UserButton = () => {
  const { auth } = useAuth();
  const { setOpenCreateWorkspaceModal } = useCreateWorkSpace();
  function openWorkSpaceCreateModel() {
    setOpenCreateWorkspaceModal(true);
  }
  //Since no backend is connected we cannot fetch avatar from here even the user is set to null
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          {/* <AvatarFallback></AvatarFallback> */}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={openWorkSpaceCreateModel}>
          <PencilIcon className="size-4 mr-2 h-10" />
          Create Workspace
        </DropdownMenuItem>
        <DropdownMenuItem>My Account</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Log Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
