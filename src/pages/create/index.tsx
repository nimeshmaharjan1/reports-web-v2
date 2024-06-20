import { Card, CardContent } from "@/components/ui/card";
import { items as itemsJSON } from "@/lib/data/data.json";
import { useGlobalStore } from "@/store/global.store";
import { useMemo } from "react";
import AdditionalFilters from "./_components/additional-filters";
import CreateHeader from "./_components/create.header";
import InclusionCheckboxes from "./_components/inclusion-checkboxes";
import ReportInfo from "./_components/report-info";
import CreateSidebar from "./_layout/sidebar";
import ReportPreferences from "./_components/report-preferences";

const CreatePage = () => {
  const items = useMemo(() => itemsJSON, []);
  const { selected } = useGlobalStore();
  return (
    <div className="flex">
      <CreateSidebar list={items}></CreateSidebar>
      <div className="w-full">
        <CreateHeader list={items}></CreateHeader>
        <main className="overflow-y-scroll max-h-[calc(100vh-410px)] lg:max-h-[calc(100vh-180px)] container">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 gap-8">
                <ReportInfo items={items}></ReportInfo>
                <InclusionCheckboxes
                  fields={items[selected]?.fields ?? []}
                ></InclusionCheckboxes>
                <AdditionalFilters
                  fields={items[selected]?.fields ?? []}
                ></AdditionalFilters>
                <ReportPreferences></ReportPreferences>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default CreatePage;
