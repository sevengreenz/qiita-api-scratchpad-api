import UnAuthorizedError from './unauthorized-error';
import ServerError from './server-error';
var throwError = function (error) {
    if (error.response !== undefined) {
        var status_1 = error.response.status;
        if (status_1 === 401) {
            throw new UnAuthorizedError(status_1.toString());
        }
        else {
            throw new ServerError(status_1.toString());
        }
    }
    throw new ServerError('Unexpeced Error');
};
export default {
    throwError: throwError,
};
//# sourceMappingURL=error-factory.js.map