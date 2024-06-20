import type { Item } from "@/lib/types/global.types";
import { cn } from "@/lib/utils";
import { useGlobalStore } from "@/store/global.store";

const SidebarItems = ({ list }: { list: Item[] }) => {
  const { selected, setSelected } = useGlobalStore();
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

export default SidebarItems;
