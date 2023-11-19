import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';


export const StyledContainer = styled(ToastContainer)`
  // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.2);
    background: #10100f;
    color: #efede8;
  }
  .Toastify__toast-theme--colored.Toastify__toast--error {
  }
`;
