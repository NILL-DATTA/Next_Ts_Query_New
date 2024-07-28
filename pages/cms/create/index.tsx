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
import { useUserCreateMutation } from "@/CusToomHooks/cms.query.hooks";
interface IFormInput {
  title: string;
  description: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const { mutate } = useUserCreateMutation();

  const onSubmit = (formData: { title: string; description: string }) => {
    const formdata = new FormData();
    formdata.append("title", formData.title);
    formdata.append("description", formData.description);
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
                {...register("title", {
                  required: "Title is required",
                })}
                label="title"
                type="title"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.title}
                helperText={errors.title && errors.title.message}
              />
              <TextField
                {...register("description", {
                  required: "Description is required",
                })}
                label="description"
                type="description"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.description}
                helperText={errors.description && errors.description.message}
              />
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
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
