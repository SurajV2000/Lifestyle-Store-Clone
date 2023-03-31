import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getmens } from "../redux/MenReducer/action";
import { Box, Flex, Grid, Spinner } from "@chakra-ui/react";
import Card from "../Components/Card";
import Menfilter from "../Components/Filter/Menfilter";
import Pagination1 from "../Components/Filter/Pagination1";

export const Men = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const { men, isLoading, isError, total } = useSelector((store) => {
    return store.MenReducer;
  });

  let Obj = {
    params: {
      category: searchParams.getAll("category"),
      _page: searchParams.get("page"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getmens(Obj));
    console.log(total);
  }, [location.search]);

  return (
    <div>
      <Menfilter type={"men"} />
      {isLoading ? (
        <Box
          textAlign={"center"}
          width={"100%"}
          height={"400px"}
          paddingTop="150px"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      ) : isError ? (
        "Something went wrong"
      ) : (
        <Grid
          width={"80%"}
          margin={"auto"}
          justifyContent="space-between"
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
          }}
          columnGap="20px"
        >
          {men.length > 0 &&
            men.map((el) => {
              return <Card key={el.id} {...el} id={el.id} type={"men"} />;
            })}
        </Grid>
      )}
      <Pagination1 />
    </div>
  );
};
