import { UserButton } from "@/components/atoms/UserButton/UserButton";
import SideBarButton from "@/components/molecules/SideBar/SideBarButton";
import {
  BellIcon,
  HomeIcon,
  MessageSquareIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import React from "react";
import WorkSpaceSwitcher from "./WorkSpaceSwitcher";

function WorkSpaceSideBar() {
  return (
    <aside className="w-[70px] h-full bg-[#481349] flex flex-col gap-y-4 items-center pt-[10px] pb-[5px]">
      <WorkSpaceSwitcher />
      <SideBarButton Icon={HomeIcon} label="Home" />

      <SideBarButton Icon={MessageSquareIcon} label="DMs" />

      <SideBarButton Icon={BellIcon} label="Notifications" />

      <SideBarButton Icon={MoreHorizontalIcon} label="More" />

      <div className="flex flex-col items-center justify-center mt-auto mb-5 gap-y-1">
        <UserButton />
      </div>
    </aside>
  );
}

export default WorkSpaceSideBar;
