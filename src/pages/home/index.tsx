import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const HomePage = () => {
  return (
    <section className="container pt-4">
      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search by Report Name"
          autoFocus
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
      <div className="table-section mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead className="hidden sm:table-cell">Type</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="font-medium">{row.name}</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {row.email}
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {row.type}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="secondary">
                    {row.status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {row.date}
                </TableCell>
                <TableCell className="text-right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default HomePage;

const tableData = [
  {
    name: "Liam Johnson",
    email: "liam@example.com",
    type: "Sale",
    status: "Fulfilled",
    date: "2023-06-23",
    amount: "$250.00",
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    type: "Purchase",
    status: "Pending",
    date: "2023-06-24",
    amount: "$300.00",
  },
  {
    name: "Olivia Smith",
    email: "olivia@example.com",
    type: "Refund",
    status: "Declined",
    date: "2023-06-25",
    amount: "$100.00",
  },
  {
    name: "Noah Brown",
    email: "noah@example.com",
    type: "Sale",
    status: "Fulfilled",
    date: "2023-06-26",
    amount: "$400.00",
  },
  {
    name: "Ava Davis",
    email: "ava@example.com",
    type: "Purchase",
    status: "Pending",
    date: "2023-06-27",
    amount: "$150.00",
  },
];
