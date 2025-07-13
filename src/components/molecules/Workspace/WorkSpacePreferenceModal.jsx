import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useWorkSpacePreference } from "@/hooks/Workspace/useWorkSpacePreference";
import React, { useEffect } from "react";

function WorkSpacePreferenceModal() {
  const { openPreferenceModel, setOpenPreferenceModel } =
    useWorkSpacePreference();
  // useEffect(() => {
  //   console.log(
  //     "WorkSpacePreferenceModal - openPreferenceModel:",
  //     openPreferenceModel
  //   );
  //   console.log(
  //     "WorkSpacePreferenceModal - setOpenPreferenceModel is defined:",
  //     typeof setOpenPreferenceModel === "function"
  //   );
  // }, [openPreferenceModel, setOpenPreferenceModel]);
  function handleClose() {
    setOpenPreferenceModel(false);
  }
  return (
    <Dialog open={openPreferenceModel} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new workspace</DialogTitle>
        </DialogHeader>

        <form>
          <Input
            required
            // disabled={isPending}
            minLength={3}
            placeholder="Put the workspace name e.g. MyWorkspace, Dev Workspace etc .."
          />

          <div className="flex justify-end mt-5">
            <Button>Create workspace</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default WorkSpacePreferenceModal;
