import { Container, Box, Typography, Button } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";
import api from "../../services/api";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { DatePicker } from "formik-material-ui-pickers";

const value = {
  user: {
    name: "",
    email: "",
    cpf: "",
    born_date: new Date(),
    phone_1: "",
    phone_2: "",
  },
  address: {
    cep: "",
    street: "",
    number: "",
    complement: "",
    district: "",
    uf: "",
    unity_number: "",
  },
};

type Values = typeof value;
export default function SignUp(): JSX.Element {
  const router = useRouter();
  const id = router.query.id;

  const handleSubmitValue = useCallback(
    (values: Values) => {
      api
        .post("/sign_up.json", {
          ...values,
          order: {
            plan_id: id,
          },
        })
        .then(() => {
          router.push("/final");
        });
    },
    [id, router]
  );
  return (
    <Container maxWidth="md">
      <Box
        mt={5}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Image src="/assets/logo.png" width={100} height={100} />
        <Box
          mt={3}
          mb={3}
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Typography variant="h6" color="primary">
            (Empreendimento) - (Planta)
          </Typography>
          <Typography>Finalizar</Typography>

          <Formik
            onSubmit={handleSubmitValue}
            initialValues={{
              user: {
                name: "",
                email: "",
                cpf: "",
                born_date: new Date(),
                phone_1: "",
                phone_2: "",
              },
              address: {
                cep: "",
                street: "",
                number: "",
                complement: "",
                district: "",
                uf: "",
                unity_number: "",
              },
            }}
          >
            {({ handleBlur, handleChange, values, submitForm, ...formik }) => (
              <Form>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <Field
                    style={{ marginTop: 20 }}
                    label="Nome Completo"
                    name="user.name"
                    component={TextField}
                    variant="outlined"
                  />
                  <Field
                    style={{ marginTop: 20 }}
                    label="E-mail"
                    name="user.email"
                    type="email"
                    component={TextField}
                    variant="outlined"
                  />
                  <Field
                    style={{ marginTop: 20 }}
                    label="CPF"
                    name="user.cpf"
                    component={TextField}
                    variant="outlined"
                  />
                  <Field
                    style={{ marginTop: 20 }}
                    name="user.born_date"
                    component={DatePicker}
                    inputVariant="outlined"
                    label="Data de Nascimento"
                  />
                  <Field
                    style={{ marginTop: 20 }}
                    label="Celular 1"
                    name="user.phone_1"
                    type="tel"
                    component={TextField}
                    variant="outlined"
                  />
                  <Field
                    style={{ marginTop: 20 }}
                    label="Celular 2"
                    name="user.phone_2"
                    component={TextField}
                    variant="outlined"
                    type="tel"
                  />
                  <Field
                    style={{ marginTop: 20 }}
                    label="CEP"
                    name="address.cep"
                    type="number"
                    component={TextField}
                    variant="outlined"
                  />
                  <Field
                    style={{ marginTop: 20 }}
                    label="Endereço"
                    name="address.street"
                    component={TextField}
                    variant="outlined"
                  />
                  <Field
                    style={{ marginTop: 20 }}
                    label="N°"
                    name="address.number"
                    type="number"
                    component={TextField}
                    variant="outlined"
                  />
                  <Field
                    style={{ marginTop: 20 }}
                    label="Complemento"
                    name="address.complement"
                    component={TextField}
                    variant="outlined"
                  />
                  <Field
                    style={{ marginTop: 20 }}
                    label="Bairro"
                    name="address.district"
                    component={TextField}
                    variant="outlined"
                  />
                  <Field
                    style={{ marginTop: 20 }}
                    label="UF"
                    name="address.uf"
                    component={TextField}
                    variant="outlined"
                  />
                  <Field
                    style={{ marginTop: 20 }}
                    label="N° da unidade"
                    name="address.unity_number"
                    component={TextField}
                    variant="outlined"
                  />
                  <Button
                    style={{ marginTop: 30 }}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Contratar
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Container>
  );
}
