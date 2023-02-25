import React, { Fragment } from "react";
import Header from "./Header";
import ShowEmail from "../Mail/Showmail";


const Inbox = () => {

    return(
        <Fragment>
            <Header />
            <ShowEmail/>
        </Fragment>
    )
}

export default Inbox;