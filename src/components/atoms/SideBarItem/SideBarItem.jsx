import { Button } from "@/components/ui/button";

export const SideBarItem = ({ label, icon: Icon }) => {
  return (
    <Button variant="transparent" size="sm">
      <Icon className="size-3.5 mr-1" />
      <span className="text-sm">{label}</span>
    </Button>
  );
};
