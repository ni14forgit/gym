import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { useStore } from "../../store/store";

const PrettoSlider = withStyles({
  root: {
    color: "#137cbd",
    height: 10,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 20,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const SmoothSlider = ({
  defaultvalue,
  value,
  onChange,
  disabled,
  min,
  max,
}) => {
  const [state, dispatch] = useStore();

  useEffect(() => {
    console.log(state.age);
  }, [state.age]);

  return (
    <div>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        value={value}
        onChange={onChange}
        defaultValue={defaultvalue}
        disabled={disabled}
        min={min}
        max={max}
        // value={state.age}
        // onChange={(event, v) => {
        //   dispatch("SET_AGE_USER", v);
        // }}
      />
    </div>
  );
};

function DiscreteSlider({
  step,
  min,
  max,
  defaultvalue,
  value,
  onChange,
  disabled,
}) {
  return (
    <div>
      <PrettoSlider
        valueLabelDisplay="auto"
        marks
        step={step}
        min={min}
        max={max}
        defaultValue={defaultvalue}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}
export { SmoothSlider, DiscreteSlider };
