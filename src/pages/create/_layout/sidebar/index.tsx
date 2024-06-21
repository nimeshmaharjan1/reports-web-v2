import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import type { Item } from "@/lib/types/global.types";
import { Search } from "lucide-react";
import SidebarItems from "./sidebar-items";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useGlobalStore } from "@/store/global.store";

const CreateSidebar = ({ list }: { list: Item[] }) => {
  const { closeSidebar, setShowSidebar, showSidebar, toggleSidebar } =
    useGlobalStore();

  return (
    <aside
      className={cn(
        "bg-accent sm:block",
        showSidebar ? "fixed left-0 top-16 h-auto w-80 z-30" : "hidden"
      )}
    >
      <nav className="w-[300px] h-fit">
        <div className="flex-col bg-accent rounded ">
          <div className="search-section p-3">
            <div className="relative ml-auto flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by Report Name"
                className="w-full rounded-lg bg-background pl-8"
              />
            </div>
          </div>
          <Separator></Separator>
          <div className="pt-0 pb-6 overflow-y-auto scroll-auto max-h-[calc(100vh)]">
            <SidebarItems list={list}></SidebarItems>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default CreateSidebar;
