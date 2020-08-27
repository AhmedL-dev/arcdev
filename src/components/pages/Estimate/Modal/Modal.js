import React, { useState, Fragment } from "react";
import axios from "axios";

import {
  Grid,
  Typography,
  Button,
  Dialog,
  DialogContent,
  TextField,
  Hidden,
  Snackbar,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {
  emailFieldValidation,
  phoneNumberValidation,
} from "../../../../helpers/formFieldValidation";

import check from "../../../../assets/check.svg";
import send from "../../../../assets/send.svg";

const useStyles = makeStyles((theme) => ({
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 50,
    width: 225,
    fontSize: "1.25rem",
    marginTop: "5em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  message: {
    marginTop: "3em",
    marginBottom: "3em",
    border: `2px solid ${theme.palette.common.blue}`,
    borderRadius: 5,
  },
  fieldBlockMargin: {
    marginBottom: "0.5em",
  },
  fieldItemWidth: {
    maxWidth: "20em",
  },
  specialText: {
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "1.5rem",
    color: theme.palette.common.orange,
  },
}));

const Modal = (props) => {
  const {
    isDialogOpen,
    changeDialogState,
    total,
    service,
    platforms,
    features,
    customFeatures,
    category,
    users,
    questions,
    matchesSm,
  } = props;
  const classes = useStyles();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = emailFieldValidation(event.target.value);
        setEmailHelper("");
        if (!valid) {
          setEmailHelper("Invalid email");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = phoneNumberValidation(event.target.value);
        setPhoneHelper("");
        if (!valid) {
          setPhoneHelper("Invalid phone number");
        }
        break;
      default:
        break;
    }
  };

  const softwareSelection = (
    <Grid container direction="column">
      <Grid
        item
        container
        alignItems="center"
        style={{ marginBottom: "1.25em" }}
      >
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            You want {service}
            {platforms.length > 0
              ? ` for ${
                  //if only web application is selected...
                  platforms.indexOf("Web Application") > -1 &&
                  platforms.length === 1
                    ? //then finish sentence here
                      "a Web Application."
                    : //otherwise, if web application and another platform is selected...
                    platforms.indexOf("Web Application") > -1 &&
                      platforms.length === 2
                    ? //then finish the sentence here
                      `a Web Application and an ${platforms[1]}.`
                    : //otherwise, if only one platform is selected which isn't web application...
                    platforms.length === 1
                    ? //then finish the sentence here
                      `an ${platforms[0]}`
                    : //otherwise, if other two options are selected...
                    platforms.length === 2
                    ? //then finish the sentence here
                      "an iOS Application and an Android Application."
                    : //otherwise if all three are selected...
                    platforms.length === 3
                    ? //then finish the sentence here
                      "a Web Application, an iOS Application, and an Android Application."
                    : null
                }`
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        style={{ marginBottom: "1.25em" }}
      >
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {"with "}
            {/* if we have features... */}
            {features.length > 0
              ? //...and there's only 1...
                features.length === 1
                ? //then end the sentence here
                  `${features[0]}.`
                : //otherwise, if there are two features...
                features.length === 2
                ? //...then end the sentence here
                  `${features[0]} and ${features[1]}.`
                : //otherwise, if there are three or more features...
                  features
                    //filter out the very last feature...
                    .filter((feature, index) => index !== features.length - 1)
                    //and for those features return their name...
                    .map((feature, index) => (
                      <span key={index}>{`${feature}, `}</span>
                    ))
              : null}
            {features.length > 2
              ? //...and then finally add the last feature with 'and' in front of it
                ` and ${features[features.length - 1]}.`
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        style={{ marginBottom: "1.25em" }}
      >
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            The custom features will be of {customFeatures.toLowerCase()}
            {`, and the project will be used by about ${users} users.`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  const websiteSelection = (
    <Grid container direction="column" style={{ marginTop: "14em" }}>
      <Grid item container alignItems="center">
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            You want{" "}
            {category === "Basic"
              ? " a basic website"
              : ` an ${category} website.`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  const sendEstimate = () => {
    setLoading(true);
    const sendMailFunctionUrl =
      "https://us-central1-material-ui-project-38625.cloudfunctions.net/sendMail";
    axios
      .get(sendMailFunctionUrl, {
        params: {
          name: name,
          email: email,
          phone: phone,
          message: message,
          total: total,
          category: category,
          service: service,
          platforms: platforms,
          features: features,
          customFeatures: customFeatures,
          users: users,
        },
      })
      .then((res) => {
        setLoading(false);
        setAlert({
          open: true,
          message: "Estimate request sent successfully",
          backgroundColor: "#4bb543",
        });
        changeDialogState(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setAlert({
          open: true,
          message: `Estimate not sent. ${err.message}`,
          backgroundColor: "#ff3232",
        });
      });
  };

  const checkValid = () => {
    if (
      name.length === 0 ||
      message.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      emailHelper.length !== 0 ||
      phoneHelper.length !== 0
    ) {
      return true;
    }
    return false;
  };

  return (
    <Fragment>
      <Dialog
        open={isDialogOpen}
        onClose={() => changeDialogState(false)}
        fullWidth
        maxWidth="lg"
        fullScreen={matchesSm}
        style={{ zIndex: 1302 }}
      >
        <Grid container justify="center">
          <Grid item style={{ marginTop: "1em", marginBottom: "1em" }}>
            <Typography variant="h2" align="center">
              Estimate
            </Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid
            container
            justify="space-around"
            direction={matchesSm ? "column" : "row"}
            alignItems={matchesSm ? "center" : undefined}
          >
            <Grid
              item
              container
              direction="column"
              md={7}
              style={{ maxWidth: "20em" }}
            >
              <Grid item className={classes.fieldBlockMargin}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item className={classes.fieldBlockMargin}>
                <TextField
                  label="Email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id="email"
                  fullWidth
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Phone"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  id="phone"
                  fullWidth
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
              <Grid item className={classes.fieldItemWidth}>
                <TextField
                  multiline
                  InputProps={{ disableUnderline: true }}
                  placeholder="Tell us more about your project"
                  rows={10}
                  id="message"
                  fullWidth
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={classes.message}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSm ? "center" : undefined}
                  style={{ lineHeight: 1.25 }}
                >
                  We can create this digital solution for an estimated{" "}
                  <span className={classes.specialText}>
                    £{total.toFixed(2)}
                  </span>
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSm ? "center" : undefined}
                >
                  Fill out your name, phone number and email, place your request
                  and we'll get back to you with a final price.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              md={5}
              style={{ maxWidth: "30em" }}
              alignItems={matchesSm ? "center" : undefined}
            >
              <Hidden smDown>
                <Grid item>
                  {questions.length > 2 ? softwareSelection : websiteSelection}
                </Grid>
              </Hidden>
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.estimateButton}
                  onClick={sendEstimate}
                  disabled={checkValid()}
                >
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <Fragment>
                      Place request
                      <img
                        src={send}
                        alt="paper airplane"
                        style={{ marginLeft: "0.5em" }}
                      />
                    </Fragment>
                  )}
                </Button>
              </Grid>
              <Hidden mdUp>
                <Grid item style={{ marginBottom: matchesSm ? "5em" : 0 }}>
                  <Button
                    style={{ fontWeight: 300 }}
                    color="primary"
                    onClick={() => changeDialogState(false)}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
    </Fragment>
  );
};

export default Modal;
