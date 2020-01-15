/* eslint-disable import/prefer-default-export */
const PENDING_STATUS = 'pending';
const ERROR_STATUS = 'error';
const SUCCESS_STATUS = 'success';

/*
  DAN: "Don't copy-paste this into your project!"
  ME: "Hold my 🍺..."
*/
export const wrapPromise = promise => {
  let status = PENDING_STATUS;
  let result;

  const suspender = promise.then(
    r => {
      status = SUCCESS_STATUS;
      result = r;
    },
    e => {
      status = ERROR_STATUS;
      result = e;
    }
  );

  return {
    read() {
      if (status === PENDING_STATUS) {
        throw suspender;
      } else if (status === ERROR_STATUS) {
        throw result;
      } else if (status === SUCCESS_STATUS) {
        return result;
      }
      return undefined;
    }
  };
};
