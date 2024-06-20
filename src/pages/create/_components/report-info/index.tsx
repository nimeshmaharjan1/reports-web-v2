import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Field, Item } from "@/lib/types/global.types";
import { useGlobalStore } from "@/store/global.store";
import { useState } from "react";

const ReportInfo = ({ items }: { items: Item[] }) => {
  const { selected: selectedReport } = useGlobalStore();
  const [selectedDateRange, setSelectedDateRange] = useState<Field | undefined>(
    undefined
  );

  const handleDateRangeChange = (selectedOptionKey: string) => {
    const selectedField = dateRangeValues.find(
      (option) => option.key === selectedOptionKey
    );

    if (selectedField) {
      setSelectedDateRange(selectedField);
    }
  };
  const getDateRangeFilters = (): { key: string; value: string }[] => {
    const report = items[selectedReport];
    if (report) {
      const dateRangeFilter = report.filters.find(
        (filter) => filter.type === "date_range"
      );
      const existingValues = dateRangeFilter ? dateRangeFilter.values : [];

      const additionalValues = [
        { key: "month_to_date", value: "Month To Date" },
        { key: "previous_calendar_month", value: "Previous Calendar Month" },
        { key: "year_to_date", value: "Year To Date" },
        { key: "custom_range", value: "Custom Range" },
      ];
      if (existingValues && existingValues.length > 0) {
        return [...existingValues, ...additionalValues];
      } else {
        return additionalValues;
      }
    }
    return [];
  };

  const dateRangeValues = getDateRangeFilters();

  return (
    <section className="grid grid-cols-6 gap-4">
      <div className="col-span-6 lg:col-span-3 space-y-2">
        <Label>Report Name *</Label>
        <Input placeholder="Enter Report Name"></Input>
      </div>
      <div className="col-span-6 lg:col-span-3 space-y-2">
        <Label>For Office/Location</Label>
        <span className="text-xs ml-1 text-primary">
          (All Office/Location are selected by default)
        </span>
        <Input placeholder="Search for specific office location to include"></Input>{" "}
      </div>
      <div className="col-span-6 lg:col-span-3 space-y-2">
        <Label>Select Date Range *</Label>
        <Select
          defaultValue={dateRangeValues?.[0]?.value}
          onValueChange={(v) => {
            const key = dateRangeValues.find((range) => range.value === v)?.key;
            if (!key) return;
            handleDateRangeChange(key);
          }}
          value={selectedDateRange?.value}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {dateRangeValues.map((date) => (
              <SelectItem key={date.key} value={date.value}>
                {date.value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {selectedDateRange?.key === "custom_range" && (
          <div className="flex flex-col md:flex-row gap-4 !mt-6">
            <div className="flex flex-col gap-2 md:w-1/2">
              <Label>Start Date</Label>
              <Input type="date" max={new Date().toISOString().split("T")[0]} />
            </div>
            <div className="flex flex-col gap-2 md:w-1/2">
              <Label>End Date</Label>
              <Input type="date" max={new Date().toISOString().split("T")[0]} />
            </div>
          </div>
        )}
      </div>
      <div className="col-span-6 lg:col-span-3 space-y-2">
        <Label>Select Suppliers to include</Label>{" "}
        <span className="text-xs text-primary">
          (All Suppliers are selected by default)
        </span>
        <Input placeholder="Search for specific office location to include"></Input>
      </div>
      <div className="col-span-6 mt-2 flex lg:items-center gap-6 flex-col lg:flex-row">
        <div className="flex items-center space-x-2">
          <Checkbox id="orders" />
          <label
            htmlFor="orders"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Include Service/Equipment Orders
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="items" />
          <label
            htmlFor="items"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Include Off-catalog items only
          </label>
        </div>
      </div>
    </section>
  );
};
export default ReportInfo;
