# Documentação do Projeto

## Descrição

Este projeto tem como objetivo criar uma aplicação completa para o gerenciamento de produtos e pedidos, utilizando uma arquitetura moderna baseada em microsserviços e mensageria. O backend é desenvolvido com NestJS e TypeORM, utilizando PostgreSQL como banco de dados. O frontend será construído com Angular, permitindo o envio e acompanhamento de produtos e pedidos. A comunicação e o processamento assíncrono de pedidos e produtos serão realizados através do RabbitMQ, garantindo escalabilidade e desacoplamento entre os serviços. Todo o ambiente será orquestrado utilizando Docker Swarm, facilitando o deploy, a escalabilidade e a gestão dos containers.


## Tecnologias Utilizadas

- **Frontend:** Angular
  - Interface para cadastro e acompanhamento de produtos e pedidos.
  - Comunicação com o backend via HTTP/REST.

- **Backend:** NestJS
  - Estrutura modular e escalável para APIs.
  - Utilização de TypeORM para integração com o banco de dados PostgreSQL.
  - Implementação de padrões de arquitetura limpa (Clean Architecture).

- **Banco de Dados:** PostgreSQL
  - Armazenamento persistente de produtos e pedidos.

- **Mensageria:** RabbitMQ
  - Processamento assíncrono de pedidos e produtos.
  - Comunicação entre diferentes microsserviços.

- **Orquestração de Containers:** Docker Swarm
  - Gerenciamento, deploy e escalabilidade dos serviços (backend, frontend, RabbitMQ, PostgreSQL).

## Funcionalidades Principais

- Cadastro de produtos via frontend Angular.
- Envio de pedidos e produtos para processamento assíncrono via RabbitMQ.
- Backend NestJS responsável por receber, validar e persistir os dados.
- Utilização de Docker Swarm para facilitar o deploy e a escalabilidade dos serviços.
- Estrutura preparada para expansão futura, como integração de novos microsserviços ou filas.

## Como Executar

1. **Clone o repositório.**
2. **Configure as variáveis de ambiente necessárias.**
3. **Utilize o Docker Swarm para subir todos os serviços:**
   - PostgreSQL
   - RabbitMQ
   - Backend (NestJS)
   - Frontend (Angular)
4. **Acesse o frontend Angular para cadastrar produtos e pedidos.**
5. **Acompanhe o processamento dos pedidos via backend e filas do RabbitMQ.**

## Observações

- O projeto está preparado para ambientes de desenvolvimento e produção.
- O uso do RabbitMQ permite o desacoplamento entre os serviços, facilitando a manutenção e escalabilidade.
- O Docker Swarm garante alta disponibilidade e facilidade de gerenciamento dos containers.

---

Sinta-se à vontade para contribuir ou sugerir melhorias!



