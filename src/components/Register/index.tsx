import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { IUser } from "../../interfaces/User";
import zipCodeService from "../../services/zipCodeService";
import { setCookie } from "../../shared/cookies";
import Button from "../Button";
import Input, { InputBirthDate, InputCPF, InputZipCode } from "../Input";
import Title from "../Title";
import {
  About,
  Container,
  Form,
  Item,
  Row,
  AdressInfo,
  Header,
  ButtonWrapper,
} from "./styles";
import { validationsRegisterForm } from "./validations";

interface IUserForm {
  name: string;
  email: string;
  birthDate: string;
  cpf: string;
  street: string;
  number: string;
  complement: string;
  zipCode: string;
  neighborhood: string;
  city: string;
  state: string;
}

function Register({ onSubmit }: { onSubmit?: (user: IUser) => void }) {
  const [isZipCodeValid, setIsZipCodeValid] = useState(false);

  const onSubmitRegister = () => {
    const user: IUser = {
      name: data.name,
      birthDate: data.birthDate,
      cpf: data.cpf,
      address: {
        street: data.street,
        number: data.number,
        complement: data.complement,
        zipCode: data.zipCode,
        neighborhood: data.neighborhood,
        city: data.city,
        state: data.state,
      },
    };
    localStorage.setItem("user", JSON.stringify(user));
    setCookie("user", JSON.stringify(user), 30);

    onSubmit && onSubmit(user);
  };

  const onError = () => {
    alert("there are incorrect fields");
  };

  const { setData, handleSubmit, handleChange, data, errors } =
    useForm<IUserForm>({
      validations: validationsRegisterForm({ isZipCodeValid }),

      onSubmit: onSubmitRegister,

      onError: onError,
    });

  useEffect(() => {
    const zipCodeClear = data?.zipCode?.replace(/\D/g, "");
    if (zipCodeClear?.length === 8) {
      zipCodeService
        .getCep(zipCodeClear)
        .then((response) => {
          setData({
            ...data,
            street: response.data.logradouro,
            neighborhood: response.data.bairro,
            city: response.data.localidade,
            state: response.data.uf,
          });
          setIsZipCodeValid(true);
        })
        .catch(() => {
          setData({
            ...data,
            street: "",
            neighborhood: "",
            city: "",
            state: "",
          });
          setIsZipCodeValid(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.zipCode]);

  return (
    <Container>
      <Header>
        <Title>Register</Title>
      </Header>

      <Form onSubmit={handleSubmit}>
        <About size="sm">About you</About>
        <Row>
          <Item>
            <Title size={16}>Name</Title>
            <Input value={data.name || ""} onChange={handleChange("name")} />
            {errors.name && <p className="error">{errors.name}</p>}
          </Item>
        </Row>
        <Item>
          <Title size={16}>Birth date</Title>
          <InputBirthDate
            value={data.birthDate || ""}
            onChange={handleChange("birthDate")}
          />
          {errors.birthDate && <p className="error">{errors.birthDate}</p>}
        </Item>
        <Item>
          <Title size={16}>CPF</Title>
          <InputCPF value={data.cpf || ""} onChange={handleChange("cpf")} />
          {errors.cpf && <p className="error">{errors.cpf}</p>}
        </Item>

        <AdressInfo>
          <Title size="sm">Address</Title>
          <Item>
            <Title size={16}> zip code</Title>
            <InputZipCode
              value={data.zipCode || ""}
              onChange={handleChange("zipCode")}
            />
            {errors.zipCode && <p className="error">{errors.zipCode}</p>}
          </Item>
          <Item>
            <Title size={16}>Name of street/Avenue</Title>
            <Input
              value={data.street || ""}
              onChange={handleChange("street")}
            />
            {errors.street && <p className="error">{errors.street}</p>}
          </Item>
          <Item>
            <Title size={16}>Number</Title>
            <Input
              value={data.number || ""}
              onChange={handleChange("number")}
            />
            {errors.number && <p className="error">{errors.number}</p>}
          </Item>
          <Item>
            <Title size={16}>Complement</Title>
            <Input
              value={data.complement || ""}
              onChange={handleChange("complement")}
            />
            {errors.complement && <p className="error">{errors.complement}</p>}
          </Item>

          <Item>
            <Title size={16}>Neighborhood </Title>
            <Input
              value={data.neighborhood || ""}
              onChange={handleChange("neighborhood")}
            />
            {errors.neighborhood && (
              <p className="error">{errors.neighborhood}</p>
            )}
          </Item>

          <Item>
            <Title size={16}>City</Title>
            <Input value={data.city || ""} onChange={handleChange("city")} />
            {errors.city && <p className="error">{errors.city}</p>}
          </Item>

          <Item>
            <Title size={16}>state</Title>
            <Input value={data.state || ""} onChange={handleChange("state")} />
          </Item>
          {errors.state && <p className="error">{errors.state}</p>}
        </AdressInfo>

        <ButtonWrapper>
          <Button primary type="submit">
            Register
          </Button>
        </ButtonWrapper>
      </Form>
    </Container>
  );
}

export default Register;
