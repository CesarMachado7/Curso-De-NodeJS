import http from "node:http";

// req : pega requisicao 
// res : manda uma resposta 

const server = http.createServer((req , res)=> {
    const {method, url} = req

    if (method == "GET" && url === "users"){
       return res.end("Listagem de usuarios")
    }

    if(method == "POST" && url === "users"){
        return res.end("criacao de usuarios")
    }

    return res.end("Hello Rodrigao")
})

server.listen(8080);
