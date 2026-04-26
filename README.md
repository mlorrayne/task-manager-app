# 📝 Sistema de Gestão de Tarefas (Java + Angular)

Este projeto é um exemplo de aplicação **fullstack** utilizando **Spring Boot** no backend e **Angular** no frontend.  
Objetivo: demonstrar CRUD completo (criar, listar, atualizar e excluir tarefas).

---

## 📂 Estrutura do Projeto

```
/task-manager
  ├── backend/ (Spring Boot)
  │     ├── src/main/java/com/example/taskmanager
  │     │       ├── controller/   # Endpoints REST
  │     │       ├── service/      # Regras de negócio
  │     │       ├── model/        # Entidades (Task)
  │     │       └── repository/   # Interface JPA
  │     └── pom.xml
  │
  ├── frontend/ (Angular)
  │     ├── src/app/
  │     │       ├── components/   # Componentes Angular
  │     │       ├── services/     # Comunicação com API
  │     │       └── models/       # Interfaces de dados
  │     └── package.json
  │
  └── docker-compose.yml
```



