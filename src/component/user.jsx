import { Container, TextField, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import NavigationIcon from "@material-ui/icons/Navigation";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "60vh",
    width: "60vw",
    border: "1px solid #000",
    overflow: "scroll",
    position: "relative",
  },
  Container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  inptCon: {
    width: "60vw",
    display: "flex",
  },
  inpt: {
    marginTop: 10,
    width: "90%",
  },
  icon: {
    width: "10%",
  },
  pr: {
    color: "#fff",
    background: "#000",
    padding: "10px 0",
    paddingLeft: 5,
    position: "absolute",
    right: 0,
  },
  se: {
    color: "black",
    background: "#999",
    paddingRight: 5,
    padding: "10px 0",
    position: "absolute",
    left: 0,
  },
  conText: {
    padding: 20,
    marginBottom: 10,
  },
}));

const User = ({ id, data, onSave }) => {
  window.scrollTo(0, document.body.scrollHeight);
  const classes = useStyles();
  const [MSG, setMSG] = useState();
  const location = useLocation();

  return (
    <Container className={classes.Container}>
      {/* <Typography variant="h2">User# {id}</Typography> */}
      <div className={classes.container}>
        {data.map((msg) => {
          if (location.pathname === "/1") {
            if (msg.user_no === 2) {
              return (
                <div className={classes.conText} key={msg.id}>
                  <Typography className={classes.se}>{msg.msg}</Typography>
                </div>
              );
            } else if (msg.user_no === 1) {
              return (
                <div className={classes.conText} key={msg.id}>
                  <Typography className={classes.pr}>{msg.msg}</Typography>
                </div>
              );
            }
          } else if (location.pathname === "/2") {
            if (msg.user_no === 2) {
              return (
                <div className={classes.conText} key={msg.id}>
                  <Typography className={classes.pr}>{msg.msg}</Typography>
                </div>
              );
            } else if (msg.user_no === 1) {
              return (
                <div className={classes.conText} key={msg.id}>
                  <Typography className={classes.se}>{msg.msg}</Typography>
                </div>
              );
            }
          }
        })}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave(MSG);
        }}
        className={classes.inptCon}
      >
        <TextField
          className={classes.inpt}
          variant="standard"
          label="Enter new message..."
          onChange={(e) => setMSG(e.target.value)}
        ></TextField>
        <Button type="submit" className={classes.icon}>
          <NavigationIcon style={{ transform: "rotate(90deg)" }} />
        </Button>
      </form>
    </Container>
  );
};

export default User;
