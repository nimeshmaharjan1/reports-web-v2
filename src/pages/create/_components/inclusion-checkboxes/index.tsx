import { Label } from "@/components/ui/label";
import type { Field } from "@/lib/types/global.types";
import React from "react";
import Checkboxes from "./checkboxes";

const InclusionCheckboxes = ({ fields }: { fields: Field[] }) => {
  return (
    <section className="inclusion-section space-y-3">
      <Label>Select the data that you want in the report</Label>
      <Checkboxes fields={fields}></Checkboxes>
    </section>
  );
};

export default InclusionCheckboxes;
