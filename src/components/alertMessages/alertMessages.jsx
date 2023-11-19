import { toast } from 'react-toastify';

export const messageNotification = (code) => {
    switch (code) {
      case 409:
        toast.error('This user already exists!');
        break;
      case 400:
        toast.error('Bad Request!');
        break;
      case 401:
        toast.error('Failed Login! Please try again!');
        break;

      case 403:
        toast.error('Forbidden!');
        break;

      case 404:
        toast.error('Paige not found!');
        break;
      case 408:
        toast.error('Request Timeout!');
        break;
        default:
            toast.error('Oops something went wrong!');
        break;
    }
}