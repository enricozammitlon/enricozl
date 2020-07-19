export default {
  API_URL:
    process.env.REACT_APP_ENV !== 'prod'
      ? 'http://localhost:8080/api'
      : 'https://modules-api-253412.firebaseapp.com/api/v1/modules',
};
