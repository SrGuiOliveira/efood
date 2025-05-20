# 🍽 eFood

eFood é um **e-commerce de restaurantes**, reunindo diversos estabelecimentos em um só lugar. A aplicação consome uma **API externa** para carregar os restaurantes disponíveis e seus respectivos cardápios, permitindo que os usuários **adicionem produtos ao carrinho** e finalizem pedidos por meio de um **formulário dinâmico**. A compra é processada via **API**, que retorna um **ID do pedido**. O site é totalmente responsivo.

## 🌐 Acesse o Projeto

A aplicação está hospedada na Vercel. Você pode acessá-la através do seguinte link:

👉 **[Lista Telefônica - Acesse Aqui](https://efood-rho-ten.vercel.app/)**

🚀 Funcionalidades
- Listagem de restaurantes disponíveis através da API.
- Visualização de cardápios e detalhes de cada estabelecimento.
- Adicionar produtos ao carrinho e calcular o valor total da compra.
- Formulário de finalização do pedido, com validação de dados via Formik & Yup.
- Integração com API para gerar ID do pedido na confirmação da compra.
- Interface responsiva, adaptada para desktops, tablets e smartphones.


## 🛠️ Tecnologias utilizadas

- **React** – Biblioteca para construção da interface
- **Redux Toolkit** – Gerenciamento de estado
- **React Router DOM** – Navegação entre páginas
- **Formik & Yup** – Validação de formulários
- **Styled Components** – Estilização dinâmica
- **TypeScript** – Tipagem estática
- **Vite** – Ferramenta de build otimizada
- **ESLint & Prettier** – Padronização de código

📦 Dependências Principais
- `@reduxjs/toolkit` para gerenciamento de estado.
- `react-router-dom` para navegação entre as páginas.
- `react-input-mask` para máscaras de input.
- `styled-components` para estilização.
- `formik` e `yup` para validação de formulários.

## 📝 Como Executar o Projeto Localmente

1. Clone este repositório:
   ```bash
  git clone https://github.com/seu-usuario/efood.git

2. Acesse a pasta do projeto:
    cd efood

3. Instale as dependências:
    npm install --legacy-peer-deps

4. Inicie o servidor de desenvolvimento:
    npm start
