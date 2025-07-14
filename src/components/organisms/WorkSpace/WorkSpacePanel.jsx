import { SideBarItem } from "@/components/atoms/SideBarItem/SideBarItem";
import WorkSpacePanelSection from "@/components/molecules/Workspace/WorkSpacePanelSection";
import WorkSpcePanelHeader from "@/components/molecules/Workspace/WorkSpcePanelHeader";
import { MessageSquareTextIcon, SendHorizonalIcon } from "lucide-react";
import React from "react";

function WorkSpacePanel() {
  return (
    <div>
      <WorkSpcePanelHeader />
      <div className="flex flex-col px-2 mt-3">
        <SideBarItem label="Threads" icon={MessageSquareTextIcon} />
        <SideBarItem label="Drafts & Sends" icon={SendHorizonalIcon} />
        <WorkSpacePanelSection label={"Channels"}>
          general
        </WorkSpacePanelSection>
      </div>
    </div>
  );
}

export default WorkSpacePanel;
