import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useUserSignUpMutation } from "../../../CusToomHooks/auth.query.hooks";
interface IFormInput {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const { mutate, isPending } = useUserSignUpMutation();

  const onSubmit = (formData: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
  }) => {
    const formdata = new FormData();
    formdata.append("first_name", formData.first_name);
    formdata.append("last_name", formData.last_name);
    formdata.append("email", formData.email);
    formdata.append("password", formData.password);
    mutate(formdata);
  };

  console.log(isPending, "isPending");
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom>
              Contact Form
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                {...register("first_name", {
                  required: "First name is required",
                })}
                label="First Name"
                type="text"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.first_name}
                helperText={errors.first_name?.message}
              />
              <TextField
                {...register("last_name", {
                  required: "last_name is required",
                })}
                label="last_name"
                type="last_name"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.last_name}
                helperText={errors.last_name?.message}
              />
              <TextField
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Invalid email format",
                  },
                })}
                label="Your Email"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email && errors.email.message}
              />
              <TextField
                {...register("password", {
                  required: "Password is required",
                })}
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password && errors.password.message}
              />

              {isPending ? (
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  sx={{ marginTop: 2 }}
                >
                  Loading...
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  sx={{ marginTop: 2 }}
                >
                  Button
                </Button>
              )}
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
