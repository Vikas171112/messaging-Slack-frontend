import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowUp,
  CircleFadingArrowUp,
  CircleFadingArrowUpIcon,
  FileBarChart,
  FileBarChart2,
  LucideCircleFadingArrowUp,
  PlusCircleIcon,
} from "lucide-react";
import React, { useState } from "react";

function WorkSpacePanelSection({ children, label }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex  items-center justify-between mt-2">
      <div className="flex flex-col">
        <Button
          onClick={() => setOpen(!open)}
          variant="transparent"
          className="p-0.5 text-sm size-6 text-[#f9edffcc]"
        >
          {open ? (
            <ArrowDown className="size-4" />
          ) : (
            <ArrowUp className="size-4" />
          )}
        </Button>
        {open && children}
      </div>
      <Button className="" variant="transparent">
        Channels
      </Button>
      <Button className="" variant="transparent">
        <PlusCircleIcon />
      </Button>
    </div>
  );
}

export default WorkSpacePanelSection;
