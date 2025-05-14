# Curso-De-NodeJ


### Rotas 

- Sao meios de entradas e formas do front end executar diferentes oepracoes dentro do back end  


### HTTP

#### METODOS HTTP 

- GET - POST - PUT -PATCH - DELETE 

- GET: Buscar um recurso do back end 
- POST: Criar um recurso no back end 
- PUT: Atualizar um recurso no back end 
- PATCH: E usado para atulizar uma informacao especifica de um recruso no back end 
- DELETE: É para deletar um recurso  no back end 

#### STATEFULL: Quando nao tem um base de dados 
#### Stateless: Quando ultizia uma base de dados 

Cabecalhos (metadado): Informacoes adicionais que nao tem haver com o dado retornado do back pro front mais sim a forma em que o front interpreta

#### HTTP STATUS CODE

- Sao codigos que demonstram oq aconteceu com o site

- Informational Responses (100–199): Informativo – O pedido foi recebido, continue.
- Successful Responses (200–299): sucesso na criacao
- Redirection Messages (300–399): Redirecionamento – O recurso está em outro lugar.
- Client Error Responses (400–499): aparece quando o front manda algo de errado para o back 
- Server Error Responses (500–599): erro no lado do servidor 

#### Streams 

##### O que e 

- Ler dados sem ter lido todo o arquivo, (lendo por partes)

Ex: ele cosegue ler e processar um arquivo de 1gb no banco de dados

- Readble Streams : Upload no banco de dados 
- Writeble Streams : Netflix 

Toda porta de entrada e saida e um stream

stdin: tudo oq o usuario digita no terminal


Readble Streams:

            this.push(null) // usado fornecer informacao para quem esta usando 


Writeble Streams 

            chunck : e o pedaco que lemos da stream de leitura 
            enconding: como a informacao esta codificada
            callback: e uma funcao que a stream de escrita chama ao terminar de fazer oq precisa 


#### Fetch api:
e uma api que e usada para trabalhar com requisicoes e respostas na web 

pipe: encadear streams 