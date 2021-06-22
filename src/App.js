import React, { useState, useEffect } from "react";
import {
  makeStyles,
  ThemeProvider,
  CssBaseline,
  Container,
  Grid,
  Paper,
  Typography,
  IconButton,
  Box,
  Link,
  Tooltip,
} from "@material-ui/core";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import { lightTheme, darkTheme } from "./themes/themes";
import UseLocalStorage from "./hooks/useLocalStorage";

const useStyles = makeStyles((theme) => ({
  vid: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: "50%",
    top: "50%",
    objectFit: "cover",
    transform: "translate(-50%,-50%)",
    zIndex: "-1",
  },
  header: {
    margin: theme.spacing(20),
  },
  cont: {
    marginTop: theme.spacing(90),
  },
}));

export default function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);
  const [mode, setMode] = UseLocalStorage("mode", "light");

  const handleThemeChange = (e) => {
    setDarkMode(!darkMode);
    if (mode === "light") setMode("dark");
    else setMode("light");
  };

  useEffect(() => {
    if (mode === "dark") setDarkMode(true);
  }, [mode]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme() : lightTheme()}>
      <CssBaseline>
        <video autoPlay loop muted key={darkMode} className={classes.vid}>
          <source
            src={
              darkMode
                ? "https://res.cloudinary.com/dd9hrrpch/video/upload/v1623466162/vids/moon_hcmtae.mp4"
                : "https://res.cloudinary.com/dd9hrrpch/video/upload/v1623725147/vids/beach_2_sh64vu.mp4"
            }
            type="video/mp4"
          />
        </video>
        <Box className={classes.header}>
          <Typography variant="h1" component="h1">
            Hi, I'm Ethan
          </Typography>
          <Tooltip title={darkMode ? "Light Mode" : "Dark Mode"}>
            <IconButton onClick={handleThemeChange}>
              {darkMode ? <BrightnessHighIcon /> : <Brightness3Icon />}
            </IconButton>
          </Tooltip>
        </Box>
        <Container className={classes.cont}>
          <Paper>
            <Typography variant="h3" component="h3" style={{ margin: "25px" }}>
              About Me:
            </Typography>
            <Typography
              variant="body1"
              component="p"
              style={{ margin: "15px" }}
            >
              &emsp; I am an aspiring Web Developer with a history in movie
              theatre projection systems and IT. I have recently completed a
              Full Stack coding bootcamp from the University of Central Florida
              and I am looking forward to taking everything I have learned and
              putting it into practice. The program focused on the MERN stack,
              but I would say the key thing I learned from the expereince is
              that this career will be focused around learning new technologies
              and keeping pace with the industry. To that end, I have been
              spending time to prepare to take the AWS Cloud Practitioners
              Certification. I have also started learning about Docker and
              containerization, while picking up Python as a second language.
            </Typography>
          </Paper>
          <Typography
            variant="h2"
            component="h2"
            style={{ textAlign: "center", margin: "35px" }}
          >
            Projects:
          </Typography>
          <Paper style={{ marginTop: "15px" }}>
            <Grid container>
              <Grid item xs={12} sm={3}>
                <a href="https://snap-that-ed.herokuapp.com/">
                  <img
                    src="https://res.cloudinary.com/dd9hrrpch/image/upload/v1622655181/Snap-That_rbvs2l.png"
                    alt="snap-that Homepage"
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                </a>
              </Grid>
              <Grid item xs={12} sm={8} style={{ margin: "20px" }}>
                <Typography variant="h4" component="h4">
                  Snap-That
                </Typography>
                <Typography variant="subtitle1" component="span">
                  A image hosting and sharing site where users can share and
                  request photos.
                </Typography>
                <br />
                <Typography variant="subtitle2" component="span">
                  Role: Sole Author
                </Typography>
                <br />
                <Typography variant="subtitle2" component="span">
                  A MERN Stack site; MongoDB, Mongoose, Passport, Cloudinary,
                  ML5, Material-UI, Node, Express, React
                </Typography>
                <br />
                <Link href="https://github.com/edutcher/Snap_That">
                  Github Repo
                </Link>
              </Grid>
            </Grid>
          </Paper>
          <Paper style={{ marginTop: "15px" }}>
            <Grid container>
              <Grid item xs={12} sm={3}>
                <a href="https://shoe-thing.herokuapp.com/">
                  <img
                    src="https://res.cloudinary.com/dd9hrrpch/image/upload/v1624388848/shoething_uf2t3d.png"
                    alt="Shoe-thing Homepage"
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                </a>
              </Grid>
              <Grid item xs={12} sm={8} style={{ margin: "20px" }}>
                <Typography variant="h4" component="h4">
                  Shoe-Thing
                </Typography>
                <Typography variant="subtitle1" component="span">
                  A fake shoe store where users can sign up, add shoes to thier
                  cart, and create an order.
                </Typography>
                <br />
                <Typography variant="subtitle2" component="span">
                  Role: Back-end and Front-end javascript
                </Typography>
                <br />
                <Typography variant="subtitle2" component="span">
                  A Full-Stack templated site; SQL, Sequelize, EJS, Bootstrap,
                  Node, Express
                </Typography>
                <br />
                <Link href="https://github.com/edutcher/Shoe_thing">
                  Github Repo
                </Link>
              </Grid>
            </Grid>
          </Paper>
          <Paper style={{ marginTop: "15px" }}>
            <Grid container>
              <Grid item xs={12} sm={3}>
                <a href="https://edutcher.github.io/Day_Planner/">
                  <img
                    src="https://res.cloudinary.com/dd9hrrpch/image/upload/v1624389929/planner_mnqagz.jpg"
                    alt="Day Planner Homepage"
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                </a>
              </Grid>
              <Grid item xs={12} sm={8} style={{ margin: "20px" }}>
                <Typography variant="h4" component="h4">
                  Day Planner
                </Typography>
                <Typography variant="subtitle1" component="span">
                  A day planner built into a mock-up dashboard with changable
                  themes
                </Typography>
                <br />
                <Typography variant="subtitle2" component="span">
                  Role: Sole Author
                </Typography>
                <br />
                <Typography variant="subtitle2" component="span">
                  An early JQuery project; JQuery and Materialize
                </Typography>
                <br />
                <Link href="https://github.com/edutcher/Day_Planner">
                  Github Repo
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}
