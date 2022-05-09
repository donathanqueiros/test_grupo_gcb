import { CPFValidator, DateValidator } from "../../shared/validations";

export const validationsRegisterForm = ({
  isZipCodeValid,
}: {
  isZipCodeValid: boolean;
}) => ({
  name: {
    required: {
      value: true,
      message: "Name is required",
    },
  },
  birthDate: {
    required: {
      value: true,
      message: "Birth date is required",
    },
    custom: {
      isValid: DateValidator,
      message: "Birth date is invalid",
    },
  },
  cpf: {
    required: {
      value: true,
      message: "CPF is required",
    },
    custom: {
      isValid: (value: string) => CPFValidator(value),
      message: "CPF is invalid",
    },
  },
  street: {
    required: {
      value: true,
      message: "Street is required",
    },
  },
  number: {
    required: {
      value: true,
      message: "Number is required",
    },
  },
  zipCode: {
    required: {
      value: true,
      message: "Zip code is required",
    },
    custom: {
      isValid: () => isZipCodeValid,
      message: "Zip code is invalid",
    },
  },
  neighborhood: {
    required: {
      value: true,
      message: "Neighborhood is required",
    },
  },
  city: {
    required: {
      value: true,
      message: "City is required",
    },
  },
  state: {
    required: {
      value: true,
      message: "State is required",
    },
  },
});
