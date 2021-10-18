/**
 *  RECEBER CODE (STRING)
 *  RECUPERAR O ACCESS_TOKEN NO GITHUB
 *  RECUPERAR INFOS DO USER NO GITHUB
 *  VERIFICAR SE O USUARIO EXISTE NO DB
 *  --- SIM = GERAR UM TOKEN
 *  --- NAO = CRIA NO DB , GERA UM TOKEN
 * RETORNAR O TOKEN COM AS INFOS DO USER
 **/

import axios from "axios";

interface IAccessTokenResponse{
    access_token:string

}

class AuthenticateUserService {

    async execute(code:string){
        const url = 'https://github.com/login/oauth/access_token';

        //onde ta null e o body

        const {data: accessTokenResponse} = await  axios.post<IAccessTokenResponse>(url,null,{
            params:{
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers:{
                "Accept": "application/json"
            }
        });

        const response = await axios.get('https://api.github.com/user',{
            headers:{
                authorization: `Bearer ${accessTokenResponse.access_token}`
            }
        })

        return response.data;
    }

}

export {AuthenticateUserService}