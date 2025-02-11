import { useState } from "react";
import { EmailFormData } from "./email.interface";
import { sendEmailService } from "./email.service";
import { Response } from "./response.interface";

const useEmailSendMutation = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);
    const [data, setData] = useState<null | string>(null);
  
    const mutate = async (emailData: EmailFormData) => {
      setLoading(true);
      setError(null);
      try {
        const response : Response = await sendEmailService(emailData);
        console.log(response);
        if (response.status === 'success') {
          setData(response.data);
        } else if (response.status === 'error') {
          setError(response.data as string || 'Something went wrong! Please try again later.');
        } else {
          setError('Something went wrong! Please try again later.' );
        }
      
      } catch (err ) {
        console.log(err);
        setError('Something went wrong! Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    return { mutate, loading, error, data };
  };

export default useEmailSendMutation;
