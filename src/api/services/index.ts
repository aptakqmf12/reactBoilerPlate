import Client from '../index';

export const fetchData = async (reqeust: any) => {
    return await Client.credentialsInstance.get(`${Client.path.api}/주소`, reqeust);
};
