import React, { Fragment } from "react";
import SentMailss from "./SentMailDesign";
import useSendDataHttp from "../../http/sent-http";


const ShowsentMail = (props) => {

  const result2 = useSendDataHttp(); 

  if(result2.length === 0) {
    return <h1> No mail found</h1>
  }


  return (
    <Fragment>

    {result2.map((item) => {
     return  <SentMailss
       key={item.id}
        item={{
          to: item.to,
          id: item.id,
          subject: item.subject,
          message: item.message,
        }}
      />
    })}

  </Fragment>
  );
};

export default ShowsentMail;