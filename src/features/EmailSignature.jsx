import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";

import Infos from "./components/Infos";
import Preview from "./components/Preview";
import { useStyles } from "./styles";

const EmailSignature = () => {
  const classes = useStyles();
  const [user, setUser] = useState([]);

  return (
    <>
      <Grid className={classes.container} container spacing={0}>
        <Grid item xs={4}>
          <Box className={classes.boxLeft}>
            <Infos setUser={setUser} />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box className={classes.boxRight}>
            <Preview user={user} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default EmailSignature;
