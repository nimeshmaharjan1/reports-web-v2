import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MultipleSelector from "@/components/ui/multi-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Operation, Operator } from "@/lib/constants/operators.constants";
import type { Field, PossibleKeys } from "@/lib/types/global.types";
import { Trash } from "lucide-react";
import { useState } from "react";
const OPTIONS = [
  { label: "nextjs", value: "Nextjs" },
  { label: "React", value: "react" },
  { label: "Remix", value: "remix" },
  { label: "Vite", value: "vite" },
  { label: "Nuxt", value: "nuxt" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Angular", value: "angular" },
  { label: "Ember", value: "ember", disable: true },
  { label: "Gatsby", value: "gatsby", disable: true },
  { label: "Astro", value: "astro" },
];
const Filters = ({
  fields,
  viewOnly,
}: {
  fields: Field[];
  viewOnly?: boolean;
}) => {
  const [logicOperator, setLogicOperator] = useState("AND");
  const initialOptions = { fieldId: "", operator: "", value: "" };
  const [conditions, setConditions] = useState([initialOptions]);

  const handleRemoveCondition = (index: number) => {
    const remainingConds = [...conditions];
    remainingConds.splice(index, 1);
    setConditions(remainingConds);
  };
  const handleLogicOperatorChange = (value: string) => {
    setLogicOperator(value);
  };

  const handleAddMore = () =>
    setConditions((prev) => [...prev, initialOptions]);

  const handleFieldChange = (index: number, value: string) => {
    setConditions((prevConditions) => {
      const updatedConditions = [...prevConditions];
      updatedConditions[index] = {
        ...updatedConditions[index],
        fieldId: value,
        value: fields.find((el) => el.key === value)?.value ?? "",
      };
      return updatedConditions;
    });
  };

  const handleOperatorChange = (index: number, value: string) => {
    setConditions((prevConditions) => {
      const updatedConditions = [...prevConditions];
      updatedConditions[index] = {
        ...updatedConditions[index],
        operator: value,
      };
      return updatedConditions;
    });
  };
  return (
    <div className="p-6 bg-accent rounded-lg space-y-8 md:space-y-4">
      {conditions.map(({ fieldId, operator, value }, idx) => {
        const field = fields.find((el) => el.key === fieldId);
        const fieldType = field?.type as PossibleKeys;
        const operators = fieldType ? Operator[fieldType] : [];
        const selectedOperator = operators.find((el) => el.key === operator);
        console.log({ selectedOperator });
        return (
          <section key={idx} className="grid grid-cols-12 gap-3">
            <div className="col-span-1">
              {idx === 0 ? (
                <Input disabled placeholder="Where"></Input>
              ) : idx === 1 ? (
                <Select
                  onValueChange={(key) => {
                    handleLogicOperatorChange(key);
                  }}
                  value={logicOperator}
                >
                  <SelectTrigger
                  //  className="w-[84px]"
                  >
                    <SelectValue placeholder="Select Field" />
                  </SelectTrigger>
                  <SelectContent>
                    {Operation.map((operation) => (
                      <SelectItem key={operation.key} value={operation.value}>
                        {operation.value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Input defaultValue={logicOperator} disabled></Input>
              )}
            </div>
            {/* Select for fields */}
            <div className="col-span-2">
              <Select
                onValueChange={(v) => {
                  const key = fields.find((range) => range.value === v)?.key;
                  if (!key) return;
                  handleFieldChange(idx, key);
                }}
                value={value}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Field" />
                </SelectTrigger>
                <SelectContent>
                  {fields.map((field) => (
                    <SelectItem key={field.key} value={field.value}>
                      {field.value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-2">
              <Select
                onValueChange={(v) => {
                  const key = operators.find((range) => range.value === v)?.key;
                  if (!key) return;
                  handleOperatorChange(idx, key);
                }}
                value={operator}
              >
                <SelectTrigger
                // className="w-[235px]"
                >
                  <SelectValue placeholder="Select Condition" />
                </SelectTrigger>
                <SelectContent>
                  {operators.map((field) => (
                    <SelectItem key={field.key} value={field.value}>
                      {field.value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-6">
              {selectedOperator &&
              selectedOperator.value !== "Is Empty" &&
              selectedOperator.value !== "Is Not Empty" ? (
                <MultipleSelector
                  defaultOptions={OPTIONS}
                  placeholder="Type here..."
                  creatable
                  emptyIndicator={<p className="">Type to create values.</p>}
                />
              ) : null}
            </div>
            <div className="col-span-1">
              {idx > 0 && (
                <Button size={"icon-sm"} variant={"destructive-outline"}>
                  <Trash
                    size={18}
                    strokeWidth={1.5}
                    onClick={() => handleRemoveCondition(idx)}
                  ></Trash>
                </Button>
              )}
            </div>
          </section>
        );
      })}
      {!viewOnly && (
        <Button size={"sm"} onClick={handleAddMore}>
          Add more
        </Button>
      )}
    </div>
  );
};

export default Filters;
