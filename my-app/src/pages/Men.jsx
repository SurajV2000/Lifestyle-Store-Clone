import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getmens } from "../redux/MenReducer/action";
import { Box, Flex } from "@chakra-ui/react";
import Card from "../Components/Card";

export const Men = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const men = useSelector((store) => {
    return store.MenReducer.men;
  });

  let Obj = {
    params: {
      batch: searchParams.getAll("batch"),
      _page: searchParams.get("page"),
    },
  };

  useEffect(() => {
    dispatch(getmens(Obj));
  }, [location.search]);

  return (
    <div>
      <Box
        width={"80%"}
        margin={"auto"}
        display="grid"
        justifyContent="space-between"
        gridTemplateColumns={"repeat(4,1fr)"}
        gap="15px"
      >
        {men.length > 0 &&
          men.map((el) => {
            return <Card key={el.id} {...el} />;
          })}
      </Box>
    </div>
  );
};
