import axios from 'axios';
import { EmailFormData } from './email.interface';

export const sendEmailService = async (emailData: EmailFormData) => {
    const response = await axios.post('http://127.0.0.1:3000/send-email', emailData, {
      headers: {
        'Content-Type': 'application/json', 
      },
    });
    return response.data;  
  };