import { ChangeEvent } from "react";

export type InputProps<T> = {
  label?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<T>) => void;
  value?: string;
};
