import * as lambda from "aws-lambda";
import axios from "axios";
import QiitaRepository from "../repositories/qiita-repository";

export const qiita: lambda.ProxyHandler = async (
    event: lambda.APIGatewayEvent,
    context: lambda.Context,
    callback: lambda.Callback,
): Promise<void> => {
    const qiitaRepository = new QiitaRepository(axios);
    const response = await qiitaRepository.findSchema();

    callback(null, response);
};
