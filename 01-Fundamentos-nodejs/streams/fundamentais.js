
// process.stdin  // leitura
//    .pipe(process.stdout);  // escrevendo


import {Readable , Writable, Transform } from "node:stream"

class OneToHundreadStream extends Readable {
    index = 1 
    
    _read(){
        const i = this.index++

        setTimeout(() => {
            if(i > 100){
            this.push(null) // usado fornecer para quem esta usando 
        }else{
            const buff = Buffer.from(String(i)) // converte para buff 

            this.push(buff)
        }
        
          }, 1000)

    }
}

class InvertNumberStream extends Transform{
     _transform(chunk, enconding, callback){
        const transformed  = Number(chunk.toString()) * -1

        callback(null, Buffer.from(String(transformed)))
    }
}

class MultiplayByTenStream  extends Writable  {
    _write(chunk, enconding , callback) {
        console.log(Number(chunk.toString()) * 10)
        callback();
        
    }
}


new OneToHundreadStream()

.pipe(new InvertNumberStream()) 
.pipe(new MultiplayByTenStream());
