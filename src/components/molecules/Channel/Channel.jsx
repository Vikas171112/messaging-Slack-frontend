import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useCreateChannelContext } from "@/hooks/Channel/useCreateChannelHook";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Don't forget to import Button if you'll use it for submission

function Channel() {
  const { openCreateChannelModal, setOpenCreateChannelModal } =
    useCreateChannelContext();
  const [channelName, setChannelName] = useState(""); // State to hold the input value

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted. Channel Name:", channelName);
    // You can now use the 'channelName' state for:
    // 1. Making an API call to create the channel
    // 2. Passing it to a parent component (e.g., via a prop or another context/Redux)
    // 3. Performing validation

    setOpenCreateChannelModal(false);
    setChannelName("");
  }

  return (
    <Dialog
      open={openCreateChannelModal}
      onOpenChange={setOpenCreateChannelModal}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Channel</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <Input
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
            required
            autoFocus
            minLength={3}
            maxLength={50}
            placeholder="Channel Name e.g. Design Team"
          />

          <div className="flex justify-end mt-4">
            <Button type="submit">Create Channel</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default Channel;
