import Channel from "@/components/molecules/Channel/Channel";
import { CreateWorkspaceModals } from "@/components/molecules/CreateworkSpaceModal/CreateWorkSpaceModal";
import WorkSpacePreferenceModal from "@/components/molecules/Workspace/WorkSpacePreferenceModal";

export const Modals = () => {
  return (
    <>
      <CreateWorkspaceModals />
      <WorkSpacePreferenceModal />
      <Channel />
    </>
  );
};
