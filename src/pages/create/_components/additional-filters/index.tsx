import { Label } from "@/components/ui/label";
import type { Field } from "@/lib/types/global.types";
import React from "react";
import Filters from "./filters";

const AdditionalFilters = ({ fields }: { fields: Field[] }) => {
  return (
    <section className="additional-filters space-y-3">
      <Label>Additional Filters</Label>
      <Filters fields={fields}></Filters>
    </section>
  );
};

export default AdditionalFilters;
