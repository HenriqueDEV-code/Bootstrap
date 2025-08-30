# Bootstrap - Modo Camadas

Este projeto utiliza o padrão de arquitetura em camadas para organizar o código de forma clara, separando responsabilidades e facilitando a manutenção e escalabilidade da aplicação. Abaixo, explicamos cada uma das principais páginas (camadas) do projeto:

## 1. **Page (Apresentação/Interface)**

A camada de `Page` é responsável pela interface com o usuário. Aqui ficam os componentes visuais, formulários, botões e toda a lógica de interação direta com o usuário. Esta camada recebe dados das camadas inferiores (geralmente via controllers ou view models) e exibe de forma amigável.

**Exemplo:**  
- `HomePage`
- `LoginPage`
- `DashboardPage`

## 2. **Controller (Controle/Intermediação)**

A camada de `Controller` faz a ponte entre a interface (Page) e as regras de negócio (Service). Ela recebe as ações do usuário, processa os dados necessários e chama os serviços apropriados. Também é responsável por tratar respostas e erros, repassando informações para a Page.

**Exemplo:**  
- `LoginController`
- `UserController`

## 3. **Service (Serviços/Lógica de Negócio)**

A camada de `Service` contém a lógica de negócio da aplicação. Aqui ficam as regras, validações e operações principais que não dependem da interface. Os serviços podem acessar repositórios para buscar ou salvar dados.

**Exemplo:**  
- `AuthService`
- `UserService`

## 4. **Repository (Repositório/Persistência de Dados)**

A camada de `Repository` é responsável pelo acesso a dados, seja em banco de dados, APIs externas ou arquivos locais. Ela abstrai a origem dos dados, fornecendo métodos para leitura e escrita.

**Exemplo:**  
- `UserRepository`
- `ProductRepository`

## 5. **Model (Modelos/Entidades)**

A camada de `Model` define as estruturas de dados utilizadas em toda a aplicação. São as classes que representam os objetos principais do domínio, como Usuário, Produto, etc.

**Exemplo:**  
- `UserModel`
- `ProductModel`

---

## Resumo Visual
