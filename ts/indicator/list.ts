import { CHART_INDICATOR_NAME } from "./name";

export interface ChartIndicator {
  name: CHART_INDICATOR_NAME;
  star: boolean;
  options: any;
}

export const INITIAL_CHART_INDICATOR_LIST: ChartIndicator[] = [
  {
    name: CHART_INDICATOR_NAME.MA,
    star: false,
    options: {
      type: CHART_INDICATOR_NAME.MA,
      options: {
        title: "NEW",
        interval: 5,
        format: "close",
      },
    },
  },
];
