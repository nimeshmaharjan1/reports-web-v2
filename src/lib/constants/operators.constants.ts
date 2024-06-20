import type { KeyValue, Operators } from "../types/global.types";

export const Operator: Operators = {
  number: [
    {
      key: "=",
      value: "Equals To",
    },
    {
      key: "!=",
      value: "Not Equals To",
    },
    {
      key: "<",
      value: "Less Than",
    },
    {
      key: ">",
      value: "Greater Than",
    },
    {
      key: "<=",
      value: "Less Than Or Equals To",
    },
    {
      key: ">=",
      value: "Greater Than or Equals To",
    },
    {
      key: "Is Not Empty",
      value: "Is Not Empty",
    },
    {
      key: "Is Empty",
      value: "Is Empty",
    },
  ],
  text: [
    {
      key: "=",
      value: "Equals To",
    },
    {
      key: "!=",
      value: "Not Equals To",
    },
    {
      key: "Starts With",
      value: "Starts With",
    },
    {
      key: "Ends With",
      value: "Ends With",
    },
    {
      key: "Contains",
      value: "Contains",
    },
    {
      key: "Does Not Contain",
      value: "Does Not Contain",
    },
    {
      key: "Is Not Empty",
      value: "Is Not Empty",
    },
    {
      key: "Is Empty",
      value: "Is Empty",
    },
  ],
  date: [
    {
      key: "=",
      value: "Equals To",
    },
    {
      key: "!=",
      value: "Not Equals To",
    },
    {
      key: "<",
      value: "Is Before",
    },
    {
      key: ">",
      value: "Is After",
    },
  ],
  select: [
    {
      key: "=",
      value: "Equals To",
    },
    {
      key: "!=",
      value: "Not Equals To",
    },
    {
      key: "Is Not Empty",
      value: "Is Not Empty",
    },
    {
      key: "Is Empty",
      value: "Is Empty",
    },
    {
      key: "Starts With",
      value: "Starts With",
    },
    {
      key: "Ends With",
      value: "Ends With",
    },
    {
      key: "Contains",
      value: "Contains",
    },
    {
      key: "Does Not Contain",
      value: "Does Not Contain",
    },
  ],
};

export const Operation: KeyValue[] = [
  { key: "AND", value: "AND" },
  { key: "OR", value: "OR" },
];
