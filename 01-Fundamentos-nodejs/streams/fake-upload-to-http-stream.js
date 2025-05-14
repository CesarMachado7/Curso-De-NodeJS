import {Readable} from "node:stream";

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
const stream = Readable.toWeb(new OneToHundreadStream())

fetch('http://localhost:8081', {
    method: "POST",
    body: new OneToHundreadStream(),
    duplex: 'half',
    
})