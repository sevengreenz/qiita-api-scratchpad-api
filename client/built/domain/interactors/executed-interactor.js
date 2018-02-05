import executedRepository from '../../data/repositories/executed-repository';
var executedInteractor = {
    getLastExecuteApi: function () {
        return executedRepository.getExecuted();
    },
};
export default executedInteractor;
//# sourceMappingURL=executed-interactor.js.map