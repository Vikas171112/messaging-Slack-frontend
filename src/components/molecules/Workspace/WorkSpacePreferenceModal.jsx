import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useWorkSpacePreference } from "@/hooks/Workspace/useWorkSpacePreference";
import { TrashIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

function WorkSpacePreferenceModal() {
  const { openPreferenceModel, setOpenPreferenceModel } =
    useWorkSpacePreference();
  const [editOpen, setEditOpen] = useState(false);
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
          <DialogTitle>Admin</DialogTitle>
        </DialogHeader>
        <div className="px-4 pb-4 flex flex-col gap-y-2">
          <Dialog open={editOpen} onOpenChange={setEditOpen}>
            <DialogTrigger>
              <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm">Workspace Name</p>
                  <p className="text-sm font-semibold hover:underline">Edit</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Rename Workspace</DialogTitle>
              </DialogHeader>

              <form className="space-y-4">
                <Input
                  value=""
                  required
                  autoFocus
                  minLength={3}
                  maxLength={50}
                  placeholder="Workspace Name e.g. Design Team"
                />

                <DialogFooter>
                  <DialogClose>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Save</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          <button className="flex items-center gap-x-2 px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
            <TrashIcon className="size-5" />
            <p className="text-sm font-semibold">Delete Workspace</p>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default WorkSpacePreferenceModal;
