import { Grid, Progress, Radio } from "@nextui-org/react";
import { useEffect, useState } from "react";

function FiveDotRating({ rating }) {
  return (
    <Grid>
      <Progress  squared color="warning" value={rating} max={5} />
    </Grid>
  );
}

export default FiveDotRating;
