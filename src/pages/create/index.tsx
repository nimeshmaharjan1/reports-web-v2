import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import type { Item } from "@/lib/types/global.types";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { items } from "../../../public/data.json";

const CreatePage = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex">
      <aside className="bg-accent">
        <nav className="w-[300px] h-fit">
          <div className="flex-col bg-accent rounded ">
            <div className="search-section p-3">
              <div className="relative ml-auto flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by Report Name"
                  autoFocus
                  className="w-full rounded-lg bg-background pl-8"
                />
              </div>
            </div>
            <Separator></Separator>
            <div className="pt-0 pb-6 overflow-y-auto scroll-auto max-h-[calc(100vh)]">
              <SidebarItems
                {...{ selected, setSelected }}
                list={items}
              ></SidebarItems>
            </div>
          </div>
        </nav>
      </aside>
      <main className="flex flex-col bg-white gap-6 p-6 pt-3 w-full overflow-y-auto scroll-auto max-h-[calc(100vh-40px)]">
        Main
      </main>
    </div>
  );
};

export default CreatePage;

const SidebarItems = ({
  list,
  selected,
  setSelected,
}: {
  list: Item[];
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleSelect = (index: number) => setSelected(index);

  return (
    <div className="w-full flex flex-col">
      {list?.length ? (
        list.map((item, index) => (
          <div
            key={index}
            className={cn(
              selected === index
                ? "bg-white border-l-4 border-primary cursor-default"
                : "cursor-pointer",
              "py-2"
            )}
            onClick={() => handleSelect(index)}
          >
            <div
              className={cn(
                selected === index ? "pl-5" : "pl-6",
                "flex flex-col justify-center pr-6 w-full h-[40px]"
              )}
            >
              <span
                className={cn(
                  selected === index ? "text-green-2" : "text-black-1",
                  "text-sm"
                )}
              >
                {item.title}
              </span>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};
