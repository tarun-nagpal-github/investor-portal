const validator = {

  email: {
    rules: [
      {
        test: /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i,
        message: 'Please Enter Valid Email',
      },
    ],
    errors: [],
    valid: false,
    state: '',
  },
  password: {
    rules: [
      {
        test: (value) => {
          return value.length >= 3;
        },
        message: 'Password must not be shorter than 6 characters',
      },
      // {
      //   test: /^[a-z0-9A-Z_]+$/,
      //   message: 'Enter Valid Password',
      // },
    ],
    errors: [],
    valid: false,
    state: ''
  },
  firstname: {
    rules: [
      {
        test: /^[a-zA-Z_]+$/i,
        message: 'number not allowed',
      },
    ],
    errors: [],
    valid: false,
    state: '',
  },
  lastname: {
    rules: [
      {
        test: /^[a-zA-Z_]+$/i,
        message: 'number not allowed',
      },
    ],
    errors: [],
    valid: false,
    state: '',
  },
};

export default validator;