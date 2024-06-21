import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const EmailField = () => {
  return (
    <section className="email-field space-y-3">
      <Label>A link to download the report will be mailed to</Label>
      <div className="bg-accent p-4 rounded-xl w-1/2">
        <Input type="email" placeholder="Email"></Input>
      </div>
    </section>
  );
};

export default EmailField;
