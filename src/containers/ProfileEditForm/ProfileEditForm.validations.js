export default {
  givenName: {
    required: true,
    validateOnBlur: true,
  },
  familyName: {
    required: true,
    validateOnBlur: true,
  },
  nickname: {
    required: false,
    validateOnBlur: true,
  },
  email: {
    required: true,
    email: true,
    validateOnBlur: true,
  },
};