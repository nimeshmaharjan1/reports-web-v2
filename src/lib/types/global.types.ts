export interface Data {
  userSession: boolean;
  items: Item[];
}

export type PossibleKeys = "number" | "text" | "date" | "select";

export type Operators = {
  [key in PossibleKeys]: KeyValue[];
};

export interface KeyValue {
  key: string;
  value: string;
}

export interface Field extends KeyValue {
  type?: string;
  required?: boolean;
  unselected?: boolean;
}

export interface Filter {
  type: string;
  values?: KeyValue[];
  default?: number;
}

export interface Item {
  title: string;
  desc: string;
  reportView: string;
  fields: Field[];
  filters: Filter[];
}
