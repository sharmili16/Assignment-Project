import React, { useState, } from "react";

import { makeStyles } from '@ui';
import TextField from '@mui/@material/TextField';
import Button from "@mui/@material/Button";
import Card from "@mui/@material/Card";
import CardContent from "@mui/@material/CardContent";
import Typography from "@mui/@material/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  card: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
}));

export default function NewPost() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to submit the post to the server here
    setUsername("");
    setMessage("");
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="username"
        label="Username"
        className={classes.textField}
        value={username}
        onChange={handleUsernameChange}
        margin="normal"
      />
      <TextField
        id="message"
        label="Message"
        multiline
        rowsMax="4"
        value={message}
        onChange={handleMessageChange}
        className={classes.textField}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      {username && message && (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5">{username}</Typography>
            <Typography variant="body1">{message}</Typography>
          </CardContent>
        </Card>
      )}
    </form>
  );
}
