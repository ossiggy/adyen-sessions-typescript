import { useRef, useEffect } from "react";
import { compareFormData } from "../helpers";
import { FormDataProps } from "../types";

export const useMemoCompare = (next: FormDataProps) => {
  const previousRef = useRef<any>();
  const previous = previousRef.current;

  const isEqual = compareFormData(previous, next);

  useEffect(() => {
    if (!isEqual) {
      previousRef.current = next;
    }
  });

  return isEqual ? previous : next;
};
