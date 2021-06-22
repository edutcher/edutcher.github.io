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
            <Typography variant="h2" component="h2" style={{ margin: "25px" }}>
              About Me:
            </Typography>
            <Typography variant="body1" component="p">
              I am an aspiring Web Developer with a history in movie theatre
              projection systems and IT. I have recently completed a Full Stack
              coding bootcamp from the University of Central Florida and I am
              looking forward to taking everything I have learned and putting it
              into practice. The program focused on the MERN stack, but I would
              say the key thing I learned from the expereince is that this
              career will be focused around learning new technologies and
              keeping pace with the industry. To that end, I have been spending
              time to prepare to take the AWS Cloud Practitioners Certification.
              I have also started learning about Docker and containerization,
              while picking up Python as a second language.
            </Typography>
          </Paper>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}
