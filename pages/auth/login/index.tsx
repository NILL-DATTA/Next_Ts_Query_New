import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useUserSignInMutation } from "../../../CusToomHooks/auth.query.hooks";

interface IFormInput {
  email: string;
  password: string;
}

interface ILoginProps {
  val: string;
}

const Login: React.FC<ILoginProps> = ({ val }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const { mutate, isPending } = useUserSignInMutation();

  const onSubmit = (formData: { email: string; password: string }) => {
    const formdata = new FormData();
    formdata.append("email", formData.email);
    formdata.append("password", formData.password);
    mutate(formdata);
  };

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
