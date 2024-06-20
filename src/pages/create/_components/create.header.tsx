import { Button } from "@/components/ui/button";
import type { Item } from "@/lib/types/global.types";
import { useGlobalStore } from "@/store/global.store";
import { Link } from "react-router-dom";
const CreateHeader = ({ list }: { list: Item[] }) => {
  const { selected } = useGlobalStore();

  return (
    <header className="hidden md:block sticky top-[-25px] py-6 pt-6 z-50 bg-white ">
      <div className="hidden sm:flex justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-xl leading-6 font-semibold text-dark-green">
            {list[selected]?.title}
          </span>
          <span className="font-normal text-xs text-greenish-grey">
            {list[selected]?.desc}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex flex-wrap gap-2.5 sm:flex">
            <button className="px-4 py-2 text-sm block truncate leading-4 border rounded-md min-w-[91px] h-[40px]">
              <label>
                <input
                  type="radio"
                  name="reportType"
                  value="CSV"
                  className="mr-2 rounded-full border-2 border-primary focus:ring-primary text-primary"
                  checked={true}
                />
                CSV
              </label>
            </button>
            <button className="px-4 py-2 text-sm block truncate leading-4 border rounded-md min-w-[91px] h-[40px]">
              <label>
                <input
                  type="radio"
                  name="reportType"
                  value="XLSX"
                  className="mr-2 rounded-full border-2 border-primary focus:ring-primary text-primary"
                />
                XLSX
              </label>
            </button>
            <Link to="/">
              <Button variant={"outline"}>Cancel</Button>
            </Link>
            <Button>Generate Report</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CreateHeader;
