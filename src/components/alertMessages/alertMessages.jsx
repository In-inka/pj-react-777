import { toast } from 'react-toastify';

export const messageNotification = (code) => {
    switch (code) {
      case 409:
        toast.error('Already exist!');
        break;
      case 400:
        toast.warning('Bad Request!');
        break;
      case 401:
        toast.warning('Unauthorized!');
        break;

      case 403:
        toast.warning('Forbidden!');
        break;

      case 404:
        toast.warning('Paige not found!');
        break;
      case 408:
        toast.warning('Request Timeout!');
        break;
        default:
            toast.warning('Oops something went wrong!');
        break;
    }
}