import http from "node:http";

// req : pega requisicao 
// res : manda uma resposta 

const server = http.createServer((req , res)=> {
return res.end("Hello World")

})

server.listen(8080);
