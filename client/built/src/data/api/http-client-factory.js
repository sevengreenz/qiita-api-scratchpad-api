import axios from 'axios';
var createHttpClient = function (config) { return axios.create(config); };
export default {
    createHttpClient: createHttpClient,
};
//# sourceMappingURL=http-client-factory.js.map