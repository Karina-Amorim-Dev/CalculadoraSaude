# 🩺 Calculadora de Saúde

Aplicação web desenvolvida em **React** com o objetivo de disponibilizar cálculos relacionados à saúde de forma simples, intuitiva e acessível.

O projeto foi desenvolvido como parte do processo de aprendizado em **Desenvolvimento Web**, utilizando React, Vite, JavaScript, componentes reutilizáveis e navegação entre diferentes funcionalidades.

> ⚠️ **Aviso:** Esta aplicação possui finalidade educacional e informativa. Os resultados apresentados não substituem avaliação, diagnóstico ou orientação de profissionais da área da saúde.

---

## 📋 Sobre o projeto

A **Calculadora de Saúde** é uma aplicação web criada para reunir diferentes ferramentas de cálculo relacionadas à saúde em uma única interface.

A proposta é oferecer uma experiência simples para que o usuário possa informar seus dados, realizar os cálculos e visualizar os resultados de maneira clara.

O projeto também foi desenvolvido com foco em praticar conceitos importantes do desenvolvimento frontend moderno, como:

* Componentização com React
* Gerenciamento de estado
* Eventos e formulários
* Navegação entre páginas
* Organização de componentes
* Estilização com CSS
* Validação de dados
* Reutilização de código
* Estruturação de projetos frontend
* Versionamento utilizando Git e GitHub

---

## 🎯 Objetivos

O projeto tem como principais objetivos:

* Criar uma aplicação web utilizando React.
* Desenvolver uma interface simples e intuitiva.
* Praticar componentes reutilizáveis.
* Trabalhar com formulários e entrada de dados.
* Realizar cálculos automaticamente.
* Exibir resultados de forma organizada.
* Praticar navegação entre diferentes páginas.
* Aplicar conceitos de organização de projetos frontend.
* Utilizar Git e GitHub para controle de versão.

---

## ✨ Funcionalidades

A aplicação conta com uma área inicial e ferramentas de cálculo relacionadas à saúde.

### 🏠 Página inicial

A Home apresenta a proposta da aplicação e permite que o usuário navegue para as diferentes calculadoras disponíveis.

A página inicial funciona como ponto central da aplicação.

### 🧮 Calculadora de IMC

Permite calcular o **Índice de Massa Corporal (IMC)** a partir das informações fornecidas pelo usuário.

O cálculo utiliza:

**IMC = peso / altura²**

Após o cálculo, a aplicação apresenta o resultado e uma classificação correspondente.

### 📊 Resultado

Depois de realizar um cálculo, o usuário recebe o resultado diretamente na interface.

A apresentação do resultado foi pensada para facilitar a interpretação das informações.

### 🧭 Navegação

A aplicação possui navegação entre as páginas utilizando rotas, permitindo que o usuário acesse diferentes funcionalidades sem precisar recarregar manualmente a aplicação.

---

## 🛠️ Tecnologias utilizadas

### Frontend

* **React**
* **JavaScript**
* **HTML5**
* **CSS3**

### Ferramentas

* **Vite**
* **ESLint**
* **Git**
* **GitHub**
* **Visual Studio Code**

---

## ⚛️ React

O projeto utiliza React para construção da interface através de componentes.

A utilização de componentes permite organizar melhor a aplicação e facilitar a manutenção e evolução do código.

Entre os conceitos praticados estão:

* Componentes funcionais
* Props
* Hooks
* Estado
* Eventos
* Formulários
* Renderização condicional
* Componentização

---

## ⚡ Vite

O projeto utiliza **Vite** como ferramenta de desenvolvimento e build.

O Vite proporciona um ambiente rápido para desenvolvimento frontend, incluindo:

* Servidor de desenvolvimento
* Hot Module Replacement (HMR)
* Build para produção
* Integração com React

---

## 📂 Estrutura do projeto

A estrutura principal do projeto está organizada da seguinte maneira:

```text
CalculadoraSaude/
│
├── public/
│   └── arquivos públicos da aplicação
│
├── src/
│   ├── assets/
│   │   └── imagens e outros recursos
│   │
│   ├── components/
│   │   └── componentes reutilizáveis
│   │
│   ├── pages/
│   │   └── páginas da aplicação
│   │
│   ├── App.jsx
│   │   └── componente principal
│   │
│   ├── main.jsx
│   │   └── ponto de entrada da aplicação
│   │
│   └── arquivos CSS
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

> A estrutura pode evoluir conforme novas funcionalidades forem adicionadas ao projeto.

---

## 🚀 Como executar o projeto

Para executar o projeto localmente, primeiro é necessário ter o **Node.js** instalado.

### 1. Clonar o repositório

```bash
git clone https://github.com/Karina-Amorim-Dev/CalculadoraSaude.git
```

### 2. Entrar na pasta do projeto

```bash
cd CalculadoraSaude
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar o projeto

```bash
npm run dev
```

Depois disso, o Vite disponibilizará a aplicação em um endereço local indicado pelo terminal, normalmente:

```text
http://localhost:5173
```

---

## 📦 Scripts disponíveis

Os principais comandos disponíveis no projeto são:

### Desenvolvimento

```bash
npm run dev
```

Executa o servidor de desenvolvimento.

### Build

```bash
npm run build
```

Gera a versão otimizada da aplicação para produção.

### Preview

```bash
npm run preview
```

Executa uma prévia da versão gerada pelo build.

### Lint

```bash
npm run lint
```

Executa o ESLint para verificar possíveis problemas no código.

---

## 🧪 Validação

Durante o desenvolvimento, recomenda-se verificar:

* Funcionamento das calculadoras.
* Validação dos campos.
* Comportamento com valores inválidos.
* Navegação entre páginas.
* Exibição correta dos resultados.
* Funcionamento em diferentes tamanhos de tela.
* Ausência de erros no console do navegador.

---

## 🔐 Segurança e privacidade

O projeto não deve armazenar informações pessoais ou dados sensíveis de usuários.

Arquivos de configuração local e variáveis de ambiente não devem ser enviados para o repositório.

O arquivo `.gitignore` possui regras para evitar o versionamento de arquivos desnecessários, incluindo:

```text
node_modules/
dist/
dist-ssr/
.env
```

---

## ⚠️ Limitações

A Calculadora de Saúde é um projeto educacional.

Os cálculos apresentados têm finalidade informativa e não devem ser utilizados como única base para decisões relacionadas à saúde.

Para avaliações, diagnósticos ou recomendações personalizadas, procure um profissional qualificado da área da saúde.

---

## 🔮 Próximos passos

Algumas funcionalidades que podem ser adicionadas futuramente:

* [ ] Adicionar novas calculadoras de saúde
* [ ] Melhorar a responsividade
* [ ] Criar modo claro/escuro
* [ ] Adicionar histórico de cálculos
* [ ] Melhorar mensagens de validação
* [ ] Adicionar animações à interface
* [ ] Criar página de informações sobre cada cálculo
* [ ] Melhorar acessibilidade
* [ ] Criar testes automatizados
* [ ] Realizar deploy da aplicação
* [ ] Disponibilizar uma demonstração online

---

## 📚 Aprendizados

O desenvolvimento deste projeto proporciona prática em diversas áreas do desenvolvimento frontend, principalmente:

* Desenvolvimento de interfaces com React
* Organização de componentes
* JavaScript moderno
* Manipulação de estados
* Formulários
* Validação de dados
* Rotas e navegação
* CSS
* Estruturação de projetos
* NPM
* Vite
* ESLint
* Git
* GitHub

---

## 💻 Desenvolvimento

Projeto desenvolvido utilizando **React + Vite**.

O projeto faz parte da evolução prática no desenvolvimento de aplicações web e tem como objetivo fortalecer conhecimentos em frontend e boas práticas de desenvolvimento.

---

## 👩‍💻 Autora

**Karina Amorim**

Desenvolvedora em formação na área de **Análise e Desenvolvimento de Sistemas**.

GitHub:

**Karina-Amorim-Dev**

---

## 📌 Repositório

O código-fonte deste projeto está disponível no GitHub:

**CalculadoraSaude**

```text
https://github.com/Karina-Amorim-Dev/CalculadoraSaude
```


