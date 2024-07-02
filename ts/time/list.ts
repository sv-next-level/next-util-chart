import { CHART_TIME_FORMAT } from "./format";

export interface ChartTime {
  time: number;
  star: boolean;
  format: CHART_TIME_FORMAT;
}

export interface ChartTimeFormat extends ChartTime {
  label: string;
  short: string;
}

export const INITIAL_CHART_TIME_LIST: ChartTime[] = [
  {
    time: 5,
    star: false,
    format: CHART_TIME_FORMAT.SECONDS,
  },
  {
    time: 10,
    star: true,
    format: CHART_TIME_FORMAT.SECONDS,
  },
  {
    time: 15,
    star: false,
    format: CHART_TIME_FORMAT.SECONDS,
  },
  {
    time: 30,
    star: false,
    format: CHART_TIME_FORMAT.SECONDS,
  },
  {
    time: 1,
    star: false,
    format: CHART_TIME_FORMAT.MINUTES,
  },
  {
    time: 3,
    star: false,
    format: CHART_TIME_FORMAT.MINUTES,
  },
  {
    time: 5,
    star: true,
    format: CHART_TIME_FORMAT.MINUTES,
  },
  {
    time: 10,
    star: false,
    format: CHART_TIME_FORMAT.MINUTES,
  },
  {
    time: 15,
    star: false,
    format: CHART_TIME_FORMAT.MINUTES,
  },
  {
    time: 45,
    star: true,
    format: CHART_TIME_FORMAT.MINUTES,
  },
  {
    time: 1,
    star: false,
    format: CHART_TIME_FORMAT.HOURS,
  },
  {
    time: 2,
    star: false,
    format: CHART_TIME_FORMAT.HOURS,
  },
  {
    time: 3,
    star: false,
    format: CHART_TIME_FORMAT.HOURS,
  },
  {
    time: 1,
    star: true,
    format: CHART_TIME_FORMAT.DAYS,
  },
  {
    time: 3,
    star: false,
    format: CHART_TIME_FORMAT.DAYS,
  },
  {
    time: 5,
    star: false,
    format: CHART_TIME_FORMAT.DAYS,
  },
  {
    time: 1,
    star: true,
    format: CHART_TIME_FORMAT.WEEKS,
  },
  {
    time: 2,
    star: false,
    format: CHART_TIME_FORMAT.WEEKS,
  },
  {
    time: 3,
    star: false,
    format: CHART_TIME_FORMAT.WEEKS,
  },
  {
    time: 1,
    star: true,
    format: CHART_TIME_FORMAT.MONTHS,
  },
  {
    time: 3,
    star: false,
    format: CHART_TIME_FORMAT.MONTHS,
  },
  {
    time: 6,
    star: false,
    format: CHART_TIME_FORMAT.MONTHS,
  },
];

export const chartTimeFormat = ({
  time,
  star,
  format,
}: ChartTime): ChartTimeFormat => {
  let short: string = "";
  switch (format) {
    case CHART_TIME_FORMAT.SECONDS:
      short = `${time}s`;
      break;
    case CHART_TIME_FORMAT.MINUTES:
      short = `${time}m`;
      break;
    case CHART_TIME_FORMAT.HOURS:
      short = `${time}h`;
      break;
    case CHART_TIME_FORMAT.DAYS:
      short = `${time}D`;
      break;
    case CHART_TIME_FORMAT.WEEKS:
      short = `${time}W`;
      break;
    case CHART_TIME_FORMAT.MONTHS:
      short = `${time}M`;
      break;
  }

  return {
    star: star,
    time: time,
    short: short,
    format: format,
    label: `${time} ${format
      .substring(0, format.length - (time === 1 ? 1 : 0))
      .toLocaleLowerCase()}`,
  };
};
