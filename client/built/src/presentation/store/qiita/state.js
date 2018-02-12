var createEmptyApi = function () {
    return {
        title: '',
        description: '',
        href: '',
        method: '',
    };
};
var createEmptyApiResponse = function () {
    return {
        headers: '',
        data: '',
    };
};
var createInitialState = function () {
    return {
        resources: [],
        targetResource: {
            title: '',
            description: '',
            links: [],
            properties: {},
            required: [],
        },
        targetApi: createEmptyApi(),
        urlParams: {},
        dataParams: {},
        apiResponse: createEmptyApiResponse(),
    };
};
export default {
    createInitialState: createInitialState,
    createEmptyApiResponse: createEmptyApiResponse,
};
//# sourceMappingURL=state.js.map