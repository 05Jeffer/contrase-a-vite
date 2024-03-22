import { sendemail, sendnewpassword } from "../../services/EmailService"
import EmailContext from "./EmailContext";

const EmailProvider = ({ children }) => {
  const handleSendEmail = async (email) => {
    const { status } = await sendemail(email);
    if (status === 200 || status === 201) {
      return true;
    } else {
      return false;
    }
  }

  const handleSendNewPassword = async (password, token) => {
    const { status } = await sendnewpassword(password, token);
    if (status === 200 || status === 201) {
      return true;
    } else {
      return false;
    }
  }


  return (
    <EmailContext.Provider value={{
      handleSendEmail,
      handleSendNewPassword
    }}>
      {children}
    </EmailContext.Provider>
  )
}

export default EmailProvider
