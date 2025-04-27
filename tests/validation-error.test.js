import Joi from "joi";

describe("Joi", function () {
  it("should return validation error", function () {
    const usernameSchema = Joi.string().min(5).email().required();

    const result = usernameSchema.validate("ups", { abortEarly: false });
    console.info(result);

    if (result.error) {
      result.error.details.forEach((detail) => {
        console.info(`${detail.path} = ${detail.message}`);
      });
    }
  });
});

// details - an array of errors.
// message - string with a description of the error.
// path - ordered array where each element is the accessor to the value where the error happened.

// secara default, JOI akan berhenti di validasi pertama, ketika ada dua error validasi

// abortEarly - when true, stops validation on the first error, otherwise returns all the errors found. Defaults to true.
