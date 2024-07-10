import {
  AreaChartIcon,
  CandlestickChartIcon,
  IconProps,
  LineChartIcon,
  // @ts-ignore
} from "@/nextjs/assets";
import { SERIES } from "../series";
import { CHART_STYLE_NAME } from "./name";

export interface ChartStyle {
  name: CHART_STYLE_NAME;
  series: SERIES;
  star: boolean;
  // @ts-ignore
  icon: (props: IconProps) => JSX.Element;
}

export const INITIAL_CHART_STYLE_LIST: ChartStyle[] = [
  {
    name: CHART_STYLE_NAME.AREA,
    series: SERIES.AREA,
    star: false,
    icon: AreaChartIcon,
  },
  {
    name: CHART_STYLE_NAME.CANDLES,
    series: SERIES.CANDLESTICK,
    star: true,
    icon: CandlestickChartIcon,
  },
  {
    name: CHART_STYLE_NAME.LINE,
    series: SERIES.LINE,
    star: false,
    icon: LineChartIcon,
  },
];
