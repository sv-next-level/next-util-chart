// @ts-ignore
import * as z from "zod";
import { CHART_TIME_FORMAT } from "../../time/format";

export const AddTimeSchema = z.object({
  star: z.boolean({
    required_error: "star is required",
    invalid_type_error: "star must be a boolean",
  }),
  number: z
    .number({
      required_error: "number is required",
      invalid_type_error: "number must be a number",
    })
    .positive({
      message: "number must be a positive number",
    })
    .gte(1, {
      message: "number must be greater than or equal to 1",
    })
    .lte(1000, {
      message: "number must be less than or equal to 1000",
    }),
  format: z.nativeEnum(CHART_TIME_FORMAT),
});
