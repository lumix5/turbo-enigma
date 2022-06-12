import { MouseEventHandler, useEffect, useState } from "react";
import { useRouterRefresh } from "../pages/operators";
import { Rating } from "@mui/material";
import { useLocalStorage } from "@mantine/hooks";
import { prisma } from "../db";
import axios from "axios";
import {useTheme} from "next-themes";
import StarIcon from '@mui/icons-material/Star';

const StarRating = ({ ratedEntity }: any) => {
  const { theme, setTheme } = useTheme()


  let [value, setValue] = useLocalStorage({
    key: ratedEntity.id,
    defaultValue: 0,
  });

  let userid = localStorage.getItem("clientId");
  let refresh = useRouterRefresh();

  return (
    <div className="flex justify-center">
      <Rating
        name="half-rating"
        value={value}
        precision={0.5}
        emptyIcon={<StarIcon style={{  color: theme === 'dark' ? 'white' : ''}} fontSize="inherit" />}
        onChange={async (event: any, newValue: number) => {
          setValue(newValue);
          await axios.post(`/api/operatorVote`, null, { params: {
              operatorId: ratedEntity.id,
              rating: newValue,
              userId: userid,
            }})
          refresh();
        }}
      />
    </div>
  );
};



export default StarRating;
