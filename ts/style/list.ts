import {
  AreaChartIcon,
  BarChartIcon,
  BaselineChartIcon,
  CandlestickChartIcon,
  HistogramChartIcon,
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
    star: true,
    icon: AreaChartIcon,
  },
  {
    name: CHART_STYLE_NAME.BAR,
    series: SERIES.BAR,
    star: false,
    icon: BarChartIcon,
  },
  {
    name: CHART_STYLE_NAME.BASELINE,
    series: SERIES.BASELINE,
    star: false,
    icon: BaselineChartIcon,
  },
  {
    name: CHART_STYLE_NAME.CANDLES,
    series: SERIES.CANDLESTICK,
    star: true,
    icon: CandlestickChartIcon,
  },
  {
    name: CHART_STYLE_NAME.HISTOGRAM,
    series: SERIES.HISTOGRAM,
    star: false,
    icon: HistogramChartIcon,
  },
  {
    name: CHART_STYLE_NAME.LINE,
    series: SERIES.LINE,
    star: false,
    icon: LineChartIcon,
  },
];
