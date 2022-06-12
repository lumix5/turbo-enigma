import { Grid, Progress, Radio } from "@nextui-org/react";
import { useEffect, useState } from "react";

function ThreeDotRating({ rating, isHealth = false }) {

  return (
      <Grid>
        <Progress squared color={isHealth ? 'error' : 'primary'} value={rating} max={3} />
      </Grid>
  );
}

export default ThreeDotRating;
