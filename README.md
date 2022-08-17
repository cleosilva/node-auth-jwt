<h1 align = "center">Api Node de Autenticação com JWT</h1>
<h1 align="center">
    <a href="https://nodejs.org/en/">🔗 Node.js</a>
</h1>

### Finalidade da aplicação
A API tem como finalidade resgistrar um usuário no banco de dados utilizando MongoDB e realizar o login autenticado utilizando a biblioteca [JWT](https://www.npmjs.com/package/jsonwebtoken) (jasonwetoken). Realizando algumas verificações através de token.

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
Você pode utilizar o [Postman](https://www.postman.com/downloads/) para testar a api.

### 🎲 Rodando a API

```bash
# Clone este repositório
$ git clone <https://github.com/cleosilva/node-auth-jwt>

# Acesse a pasta do projeto no terminal/cmd
$ cd node-auth-jwt

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```
### Dependencias
<img src="https://img.shields.io/badge/express-v4.18.1-blue"/> <img src="https://img.shields.io/badge/dotenv-v16.0.1-green"/> <img src="https://img.shields.io/badge/bcrypt-v5.0.1-brightgreen"/> <img src="https://img.shields.io/badge/jsonwebtoken-v8.5.1-yellow"/> <img src="https://img.shields.io/badge/mongoose-v6.5.2-orange"/>
