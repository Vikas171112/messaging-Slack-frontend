import WorkSpcePanelHeader from "@/components/molecules/Workspace/WorkSpcePanelHeader";
import { WorkspaceNavBar } from "@/components/organisms/WorkSpace/WorkSpaceNavbar";
import WorkSpacePanel from "@/components/organisms/WorkSpace/WorkSpacePanel";
import WorkSpaceSideBar from "@/components/organisms/WorkSpace/WorkSpaceSideBar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export const WorkSpaceLayout = ({ children }) => {
  return (
    <>
      <div className="h-[100vh]">
        <WorkspaceNavBar />
        <div className="flex h-[calc(100vh-0px)]">
          <WorkSpaceSideBar />
          <ResizablePanelGroup
            className=""
            direction="horizontal"
            autoSaveId={"workspaceresize"}
          >
            <ResizablePanel
              className="bg-[#5c2c5f]"
              defaultSize={20}
              minSize={11}
            >
              <WorkSpacePanel />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel minSize={20}>{children}</ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </>
  );
};
