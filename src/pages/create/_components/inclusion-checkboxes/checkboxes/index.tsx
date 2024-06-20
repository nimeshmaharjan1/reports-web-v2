import { Checkbox } from "@/components/ui/checkbox";
import type { Field } from "@/lib/types/global.types";
import React from "react";

const Checkboxes = ({
  fields,
  viewOnly = false,
}: {
  fields: Field[];
  viewOnly?: boolean;
}) => {
  let filteredFields = fields;
  if (viewOnly) {
    filteredFields = fields.filter((field) => !field.unselected);
  }

  return (
    <div className="bg-accent p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredFields.length > 0 ? (
        filteredFields.map(({ key, value, required, unselected }) => {
          return (
            <div key={key} className="flex items-center space-x-2">
              <Checkbox
                disabled={viewOnly}
                id={value}
                defaultChecked={!unselected}
              />
              <label
                htmlFor={value}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {value}
              </label>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default Checkboxes;
