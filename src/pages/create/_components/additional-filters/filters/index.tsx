import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

const Filters = ({
  fields,
  viewOnly,
}: {
  fields: Field[];
  viewOnly?: boolean;
}) => {
  const [selectedField, setSelectedField] = useState<Field | undefined>();
  const [logicOperator, setLogicOperator] = useState("AND");
  const [selectedOperation, setSelectedOperation] = useState<
    Field | undefined
  >();

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

        return (
          <section key={idx} className="grid grid-cols-1 lg:grid-cols-5 gap-3">
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
            {/* Select for fields */}
            <Select
              onValueChange={(v) => {
                const key = fields.find((range) => range.value === v)?.key;
                if (!key) return;
                handleFieldChange(idx, key);
              }}
              value={value}
            >
              <SelectTrigger

              // className="w-[235px]"
              >
                <SelectValue placeholder="Select Field" />
              </SelectTrigger>
              <SelectContent>
                {fields.map((field) => (
                  <SelectItem key={field.key} value={field.value}>
                    {field.value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>{" "}
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
            {selectedOperator &&
            selectedOperator.value !== "Is Empty" &&
            selectedOperator.value !== "Is Not Empty" ? (
              <Input placeholder="Enter value"></Input>
            ) : null}
            {idx > 0 && (
              <Button size={"icon-sm"} variant={"destructive-outline"}>
                <Trash
                  size={18}
                  strokeWidth={1.5}
                  onClick={() => handleRemoveCondition(idx)}
                ></Trash>
              </Button>
            )}
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
