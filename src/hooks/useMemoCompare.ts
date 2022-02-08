import { useRef, useEffect } from "react";

export const useMemoCompare = (next: any, compare: (prev: any, next: any) => any) => {
  const previousRef = useRef<any>();
  const previous = previousRef.current;

  const isEqual = compare(previous, next);

  console.log('isEqual', isEqual);

  useEffect(() => {
    if (!isEqual) {
      previousRef.current = next;
    }
  });

  return isEqual ? previous : next;
};
