import { items as itemsJSON } from "@/lib/data/data.json";
import { useMemo } from "react";
import CreateHeader from "./_components/create.header";
import CreateSidebar from "./_components/sidebar";

const CreatePage = () => {
  const items = useMemo(() => itemsJSON, []);

  return (
    <div className="flex">
      <CreateSidebar list={items}></CreateSidebar>
      <main className="flex flex-col bg-white gap-6 p-6 pt-3 w-full overflow-y-auto scroll-auto max-h-[calc(100vh-40px)]">
        <CreateHeader list={items}></CreateHeader>
      </main>
    </div>
  );
};

export default CreatePage;
