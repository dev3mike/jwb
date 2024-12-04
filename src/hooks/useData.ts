import { useMemo } from "react";
import { data } from "../aggregated-data";

export function useData() {
  return useMemo(() => data, []);
}
