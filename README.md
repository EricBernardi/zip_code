Projeto Node.js

Clone o repositório:

git clone https://github.com/EricBernardi/zip_code.git

Instale as dependências:

npm install

Crie um arquivo .env na raiz do projeto e adicione a seguinte linha, substituindo sua-chave-secreta pela sua chave secreta:

PASSWORD_1=sua-chave-secreta
PASSWORD_2=outra-chave-secreta

USO

Inicie o servidor:

npm start

Faça uma requisição para obter dados de um CEP (Preferivel que seja utilizado o Postman ou Insomnia) (substitua seu-cep-aqui pelo CEP desejado):

curl -u admin:password -X POST http://localhost:3000/seu-cep-aqui

Observação: substitua <password> pela chave que você adicionou no .env.

Exemplo de Requisição

curl -u admin:password -X POST http://localhost:3000/01001000