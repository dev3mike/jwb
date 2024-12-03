import { useMemo } from "react";
import { data } from "../aggregated_data";

export function useData() {
  return useMemo(() => data, []);
}
