# Projeto Node.js

<strong>PRIMEIROS PASSOS</strong>

- `Clone o repositório`: git clone https://github.com/EricBernardi/zip_code.git

- `Instale as dependências`: npm install

- `Crie um arquivo .env na raiz do projeto e adicione a seguinte linha, substituindo sua-chave-secreta pela sua chave secreta`: PASSWORD_1=sua-chave-secreta, PASSWORD_2=outra-chave-secreta

<strong>USO</strong>

- `Compile o código`: npx tsc

- `Inicie o servidor`: npm start

- `Faça uma requisição para obter dados de um CEP (Preferivel que seja utilizado o Postman ou Insomnia) (substitua seu-cep-aqui pelo CEP desejado)`: curl -u admin:password -X POST http://localhost:3000/seu-cep-aqui

- `Usando o Postman`: É necessário inserir a URL e acessar a aba *Authorization* com o tipo definido como Basic Auth, após isso preencher o campo de *Username* com o id do usuário e também o campo *Password* com a respectiva senha.

*Observação: substitua - password - pela chave que você adicionou no .env.*

<strong>EXEMPLO DE REQUISIÇÃO</strong>

- `curl -u admin:password -X POST` http://localhost:3000/89021001


# Tecnologias utilizadas

- `Node.js`