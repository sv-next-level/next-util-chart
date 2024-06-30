import { CHART_TIME_FORMAT } from "./format";

export const INITIAL_CHART_TIME_LIST = [
  {
    number: 5,
    star: false,
    format: CHART_TIME_FORMAT.SECONDS,
  },
  {
    number: 10,
    star: false,
    format: CHART_TIME_FORMAT.SECONDS,
  },
  {
    number: 15,
    star: false,
    format: CHART_TIME_FORMAT.SECONDS,
  },
  {
    number: 30,
    star: false,
    format: CHART_TIME_FORMAT.SECONDS,
  },
  {
    number: 1,
    star: false,
    format: CHART_TIME_FORMAT.MINUTES,
  },
  {
    number: 3,
    star: false,
    format: CHART_TIME_FORMAT.MINUTES,
  },
  {
    number: 5,
    star: false,
    format: CHART_TIME_FORMAT.MINUTES,
  },
  {
    number: 10,
    star: false,
    format: CHART_TIME_FORMAT.MINUTES,
  },
  {
    number: 15,
    star: false,
    format: CHART_TIME_FORMAT.MINUTES,
  },
  {
    number: 30,
    star: false,
    format: CHART_TIME_FORMAT.MINUTES,
  },
  {
    number: 45,
    star: false,
    format: CHART_TIME_FORMAT.MINUTES,
  },
  {
    number: 1,
    star: false,
    format: CHART_TIME_FORMAT.HOURS,
  },
  {
    number: 2,
    star: false,
    format: CHART_TIME_FORMAT.HOURS,
  },
  {
    number: 3,
    star: false,
    format: CHART_TIME_FORMAT.HOURS,
  },
  {
    number: 1,
    star: false,
    format: CHART_TIME_FORMAT.DAYS,
  },
  {
    number: 3,
    star: false,
    format: CHART_TIME_FORMAT.DAYS,
  },
  {
    number: 5,
    star: false,
    format: CHART_TIME_FORMAT.DAYS,
  },
  {
    number: 1,
    star: false,
    format: CHART_TIME_FORMAT.WEEKS,
  },
  {
    number: 2,
    star: false,
    format: CHART_TIME_FORMAT.WEEKS,
  },
  {
    number: 3,
    star: false,
    format: CHART_TIME_FORMAT.WEEKS,
  },
  {
    number: 1,
    star: true,
    format: CHART_TIME_FORMAT.MONTHS,
  },
  {
    number: 3,
    star: false,
    format: CHART_TIME_FORMAT.MONTHS,
  },
  {
    number: 6,
    star: false,
    format: CHART_TIME_FORMAT.MONTHS,
  },
];

export const format = (number: number, format: CHART_TIME_FORMAT) => {
  let short: string = "";
  switch (format) {
    case CHART_TIME_FORMAT.SECONDS:
      short = `${number}s`;
      break;
    case CHART_TIME_FORMAT.MINUTES:
      short = `${number}m`;
      break;
    case CHART_TIME_FORMAT.HOURS:
      short = `${number}h`;
      break;
    case CHART_TIME_FORMAT.DAYS:
      short = `${number}D`;
      break;
    case CHART_TIME_FORMAT.WEEKS:
      short = `${number}W`;
      break;
    case CHART_TIME_FORMAT.MONTHS:
      short = `${number}M`;
      break;
  }

  return {
    short: short,
    number: number,
    format: format,
    label: `${number} ${format
      .substring(0, format.length - (number === 1 ? 1 : 0))
      .toLocaleLowerCase()}`,
  };
};