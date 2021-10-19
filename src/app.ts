import "dotenv/config";
import express from 'express';
import http  from 'http';
import cors from 'cors';
import { Server } from "socket.io";

import { router } from "./routes";

const app = express();
app.use(cors());
//cors e responsavel por barrar req

//criar o server http para ter acesso ao io
const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
    cors:{
        origin:"*"
    }
});
//cors ta liberando qualquer origem

io.on("connection", socket =>{
    console.log(`Usuario conectado no socket ${socket.id}`);
});

app.use(express.json());

app.use(router);

app.get('/github', (req,res)=>{
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
})
app.get('/signin/callback', (req, res)=>{
    const {code} = req.query;

    return res.json({code});
});

serverHttp.listen(process.env.PORT,()=>console.log(` Server is running on PORT 4000`));