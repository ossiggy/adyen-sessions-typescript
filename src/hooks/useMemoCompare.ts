import { useRef, useEffect } from "react";
import { compareFormData } from "../helpers";

export const useMemoCompare = (next:any) => {

  const previousRef = useRef();
  const previous = previousRef.current;

  const isEqual = compareFormData(previous, next);

  useEffect(() => {
    if (!isEqual) {
      previousRef.current = next;
    }
  });

  return isEqual ? previous : next;
}