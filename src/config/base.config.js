let url = '';
let env = process.env.NODE_ENV;

if (env === 'development') {
    url = 'http://43.156.20.134:50080/backend/v1/';
} else {
    url = 'http://43.156.20.134:50080/backend/v1/';
}

export default {
    BASE_URL: url,
    TIMEOUT: 60000,
};
