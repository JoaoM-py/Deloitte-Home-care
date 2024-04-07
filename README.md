<h1 align="center"> Backend para desafio de sistema Home Care</h1>

API que permite gerenciamento de aparelhos home care.

### :hammer_and_wrench: Tecnologias

As seguintes tecnologias e ferramentas foram utilizadas neste projeto: `Typescript, Mongoose, MongoDB, Insomnia`

### :gear: Como utilizar

É exencial rodar primeiro esta API antes do projeto frontend [link](https://github.com/JoaoM-py/Deloitte-home-care-web), e também utilizar uma conexão com um banco [mongo](https://www.mongodb.com/pt-br/cloud/atlas/register) 

- Tutorial para rodar o projeto

```bash
# Baixe este repositório ou clone pelo Git usando o comando:
$ git clone https://github.com/JoaoM-py/Deloitte-Home-care.git

# criar um arquivo chamado ".env" e copiar a estrutura do arquivo ".env.example" e colocar seus respectivos dados

# instale as dependencias
$ npm install

# Inicie o Projeto
$ npm start
```
O servidor inciará localmente na porta 3001. Use o Insomnia ou postman para simular requisições e respostas das rotas (pelo link [https://localhost:3001](https://localhost:3001))

Caso queira usar o Insomnia para testar as rotas, use o arquivo Insomnia_2024-02-09.json para importar as requisições.

## :railway_track: Rotas disponíveis
<div align="center">
  
|                                                                    Tipo | Rota                               | Ação                                |
| ----------------------------------------------------------------------: | :--------------------------------- | :---------------------------------- |
|   [![](https://img.shields.io/badge/POST-4682B4?style=for-the-badge)]() | `/deviceData`                      | Cadastro de aparelhos               |
|    [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | `/devices/`                        | Listagem de aparelhos               |
|    [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | `/devices/on`                      | Aparelhos com status On             |
|    [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | `/devices/off`                     | Aparelhos com status Off            |
|    [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | `/devices/last_report`             | Aparelhos reportados nos ultimo 30min|
|    [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | `/devices/warning`                 | Aparelhos a 24h sem reportar        |
|    [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | `/devices/critical`                | Aparelhos a +24h sem reportar       |
|    [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | `/devices/bad_config`              | Aparelhos que emitiram erro de configuração|

</div>

### Explicação da estrutura das pastas

| Pasta                                             | Definição                                                                                  |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| :open_file_folder: src/                           | Arquivos com o código fonte do projeto                                                     |
| :open_file_folder: src/controllers                | Arquivos com os métodos de requisição das rotas                                            |
| :open_file_folder: src/database                   | Arquivos para sincronizar o banco de dados                                                 |
| :open_file_folder: src/routes.ts                  | Arquivo para gerenciar as rotas do projeto                                                 |
| :open_file_folder: src/services                   | Arquivos para funções mais complexas                                                       |
| :open_file_folder: src/services                   | Arquivos para funções mais especificas e modelos                                           |
| :page_facing_up: src/index.ts                     | Arquivo principal de inicialização do projeto                                              |
