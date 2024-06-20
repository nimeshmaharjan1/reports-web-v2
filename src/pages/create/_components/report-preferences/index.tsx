import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { Field } from "@/lib/types/global.types";
import React, { useState } from "react";

const ReportPreferences = ({ viewOnly = false }: { viewOnly?: boolean }) => {
  const [uploadToSFTP, setUploadToSFTP] = useState(false);
  const [showPeriodicFields, setShowPeriodicFields] = useState(false);
  const [selectedFrequency, setSelectedFrequency] = useState({
    key: "daily",
    value: "Daily",
  });

  const [firstDeliveryDate, setFirstDeliveryDate] = useState<string>("");

  const handleFirstDeliveryDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstDeliveryDate(event.target.value);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    if (selectedValue === "periodically") {
      setShowPeriodicFields(true);
    } else {
      setShowPeriodicFields(false);
    }
  };

  const handleFrequencyChange = (selectedOption: string) => {
    const selectedField = reportingFrequencyOptions.find(
      (option) => option.key === selectedOption
    );

    if (selectedField) {
      setSelectedFrequency(selectedField);
    }
  };
  const reportingFrequencyOptions: Field[] = [
    { key: "daily", value: "Daily" },
    { key: "weekly", value: "Weekly" },
    { key: "biweekly", value: "Bi-weekly" },
    { key: "monthly", value: "Monthly" },
    { key: "quarterly", value: "Quarterly" },
    { key: "semiannually", value: "Semi-Annually" },
    { key: "annually", value: "Annually" },
  ];

  return (
    <section className="report-preferences space-y-3">
      <Label>When and how do you want your report?</Label>
      <RadioGroup defaultValue="comfortable" className="flex gap-3">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="asap" id="r1" />
          <Label htmlFor="r1">As soon as possible</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="periodically" id="r2" />
          <Label htmlFor="r2">Schedule to be delivered periodically</Label>
        </div>
      </RadioGroup>
    </section>
  );
};

export default ReportPreferences;
