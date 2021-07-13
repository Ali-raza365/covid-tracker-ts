import React, { useEffect, useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import CountUp from "react-countup";

import Typography from "@material-ui/core/Typography";
import logo from "../images/corona-virus.png";
import {CountryData, DailyData} from '../Types/types'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: 335,
      maxWidth: 1200,
      margin: "0 auto",
    },
    card: {
      minWidth: 275,
      borderBottom: "4 solid gray",
      textAlign: "left",
    },
    title: {
      padding: 0,
      fontWeight: "bold",
      fontSize: 20,
    },
    num: {
      fontSize: 18,
      marginBottom: 12,
    },
    date: {
      fontSize: 18,
      marginBottom: 12,
    },
  }),
);
interface AppProps {
  AllStatedata: CountryData | undefined
}

const  Cards:React.FC<AppProps> = ({ AllStatedata}) => {
  const classes = useStyles();
  if (!AllStatedata) {
    return null;
  }
  return (
    <>
      <div>
        <div className="imgContainer">
          <img src={logo} />
        </div>
        <Grid className={classes.root} container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card
              elevation={3}
              className={classes.card}
              style={{ borderBottom: "7px solid #f7a440" }}
            >
              <CardContent>
                <Typography
                  className={classes.title}
                  gutterBottom
                  component="h2"
                >
                  Infacted
                </Typography>
                <Typography className={classes.num}>
                  <CountUp
                    start={0}
                    end={AllStatedata.confirmed}
                    // end={543453}
                    duration={2}
                    separator=" "
                  />
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.date}
                  gutterBottom
                >
                  {new Date(AllStatedata.lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  Numbers of active cases of COVID-19
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              elevation={3}
              className={classes.card}
              style={{ borderBottom: "7px solid  #4aa96c" }}
            >
              <CardContent>
                <Typography
                  className={classes.title}
                  gutterBottom
                  component="h2"
                >
                  Recovered
                </Typography>
                <Typography className={classes.num}>
                  <CountUp
                    start={0}
                    // end={6546}
                    end={AllStatedata.recovered}
                    duration={2}
                  />
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.date}
                  gutterBottom
                >
                  {new Date(AllStatedata.lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  Numbers of Recoveries from COVID-19
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              elevation={3}
              className={classes.card}
              style={{ borderBottom: "7px solid #fa1e0e" }}
            >
              <CardContent>
                <Typography
                  className={classes.title}
                  gutterBottom
                  component="h2"
                >
                  Deaths
                </Typography>
                <Typography className={classes.num}>
                  <CountUp
                    start={0}
                    end={AllStatedata.deaths}
                    duration={2}
                    separator=" "
                  />
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.date}
                  gutterBottom
                >
                  {new Date(AllStatedata.lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  Numbers of deaths caused by COVID-19
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Cards;
