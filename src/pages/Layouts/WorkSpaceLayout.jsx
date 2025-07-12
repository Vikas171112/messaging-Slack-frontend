import { WorkspaceNavBar } from "@/components/organisms/WorkSpace/WorkSpaceNavbar";
import WorkSpaceSideBar from "@/components/organisms/WorkSpace/WorkSpaceSideBar";

export const WorkSpaceLayout = ({ children }) => {
  return (
    <>
      <div className="h-[100vh]">
        <WorkspaceNavBar />
        <div className="flex h-[calc(100vh-0px)]">
          <WorkSpaceSideBar />
          {children};
        </div>
      </div>
    </>
  );
};
