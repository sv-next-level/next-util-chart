// @ts-ignore
import { z } from "zod";
import { CHART_TIME_FORMAT } from "../../time/format";

export const ChartAddTimeSchema = z.object({
  star: z.boolean({
    required_error: "star is required",
    invalid_type_error: "star must be a boolean",
  }),
  time: z
    .number({
      required_error: "time is required",
      invalid_type_error: "time must be a number",
    })
    .positive({
      message: "time must be a positive number",
    })
    .min(1, {
      message: "time must be greater than or equal to 1",
    })
    .max(1000, {
      message: "time must be less than or equal to 100",
    }),
  format: z.nativeEnum(CHART_TIME_FORMAT),
});
