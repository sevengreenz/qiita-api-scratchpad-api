var localExecutedDataStore = function () {
    var key = 'lastExecuteApi';
    return {
        getExecuted: function () {
            var executed = sessionStorage.getItem(key);
            if (executed === null)
                return null;
            return JSON.parse(executed);
        },
        setExecuted: function (executed) {
            sessionStorage.setItem(key, JSON.stringify(executed));
        },
    };
};
export default localExecutedDataStore;
//# sourceMappingURL=local-executed-data-store.js.map