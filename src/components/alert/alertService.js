// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';

// const MySwal = withReactContent(Swal);

// export const showSuccessAlert = (title = 'Success!', text = '') => {
//   return MySwal.fire({
//     icon: 'success',
//     title,
//     text,
//   });
// };

// export const showErrorAlert = (title = 'Error!', text = '') => {
//   return MySwal.fire({
//     icon: 'error',
//     title,
//     text,
//   });
// };

// export const showConfirmation = (title = 'Are you sure?', text = '') => {
//   return MySwal.fire({
//     title,
//     text,
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes',
//   });
// };
// export const successAlert = Swal.mixin({
//   toast: true,
//   position: "top-end",
//   showConfirmButton: false,
//   timer: 3000,
//   timerProgressBar: true,
//   didOpen: (toast) => {
//     toast.onmouseenter = Swal.stopTimer;
//     toast.onmouseleave = Swal.resumeTimer;
//   }
// });
// successAlert.fire({
//   icon: "success",
//   title: "Signed in successfully"
// });

import Swal from "sweetalert2";

// Base toast setup
const Toast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  borderRadius: "8px",
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

// Reusable functions
export const showSuccessAlert = (message = "Success") => {
  Toast.fire({
    icon: "success",
    title: message,
  });
};

export const showErrorAlert = (message = "Something went wrong") => {
  Toast.fire({
    icon: "error",
    title: message,
  });
};

export const showInfoAlert = (message = "Info") => {
  Toast.fire({
    icon: "info",
    title: message,
  });
};

export const showWarningToast = (message = "Warning") => {
  Toast.fire({
    icon: "warning",
    title: message,
  });
};
