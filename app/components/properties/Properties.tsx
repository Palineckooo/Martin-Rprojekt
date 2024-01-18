/*"use client";
import React from "react";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import PropertyCard from "../PropertyCard";

const Properties = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(10);

  const properties = [
    { name: "new york" },
    { name: "miami" },
    { name: "chicago" },
    { name: "new york" },
    { name: "miami" },
    { name: "chicago" },
    { name: "new york" },
    { name: "miami" },
    { name: "chicago" },
    { name: "new york" },
    { name: "miami" },
    { name: "chicago" },
    { name: "miami" },
    { name: "chicago" },
    { name: "new york" },
    { name: "miami" },
    { name: "chicago" },
    { name: "new york" },
    { name: "miami" },
    { name: "chicago" },
    { name: "new york" },
    { name: "miami" },
    { name: "chicago" },
    { name: "miami" },
    { name: "chicago" },
    { name: "new york" },
    { name: "miami" },
    { name: "chicago" },
    { name: "new york" },
    { name: "miami" },
    { name: "chicago" },
    { name: "new york" },
    { name: "miami" },
    { name: "chicago" },
    { name: "miami" },
    { name: "chicago" },
    { name: "new york" },
    { name: "miami" },
    { name: "chicago" },
    { name: "new york" },
    { name: "miami" },
    { name: "chicago" },
    { name: "new york" },
    { name: "miami" },
    { name: "chicago" },
  ];

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = properties.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event: any, value: any) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Properties
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => (
          <PropertyCard key={idx} property={properties} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {properties.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(properties.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Properties;*/
