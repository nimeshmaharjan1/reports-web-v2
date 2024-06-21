import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import type { Field } from "@/lib/types/global.types";
import { useState } from "react";

const ReportPreferences = ({ viewOnly = false }: { viewOnly?: boolean }) => {
  const [uploadToSFTP, setUploadToSFTP] = useState(false);
  const [showPeriodicFields, setShowPeriodicFields] = useState(false);
  const [selectedFrequency, setSelectedFrequency] = useState({
    key: "daily",
    value: "Daily",
  });

  const handleRadioChange = (selectedValue: string) => {
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
    <section className="report-preferences space-y-6">
      <div className="space-y-3">
        <Label>When and how do you want your report?</Label>
        <RadioGroup
          onValueChange={(v) => handleRadioChange(v)}
          defaultValue="asap"
          className="md:flex gap-3"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="asap" id="r1" />
            <Label htmlFor="r1">As soon as possible</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="periodically" id="r2" />
            <Label htmlFor="r2">Schedule to be delivered periodically</Label>
          </div>
        </RadioGroup>
      </div>
      {showPeriodicFields && (
        <>
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="space-y-3">
              <Label>Select Reporting Frequency</Label>
              <Select
                onValueChange={(key) => {
                  handleFrequencyChange(key);
                }}
                value={selectedFrequency.value}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {reportingFrequencyOptions.map((operation) => (
                    <SelectItem key={operation.key} value={operation.value}>
                      {operation.value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <Label>First Delivery Date</Label>
              <Input type="date"></Input>
            </div>
            <div className="space-y-3">
              <Label>Preferred Delivery Time</Label>
              <Input type="time"></Input>
            </div>
            <div className="flex items-center space-x-2 !mt-2">
              <Switch
                id="sftp"
                onCheckedChange={(v) => setUploadToSFTP(v)}
                checked={uploadToSFTP}
              />
              <Label htmlFor="sftp">Upload to SFTP</Label>
            </div>
          </section>
          {uploadToSFTP && (
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="space-y-3">
                <Label>SFTP Host</Label>
                <Input placeholder="Host"></Input>
              </div>
              <div className="space-y-3">
                <Label>SFTP Username</Label>
                <Input placeholder="Username"></Input>
              </div>
              <div className="space-y-3">
                <Label>SFTP Password</Label>
                <Input placeholder="Password" type="password"></Input>
              </div>
            </section>
          )}
        </>
      )}
    </section>
  );
};

export default ReportPreferences;
