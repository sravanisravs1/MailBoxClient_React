import { createSlice } from "@reduxjs/toolkit";


const emailSlice = createSlice({
  name: "email",
  initialState: {
    recievedEmails: [],
    sentEmails: [],
    unread: 0,
    email:
      localStorage.getItem("email")?.replace(".", "")?.replace("@", "") || "",
  },
  reducers: {
    recievedEmail(state, action) {
      const newEmail = action.payload;

      state.recievedEmails.push({
        id: newEmail.id,
        from: newEmail.from,
        subject: newEmail.subject,
        message: newEmail.message,
        read: newEmail.read,
      });
    },
    sentBox(state, action) {
      const sentEmail = action.payload;
      
      state.sentEmails.push({
        id: sentEmail.id,
        to: sentEmail.to,
        subject: sentEmail.subject,
        message: sentEmail.message,
      });
    },
    UncreaseUnreadEmail(state) {
      state.unread = state.unread + 1;
    },
    reduceUnreadEmails(state) {
      if (state.unread > 0) {
        state.unread = state.unread - 1;
      }
    },
  },
});

export const emailActions = emailSlice.actions;
export default emailSlice;
