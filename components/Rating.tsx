import { MouseEventHandler, useEffect, useState } from "react";
import { useRouterRefresh } from "../pages/operators";
import { Rating } from "@mui/material";
import {useLocalStorage, useMediaQuery} from "@mantine/hooks";
import { prisma } from "../db";
import axios from "axios";
import {useTheme} from "next-themes";
import StarIcon from '@mui/icons-material/Star';
import {Loading} from "@nextui-org/react";

const StarRating = ({ ratedEntity }: any) => {
  const { theme, setTheme } = useTheme()
  const [isLoading, setIsLoading] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 900px)", false);

  let [value, setValue] = useLocalStorage({
    key: ratedEntity.id,
    defaultValue: 0,
  });

  let userid = localStorage.getItem("clientId");
  let refresh = useRouterRefresh();

  return (
    <div className="flex justify-center relative items-center">
      <Rating
        name="half-rating"
        value={value}
        precision={0.5}
        emptyIcon={<StarIcon style={{  color: theme === 'dark' ? 'white' : ''}} fontSize="inherit" />}
        onChange={async (event: any, newValue: number) => {
          setIsLoading(true);
          setValue(newValue === null ? value : newValue)

          await axios.post(`/api/operatorVote`, null, { params: {
              operatorId: ratedEntity.id,
              rating: newValue === null ? value : newValue,
              userId: userid,
            }})
          refresh();
          setIsLoading(false);
        }}
      />
    {isLoading && isDesktop && <Loading css={{right: 0, position: "absolute"}}/>}
      {isLoading && !isDesktop && <Loading size="xs"/>}
    </div>
  );
};



export default StarRating;
