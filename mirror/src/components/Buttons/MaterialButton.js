import CloseIcon from "@material-ui/icons/Close";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import RemoveIcon from "@material-ui/icons/Remove";

import React from "react";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const CancelButton = (props) => {
  const history = useHistory();
  return (
    <IconButton onClick={() => history.push("/")}>
      <CloseIcon style={{ fontSize: 50, color: `${props.color}` }} />
    </IconButton>
  );
};

const LikeButton = (props) => {
  return (
    <IconButton onClick={() => props.likefunc(props.id)}>
      <ThumbUpIcon style={{ fontSize: 40, color: `${props.color}` }} />
    </IconButton>
  );
};

const RemoveButton = (props) => {
  return (
    <IconButton onClick={() => props.removefunc(props.id)}>
      <RemoveIcon style={{ fontSize: 40, color: `${props.color}` }} />
    </IconButton>
  );
};

export { CancelButton, LikeButton, RemoveButton };
