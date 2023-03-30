import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getmens } from "../redux/MenReducer/action";
import { Box, Flex, Grid } from "@chakra-ui/react";
import Card from "../Components/Card";
import Menfilter from "../Components/Filter/Menfilter";
import Pagination1 from "../Components/Filter/Pagination1";

export const Men = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const men = useSelector((store) => {
    return store.MenReducer.men;
  });

  let Obj = {
    params: {
      category: searchParams.getAll("category"),
      _page: searchParams.get("page"),
    },
  };

  useEffect(() => {
    dispatch(getmens(Obj));
    console.log(men);
  }, [location.search]);

  return (
    <div>
      <Menfilter />
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

        gap="20px"
      >
        {men.length > 0 &&
          men.map((el) => {
            return <Card key={el.id} {...el} />;
          })}
      </Grid>
      <Pagination1 />
    </div>
  );
};
