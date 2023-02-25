import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

const MailDetails = () => {
  const location = useLocation();
//   const product = location;
//   console.log("inside Maildetails", product)

  return (
    <Fragment>
      <h2>Mails</h2>
    </Fragment>
  );
};

export default MailDetails;