import { CHART_INDICATOR_NAME } from "./name";

export interface ChartIndicator {
  name: CHART_INDICATOR_NAME;
  star: boolean;
}

export const INITIAL_CHART_INDICATOR_LIST: ChartIndicator[] = [
  {
    name: CHART_INDICATOR_NAME.MA,
    star: false,
  },
];
