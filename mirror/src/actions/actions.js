import firebase from "../store/firebase";

const createDate = () => {
  const todaydate = new Date();
  const year = todaydate.getFullYear();
  //console.log(year);
  var month = todaydate.getMonth() + 1;
  if (Number(month) < 10) {
    month = "0" + month;
  }
  var day = todaydate.getDate();
  if (Number(day) < 10) {
    day = "0" + day;
  }
  //console.log(year + "-" + month + "-" + day);
  return year + "-" + month + "-" + day;
};

const createMonthDate = (dateString) => {
  const historyDate = new Date(dateString);
  var newDate = new Date(historyDate.setMonth(historyDate.getMonth() + 1));
  const year = newDate.getFullYear();
  var month = newDate.getMonth() + 1;
  if (Number(month) < 10) {
    month = "0" + month;
  }
  var day = newDate.getDate();
  if (Number(day) < 10) {
    day = "0" + day;
  }
  //console.log(year + "-" + month + "-" + day);
  return year + "-" + month + "-" + day;
};

const withinMonth = (dateString) => {
  const today = new Date();
  const historyDate = new Date(dateString);
  var newDate = new Date(historyDate.setMonth(historyDate.getMonth() + 1));

  //console.log("today: " + today);
  //console.log("history date: " + historyDate);
  //console.log("new date: " + newDate);

  if (newDate.getTime() >= today.getTime()) {
    return true;
  }

  return false;
};

const withinSpecificYear = (dateString) => {
  const date = new Date(dateString);
  const today = new Date();
  const todayyear = today.getFullYear();
  const dateyear = date.getFullYear();

  //console.log("date past" + date + " -- " + dateyear);
  //console.log("today date" + today + " -- " + todayyear);

  if (todayyear === dateyear) {
    return true;
  }

  return false;
};

const shouldRedirect = () => {
  var user = firebase.auth().currentUser;
  if (!user) {
    return true;
  } else {
    // return <Redirect to="/" />;
    return false;
  }
};

const withinSameDay = (dateString) => {
  if (dateString === createDate()) {
    // console.log("SAME DAY");
    return true;
  }
  return false;
};

export {
  createDate,
  withinMonth,
  withinSpecificYear,
  shouldRedirect,
  withinSameDay,
  createMonthDate,
};
