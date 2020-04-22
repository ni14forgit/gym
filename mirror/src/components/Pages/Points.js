import React from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { shouldRedirect } from "../../actions/actions";
const Points = () => {
  const history = useHistory();
  if (shouldRedirect()) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Redeem Attendance for Awards</h1>
      <p>
        Gyms can award protein shakes, fitness gear, ... for a strong attendance
        record from members.{" "}
      </p>
      <p>Feature not yet built</p>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Main Page
      </button>
    </div>
  );
};

export default Points;
