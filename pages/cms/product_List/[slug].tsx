import {
  DetailsQuery,
  useCreateMutation,
} from "@/CusToomHooks/cms.query.hooks";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface DetailsProps {}

const Details: FC<DetailsProps> = () => {
  const router = useRouter();
  interface IFormInput {
    title: string;
    description: string;
  }
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>();
  const { slug } = router.query;
  const [img, setImg] = useState(null);
  const { data, error, isLoading, isError } = DetailsQuery(slug as string);
  const { mutate } = useCreateMutation();

  useEffect(() => {
    if (!isLoading && !isError && data) {
      setValue("title", data.title);
      setValue("description", data.description);
    }
  }, [data, setValue, isLoading, isError]);

  if (!slug) return null;
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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

export default Details;
