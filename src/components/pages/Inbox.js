import React from 'react'
import { useSelector  } from 'react-redux';
import { NavLink } from 'react-router-dom';

import MailData from '../Mail/MailData';


 const InboxEmail = () => {

    const mails = useSelector((state)=>state.mail.mailData)
    const email = localStorage.getItem("email")
    const inboxMail = mails.filter(mail=>mail.to === email )

    const mailItem = inboxMail.map(mail=>(
       <NavLink to={`/inbox/${mail.id}`}> <MailData key={mail.id} mail={mail} toorFrom='From' /></NavLink>
    ))

  return (
    <div>
    {mailItem}
    </div>

  )
}

export default InboxEmail;