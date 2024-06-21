import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { Item } from "@/lib/types/global.types";
import { useGlobalStore } from "@/store/global.store";
import { Link } from "react-router-dom";
const CreateHeader = ({ list }: { list: Item[] }) => {
  const { selected, toggleSidebar } = useGlobalStore();

  return (
    <header className="md:container py-6 pt-2 lg:pt-6">
      <div className="flex flex-col lg:flex-row gap-3 lg:justify-between">
        <section className="title-section flex items-center gap-3">
          <button onClick={toggleSidebar} className="block md:hidden">
            <img
              src="/slide-open.svg"
              className="min-w-[20px] min-h-[40px] svg-shadow"
            />
          </button>
          <div className="flex flex-col gap-1">
            <span className="text-xl leading-6 font-semibold text-dark-green">
              {list[selected]?.title}
            </span>
            <span className="font-normal text-xs text-greenish-grey">
              {list[selected]?.desc}
            </span>
          </div>
        </section>
        <div className="flex pl-6 md:pl-0 flex-wrap gap-4 sm:flex">
          <RadioGroup defaultValue="CSV" className="flex gap-3 items-center">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="CSV" id="r1" />
              <Label htmlFor="r1">CSV</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="XLSX" id="r2" />
              <Label htmlFor="r2">XLSX</Label>
            </div>
          </RadioGroup>
          <Link to="/">
            <Button variant={"outline"}>Cancel</Button>
          </Link>
          <Button>Generate Report</Button>
        </div>
      </div>
    </header>
  );
};

export default CreateHeader;
