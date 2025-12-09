import React from 'react';
import {toast} from 'react-toastify';



export const mostrarToast = (message, type) => {
  switch (type) {
    case 'success':
      toast.success(message || 'Éxito');
      break;
    case 'error':
      toast.error(message || 'Error');
      break;
    case 'info':
      toast.info(message || 'Información');
      break;
    default:
      toast(message || 'Notificación');
      break;
  }
};
