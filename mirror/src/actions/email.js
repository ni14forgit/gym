let endpoint = "http://localhost:5000";

const match = (from, to) => {
  const emailcontent = {
    fromemail: "ni14@duke.edu",
    toemail: "iyengar.nish@gmail.com",
    subject: "test email",
    contents: "This is a test message",
  };

  fetch(endpoint + "/mail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailcontent),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });

  console.log("make restful call to flask to send email? ");
};

const trainer = (from, to) => {
  console.log(from);
  console.log(to);
  const emailcontent = {
    fromemail: "ni14@duke.edu",
    toemail: "iyengar.nish@gmail.com",
    subject: "Trainer Email",
    contents: "Trainer Email",
  };

  fetch(endpoint + "/mail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailcontent),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });

  console.log("make restful call to flask to send email? ");
};

export { match, trainer };
