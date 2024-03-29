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
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
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
  icon: {
    height: "75px",
    width: "75px",
    marginRight: "7px",
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
          <Paper style={{ padding: "15px" }}>
            <Typography variant="h3" component="h3" style={{ margin: "25px" }}>
              About Me:
            </Typography>
            <Typography
              variant="body1"
              component="p"
              style={{ margin: "15px" }}
            >
              &emsp; I am a Full Stack Web Developer with a history in movie
              theatre projection systems and IT.  I started my college careeer
              in computer science, but changed focus after working as a
              projectionist in college.  During covid I took a Full Stack Web
              Development Boot Camp from my former school, The University of
              Central Florida.  This program re-invigorated my love of coding.
              The program focused on the MERN stack, but I would say the key 
              thing I learned from the experience is that this career will be 
              focused around learning new technologies and keeping pace with the 
              industry. To that end, I have obtained my AWS Cloud Practitioner 
              nd Developers Associate certifications and am studying for the 
              Cloud Architect exam. I have also started learning about Docker 
              and containerization, while picking up Python as a second language.
            </Typography>
          </Paper>
          <Typography variant="h3" component="h3" style={{ margin: "35px" }}>
            Technical Skills:
          </Typography>
          <Paper style={{ marginTop: "15px", padding: "10px" }}>
            <Grid container>
              <Tooltip title="Javascript">
                <img
                  className={classes.icon}
                  src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
                  alt="Javascript Icon"
                />
              </Tooltip>
              <Tooltip title="HTML">
                <img
                  className={classes.icon}
                  src="https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Color_Black.png"
                  alt="html icon"
                />
              </Tooltip>
              <Tooltip title="CSS">
                <img
                  className={classes.icon}
                  src="https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png"
                  alt="css icon"
                />
              </Tooltip>
              <Tooltip title="React">
                <img
                  className={classes.icon}
                  src="data:image/png;base64,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"
                  alt="react icon"
                />
              </Tooltip>
              <Tooltip title="SQL">
                <img
                  className={classes.icon}
                  src="data:image/png;base64,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"
                  alt="SQL icon"
                />
              </Tooltip>
              <Tooltip title="MongoDB">
                <img
                  className={classes.icon}
                  src="data:image/png;base64,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"
                  alt="mongoDB icon"
                />
              </Tooltip>
              <Tooltip title="Node">
                <img
                  className={classes.icon}
                  src="https://icon-library.com/images/node-js-icon/node-js-icon-8.jpg"
                  alt="node icon"
                />
              </Tooltip>
              <Tooltip title="Express">
                <img
                  className={classes.icon}
                  src="https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
                  alt="express icon"
                />
              </Tooltip>
              <Tooltip title="Material-UI">
                <img
                  className={classes.icon}
                  src="https://material-ui.com/static/logo.png"
                  alt="Material-UI icon"
                />
              </Tooltip>
              <Tooltip title="AWS Cloud Practitioner">
                <img
                  className={classes.icon}
                  src="https://res.cloudinary.com/dd9hrrpch/image/upload/v1627843906/aws-certified-cloud-practitioner_joq6ve.png"
                  alt="AWS icon"
                />
              </Tooltip>
              <Tooltip title="AWS Developer Associate">
                <img
                  className={classes.icon}
                  src="https://res.cloudinary.com/dd9hrrpch/image/upload/v1663529672/dev-associate_sguoe7.png"
                  alt="AWS icon"
                />
              </Tooltip>
            </Grid>
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
                <a href="http://some-recipes.ethandutchercodes.com/">
                  <img
                    src="https://res.cloudinary.com/dd9hrrpch/image/upload/v1627056871/SomeRecipes_xakdoy.png"
                    alt="SomeRecipes Homepage"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      marginTop: "20px",
                    }}
                  />
                </a>
              </Grid>
              <Grid item xs={12} sm={8} style={{ margin: "20px" }}>
                <Typography variant="h4" component="h4">
                  SomeRecipes
                </Typography>
                <Typography variant="subtitle1" component="span">
                  A recipe sharing site.
                </Typography>
                <br />
                <Typography variant="subtitle2" component="span">
                  Role: Sole Author
                </Typography>
                <br />
                <Typography variant="subtitle2" component="span">
                  A serverless app hosted on AWS: React, Material-UI, Python for
                  Lambda functions, S3, Lambda, API Gateway, DynamoDB, Cognito,
                  Cloudfront, CodeCommit
                </Typography>
                <br />
                <br />
                <Link href="https://github.com/edutcher/SomeRecipesFE">
                  Github Repo
                </Link>
              </Grid>
            </Grid>
          </Paper>
          <Paper style={{ marginTop: "15px" }}>
            <Grid container>
              <Grid item xs={12} sm={3}>
                <a href="http://snap-that.ethandutchercodes.com/">
                  <img
                    src="https://res.cloudinary.com/dd9hrrpch/image/upload/v1622655181/Snap-That_rbvs2l.png"
                    alt="snap-that Homepage"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      marginTop: "15px",
                    }}
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
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      marginTop: "10px",
                    }}
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
                <br />
                <Link href="https://github.com/edutcher/Day_Planner">
                  Github Repo
                </Link>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            style={{ marginTop: "50px", marginBottom: "20px", padding: "15px" }}
          >
            <Typography
              variant="h5"
              component="h5"
              style={{ textDecoration: "underline", marginBottom: "10px" }}
            >
              Contact:
            </Typography>
            <Typography variant="subtitle1" component="span">
              Email: edutcher@gmail.com
            </Typography>
            <br />
            <Link href="https://www.linkedin.com/in/ethan-dutcher-905178ab/">
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </Link>
            <br />
            <Link href="https://github.com/edutcher">
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </Link>
          </Paper>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}
