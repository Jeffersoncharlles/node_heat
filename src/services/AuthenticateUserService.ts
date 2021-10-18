/**
 *  RECEBER CODE (STRING)
 *  RECUPERAR O ACCESS_TOKEN NO GITHUB
 *  VERIFICAR SE O USUARIO EXISTE NO DB
 *  --- SIM = GERAR UM TOKEN
 *  --- NAO = CRIA NO DB , GERA UM TOKEN
 * RETORNAR O TOKEN COM AS INFOS DO USER
 **/

import axios from "axios";

class AuthenticateUserService {

    async execute(code:string){
        const url = 'https://github.com/login/oauth/access_token';

        //onde ta null e o body

        const response = await  axios.post(url,null,{
            params:{
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers:{
                "Accept": "application/json"
            }
        });

        return response.data;
    }

}

export {AuthenticateUserService}