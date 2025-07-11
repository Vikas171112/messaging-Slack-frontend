import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useCreateWorkSpace } from "@/hooks/Workspace/useCreateWorkSpace";
import { useState } from "react";

export const CreateWorkspaceModals = () => {
  const { openCreateWorkspaceModal, setOpenCreateWorkspaceModal } =
    useCreateWorkSpace();
  const [workspaceName, setWorkspaceName] = useState("");

  function handleClose() {
    setOpenCreateWorkspaceModal(false);
  }
  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      console.log("form Submitted successfully");
    } catch (error) {
      console.log("we have error coming up");
    } finally {
      setOpenCreateWorkspaceModal(false);
      setWorkspaceName("");
    }
  }

  return (
    <Dialog open={openCreateWorkspaceModal} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new workspace</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleFormSubmit}>
          <Input
            required
            // disabled={isPending}
            minLength={3}
            placeholder="Put the workspace name e.g. MyWorkspace, Dev Workspace etc .."
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
          />

          <div className="flex justify-end mt-5">
            <Button>Create workspace</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
