import http from 'node:http';

import {Transform} from "node:stream"

class InvertNumberStream extends Transform{
     _transform(chunk, enconding, callback){
        const transformed  = Number(chunk.toString()) * -1

        console.log(transformed)

        callback(null, Buffer.from(String(transformed)))
    }
}

// req -> ReadbleStream
// res -> WritableStream

const server = http.createServer(async (req, res) => {
 const buffers =[]

 for await (const chunk of req){
   buffers.push(chunk)
 }

  const fullbodyStreamContent = Buffer.concat(buffers).toString()

  console.log(fullbodyStreamContent)

  return res.end(fullbodyStreamContent)

 
  // return req
  // .pipe(new InvertNumberStream())
  // .pipe(res)

})

server.listen(8081);