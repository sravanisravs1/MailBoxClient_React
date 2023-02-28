import AllEmails from "./Allemails";
import useReceivedDataHttp from "../../http/received-http";

const ShowEmail = (props) => {

  const receivedmails11 = useReceivedDataHttp();
  if(receivedmails11.length === 0) {
    return <h1> No mail Found </h1>
  }

  return (
    <>

    {receivedmails11.map((item) => {
      
      return <AllEmails
        key={item.id}
        item={{
          from: item.from,
          id: item.id,
          subject: item.subject,
          message: item.message,
          read: item.read,
        }}
      />}
    )}



  </>
  );
};

export default ShowEmail;