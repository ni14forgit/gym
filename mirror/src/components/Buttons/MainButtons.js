import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { RewardIcon, GraphIcon, FriendsIcon } from "../../assets/icons/icons";
import { buttonStyle } from "../../style/material-styles/totalStyles";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useStore } from "../../store/store";
import firebase from "../../store/firebase";
import { Typography } from "@material-ui/core";
import mainbuttonsFinalStyle from "../../style/styled-css/mainbuttons-style";
import Grid from "@material-ui/core/Grid";

const MainButtons = () => {
  const [boldAuth, setBoldAuth] = useState(false);
  const history = useHistory();
  const [state, dispatch] = useStore();
  const Container = mainbuttonsFinalStyle.container;
  const Title = mainbuttonsFinalStyle.title;
  const Copyright = mainbuttonsFinalStyle.copyright;

  const clickAuth = () => {
    if (!user) {
      history.push("/auth");
    } else {
      firebase
        .auth()
        .signOut()
        .then(function () {
          // dispatch("SET_UID_USER", "");
          dispatch("LOG_OUT", "");
        })
        .catch(function (error) {
          //console.log("logout error occurred");
        });
    }
  };
  const buttonstyle = makeStyles(buttonStyle);
  const buttonstyle_data = buttonstyle();

  //might need to use a USEEFFECT to load the user title initially? ?

  var userName = "";
  var user = firebase.auth().currentUser;

  const buttonPress = (path) => {
    if (user) {
      history.push(path);
    } else {
      history.push("/auth");
    }
  };

  if (user != null) {
    //console.log(user.providerData);
    var firstName = user.displayName.split(" ");
    userName = "Welcome, " + firstName[0];
    //console.log(user.displayName);
  }

  const AuthButtonFunc = () => {
    return (
      <Button
        className={boldAuth ? buttonstyle_data.authBold : buttonstyle_data.auth}
        color="primary"
        size="medium"
        style={{ position: "absolute", top: "2vh", left: "88vw" }}
        onClick={clickAuth}
      >
        <Typography style={{ fontWeight: "bold" }} variant="h5">
          {user ? "Logout" : "Sign In"}
        </Typography>
      </Button>
    );
  };

  const tileData = [
    {
      id: "friends",
      page: "/buddy",
      size: 110,
      color: "#FCD8F4",
      text: "Find Buddies!",
      pad: "9px",
    },
    {
      id: "metrics",
      page: "/metrics",
      size: 125,
      color: "#FCD8F4",
      text: "My Progress",
      pad: "0px",
    },
    {
      id: "store",
      page: "/points",
      size: 90,
      color: "#FCD8F4",
      text: "Rewards",
      pad: "18px",
    },
  ];

  const BaseButton = {
    classes: {
      root: buttonstyle_data.mainoption,
      label: buttonstyle_data.mainlabel,
    },
    variant: "outlined",
    color: "primary",
    size: "large",
  };

  const TypographyButton = (title) => {
    // style={{ position: "absolute", bottom: "1vh" }}
    return <Typography variant="h5">{title}</Typography>;
  };

  return (
    <div>
      <Container>
        {userName.length > 0 ? (
          <Title>
            <Typography
              style={{ color: "white", fontWeight: "500" }}
              variant="h2"
            >
              {userName}
            </Typography>
          </Title>
        ) : null}
        <Copyright>
          <Typography
            style={{ color: "white", fontWeight: "500" }}
            variant="p1"
          >
            @Copyright Duke Wilson Recreation Center
          </Typography>
        </Copyright>
        {AuthButtonFunc()}
        <Grid justify="center" spacing={0} container xs={12}>
          {tileData.map((tile) => {
            switch (tile.id) {
              case "metrics":
                return (
                  <Grid item>
                    <Button
                      onClick={() => buttonPress(tile.page)}
                      {...BaseButton}
                      startIcon={
                        <GraphIcon
                          style={{
                            fontSize: tile.size,
                            color: tile.color,
                            // top: "1vh",
                            padding: tile.pad,
                          }}
                        />
                      }
                    >
                      {TypographyButton(tile.text)}
                    </Button>
                  </Grid>
                );

              case "store":
                return (
                  <Grid item>
                    <Button
                      onClick={() => buttonPress(tile.page)}
                      {...BaseButton}
                      startIcon={
                        <RewardIcon
                          style={{
                            fontSize: tile.size,
                            color: tile.color,
                            // position: "absolute",
                            padding: tile.pad,
                          }}
                        />
                      }
                    >
                      {TypographyButton(tile.text)}
                    </Button>
                  </Grid>
                );
              case "friends":
                return (
                  <Grid item>
                    <Button
                      onClick={() => buttonPress(tile.page)}
                      {...BaseButton}
                      startIcon={
                        <FriendsIcon
                          style={{
                            fontSize: tile.size,
                            color: tile.color,
                            // position: "absolute",
                            padding: tile.pad,
                          }}
                        />
                      }
                    >
                      {TypographyButton(tile.text)}
                    </Button>
                  </Grid>
                );
              default:
                return null;
            }
          })}
        </Grid>
        {/* </GridContainer> */}
      </Container>
    </div>
  );
};

export default MainButtons;
