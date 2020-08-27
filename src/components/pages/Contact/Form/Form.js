import React, { useState, Fragment } from "react";
import clsx from "clsx";
import axios from "axios";

import {
  Grid,
  Button,
  Typography,
  TextField,
  Dialog,
  DialogContent,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";

import {
  emailFieldValidation,
  phoneNumberValidation,
} from "../../../../helpers/formFieldValidation";

import phoneIcon from "../../../../assets/phone.svg";
import emailIcon from "../../../../assets/email.svg";
import airplane from "../../../../assets/send.svg";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  blueText: {
    color: theme.palette.common.blue,
  },
  smallerText: {
    fontSize: "1rem",
  },
  message: {
    marginTop: "5em",
    border: `2px solid ${theme.palette.common.blue}`,
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm)")]: {
      height: 35,
      width: 205,
    },
  },
  fieldBlockMargin: {
    marginBottom: "0.5em",
  },
  itemTopMargin: {
    marginTop: "2em",
  },
  envelopeIcon: {
    marginRight: "0.5em",
    verticalAlign: "bottom",
  },
  fieldItemWidth: {
    width: "20em",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  removeLinkStyle: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const Form = (props) => {
  const { matchesMd, matchesXs, matchesSm } = props;
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
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

  const onConfirm = () => {
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
        },
      })
      .then((res) => {
        setLoading(false);
        setOpen(false);
        resetFields();
        setAlert({
          open: true,
          message: "Message sent successfully",
          backgroundColor: "#4bb543",
        });
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setAlert({
          open: true,
          message: `Message not sent. ${err.message}`,
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

  const resetFields = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    return;
  };

  const buttonContents = (
    <Fragment>
      Send message
      <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} />
    </Fragment>
  );

  return (
    <Fragment>
      <Grid item>
        <Grid item container direction="column">
          <Grid item>
            <Typography
              align={matchesMd ? "center" : undefined}
              variant="h2"
              style={{ lineHeight: 1 }}
            >
              Contact Us
            </Typography>
            <Typography
              align={matchesMd ? "center" : undefined}
              variant="body1"
              className={classes.blueText}
            >
              We're waiting
            </Typography>
          </Grid>
          <Grid item container className={classes.itemTopMargin}>
            <Grid item>
              <img
                src={phoneIcon}
                alt="phone"
                style={{ marginRight: "0.5em" }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                className={clsx(classes.blueText, classes.smallerText)}
              >
                <a href="tel:5555555555" className={classes.removeLinkStyle}>
                  (555) 555-5555
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item container className={classes.fieldBlockMargin}>
            <Grid item>
              <img
                src={emailIcon}
                alt="envelope"
                className={classes.envelopeIcon}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                className={clsx(classes.blueText, classes.smallerText)}
              >
                <a
                  href="mailto:me@email.com"
                  className={classes.removeLinkStyle}
                >
                  me@email.com
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            className={classes.fieldItemWidth}
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
          <Grid
            item
            container
            justify="center"
            className={classes.itemTopMargin}
          >
            <Button
              variant="contained"
              className={classes.sendButton}
              disabled={checkValid()}
              onClick={() => setOpen(true)}
            >
              {buttonContents}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: 1302 }}
        open={open}
        onClose={() => setOpen(false)}
        fullScreen={matchesSm}
        PaperProps={{
          style: {
            paddingTop: matchesXs ? "1em" : "2em",
            paddingBottom: matchesXs ? "1em" : "2em",
            paddingLeft: matchesXs ? 0 : matchesSm ? "2em" : "5em",
            paddingRight: matchesXs ? 0 : matchesSm ? "2em" : "5em",
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
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
          </Grid>
          <Grid item className={classes.fieldItemWidth}>
            <TextField
              multiline
              InputProps={{ disableUnderline: true }}
              rows={10}
              id="message"
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={classes.message}
            />
          </Grid>
          <Grid
            item
            container
            className={classes.itemTopMargin}
            alignItems="center"
            direction={matchesSm ? "column" : "row"}
          >
            <Grid item>
              <Button
                color="primary"
                style={{ fontWeight: 300 }}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                className={classes.sendButton}
                disabled={checkValid()}
                onClick={() => onConfirm()}
              >
                {loading ? <CircularProgress size={30} /> : buttonContents}
              </Button>
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

export default Form;
