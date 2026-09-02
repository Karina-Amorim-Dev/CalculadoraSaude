# 🩺 Calculadora de Saúde

Aplicação web desenvolvida em **React** com o objetivo de disponibilizar cálculos relacionados à saúde e ao bem-estar de forma simples, organizada e intuitiva.

O projeto reúne **três calculadoras principais**:

* ⚖️ **IMC** — Índice de Massa Corporal
* 🔥 **TMB** — Taxa Metabólica Basal
* 💧 **Hidratação** — Estimativa da quantidade diária de água

Além das calculadoras, a aplicação possui uma **Home explicativa** e um sistema de navegação entre as diferentes funcionalidades.

> **Importante:** os resultados apresentados pelas calculadoras são estimativas e possuem finalidade exclusivamente informativa e educacional. Eles não substituem avaliação, diagnóstico ou orientação de profissionais de saúde.

---

## 📌 Sobre o projeto

A **Calculadora de Saúde** foi desenvolvida como um projeto prático para aplicar conhecimentos de desenvolvimento web utilizando **React**.

A proposta é criar uma aplicação simples, visualmente organizada e fácil de utilizar, permitindo que o usuário informe seus dados e obtenha rapidamente uma estimativa relacionada à sua saúde.

O projeto também tem como objetivo colocar em prática conceitos importantes do desenvolvimento frontend, como:

* Componentização;
* Rotas;
* Navegação entre páginas;
* Manipulação de estados;
* Eventos;
* Formulários;
* Validação de dados;
* Cálculos utilizando JavaScript;
* Organização de arquivos;
* Estilização com CSS;
* Desenvolvimento de interfaces utilizando React.

---

# 🎯 Objetivos

## Objetivo geral

Desenvolver uma aplicação web utilizando React capaz de realizar cálculos básicos relacionados à saúde e apresentar os resultados de maneira clara e intuitiva.

## Objetivos específicos

* Criar uma interface simples e organizada;
* Desenvolver uma página inicial explicativa;
* Criar diferentes páginas para cada calculadora;
* Implementar navegação entre as páginas;
* Trabalhar com componentes reutilizáveis;
* Utilizar estados e eventos do React;
* Realizar cálculos utilizando JavaScript;
* Validar informações inseridas pelo usuário;
* Apresentar os resultados de forma clara;
* Praticar conceitos de desenvolvimento frontend;
* Utilizar Git e GitHub para versionamento do projeto.

---

# 🧮 Calculadoras

## ⚖️ IMC — Índice de Massa Corporal

A calculadora de **IMC** utiliza o peso e a altura informados pelo usuário para calcular o Índice de Massa Corporal.

### Fórmula

```text
IMC = peso / (altura × altura)
```

O resultado é apresentado juntamente com uma classificação correspondente à faixa de IMC.

### Dados utilizados

* Peso;
* Altura.

### Exemplo

```text
Peso: 70 kg
Altura: 1,70 m

IMC ≈ 24,22
```

> O IMC é um indicador geral e não deve ser utilizado isoladamente para avaliar o estado de saúde de uma pessoa.

---

## 🔥 TMB — Taxa Metabólica Basal

A calculadora de **TMB** estima a quantidade de energia que o organismo necessita para manter suas funções básicas em repouso.

Dependendo dos dados utilizados pela aplicação, o cálculo pode considerar informações como:

* Peso;
* Altura;
* Idade;
* Sexo.

O resultado é apresentado em **calorias por dia (kcal/dia)**.

### Objetivo

A calculadora foi criada para demonstrar como diferentes informações fornecidas pelo usuário podem ser utilizadas em uma fórmula para gerar uma estimativa.

> A TMB é uma estimativa e não representa necessariamente a necessidade calórica total diária de uma pessoa.

---

## 💧 Hidratação

A calculadora de **Hidratação** fornece uma estimativa da quantidade de água que uma pessoa pode consumir diariamente com base nos dados informados.

### Objetivo

Facilitar a visualização de uma estimativa de consumo diário de água.

O resultado pode ser apresentado em unidades como:

```text
Litros por dia
```

> A necessidade de hidratação pode variar de acordo com diversos fatores, como clima, atividade física, alimentação e condições individuais. O resultado da calculadora é apenas uma estimativa.

---

# 🏠 Home

A página inicial apresenta o projeto e explica de forma resumida a finalidade das calculadoras disponíveis.

Na Home, o usuário pode conhecer as funcionalidades da aplicação e acessar as calculadoras através do menu de navegação.

### 📸 Screenshot da Home

<img width="1885" height="902" alt="Home" src="https://github.com/user-attachments/assets/db01bd60-285a-4c92-8612-5abdc9aa8012" />
<img width="1892" height="797" alt="Home1" src="https://github.com/user-attachments/assets/2eb29684-01bf-4a2b-bf47-49c79036a3ec" />

---

# ⚖️ Tela — IMC

A tela de IMC permite que o usuário informe os dados necessários para realizar o cálculo do Índice de Massa Corporal.

### 📸 Screenshot da calculadora de IMC

<img width="797" height="736" alt="IMC" src="https://github.com/user-attachments/assets/4ca70186-c653-4a11-a9f0-9784f0dfdc75" />

---

# 🔥 Tela — TMB

A tela de TMB permite que o usuário informe os dados necessários para realizar a estimativa da Taxa Metabólica Basal.

### 📸 Screenshot da calculadora de TMB

<img width="786" height="676" alt="TMB" src="https://github.com/user-attachments/assets/66afe0e1-e350-4ffe-922b-cd3f980449a3" />
<img width="812" height="397" alt="TMB1" src="https://github.com/user-attachments/assets/faae2f08-089f-44b3-94a3-49da75007f36" />

---

# 💧 Tela — Hidratação

A tela de Hidratação permite que o usuário informe seus dados e obtenha uma estimativa de consumo diário de água.

### 📸 Screenshot da calculadora de Hidratação

<img width="797" height="567" alt="Hidratacao" src="https://github.com/user-attachments/assets/05249760-a3e0-4673-a93c-32d5e908e3ac" />

---

# 🖥️ Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

| Tecnologia      | Utilização                            |
| --------------- | ------------------------------------- |
| ⚛️ React        | Desenvolvimento da interface          |
| 🟨 JavaScript   | Lógica e cálculos                     |
| 🌐 HTML5        | Estrutura das páginas                 |
| 🎨 CSS3         | Estilização                           |
| ⚡ Vite          | Ferramenta de desenvolvimento e build |
| 🧭 React Router | Navegação entre páginas               |
| 🧹 ESLint       | Padronização e análise do código      |
| 📦 npm          | Gerenciamento de dependências         |
| 🔧 Git          | Controle de versão                    |
| 🐙 GitHub       | Hospedagem do código                  |

---

# ⚛️ Conceitos de React utilizados

Durante o desenvolvimento da aplicação foram trabalhados conceitos importantes do React.

### Componentes

A interface é dividida em componentes, facilitando a organização e manutenção do código.

### Props

Permitem a comunicação e passagem de informações entre componentes quando necessário.

### Estado

Utilizado para controlar informações inseridas pelo usuário e resultados dos cálculos.

### Eventos

Utilizados para responder às ações realizadas pelo usuário, como:

* Digitar informações;
* Clicar em botões;
* Enviar formulários.

### React Router

Utilizado para permitir a navegação entre as diferentes páginas da aplicação.

---

# 📁 Estrutura do projeto

A estrutura do projeto é organizada seguindo a proposta de uma aplicação React.

```text
CalculadoraSaude/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │
│   ├── pages/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```

> A estrutura pode ser atualizada conforme novos componentes e funcionalidades forem adicionados ao projeto.

---

# 🚀 Como executar o projeto

## 1. Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* **Node.js**
* **npm**
* **Git**
* **Visual Studio Code** ou outro editor de código.

---

## 2. Clonar o projeto

No terminal, execute:

```bash
git clone
```

Depois entre na pasta do projeto:

```bash
cd CalculadoraSaude
```

---

## 3. Instalar as dependências

Execute:

```bash
npm install
```

Esse comando instala todas as dependências necessárias definidas no `package.json`.

---

## 4. Executar o projeto

Execute:

```bash
npm run dev
```

O Vite irá iniciar o servidor de desenvolvimento.

O terminal apresentará o endereço local para acessar a aplicação.

Normalmente será algo semelhante a:

```text
http://localhost:5173
```

---

# 📦 Scripts disponíveis

No arquivo `package.json`, o projeto possui comandos para diferentes tarefas.

### Executar o projeto

```bash
npm run dev
```

Inicia o servidor de desenvolvimento.

### Gerar versão de produção

```bash
npm run build
```

Cria a versão otimizada da aplicação para produção.

### Visualizar o build

```bash
npm run preview
```

Permite visualizar localmente a versão gerada pelo build.

### Verificar o código

```bash
npm run lint
```

Executa o ESLint para identificar possíveis problemas no código.

---

# 🧪 Testes manuais

Antes de considerar uma versão do projeto concluída, é importante verificar as principais funcionalidades.

### Home

* [x] A Home abre corretamente;
* [x] O conteúdo explicativo aparece corretamente;
* [x] O menu é exibido;
* [x] Os links funcionam.

### IMC

* [x] Os campos podem ser preenchidos;
* [x] O cálculo é realizado;
* [x] O resultado aparece corretamente;
* [ ] Valores inválidos são tratados.

### TMB

* [x] Os campos podem ser preenchidos;
* [x] O cálculo é realizado;
* [x] O resultado aparece corretamente;
* [ ] Valores inválidos são tratados.

### Hidratação

* [x] Os campos podem ser preenchidos;
* [x] O cálculo é realizado;
* [x] O resultado aparece corretamente;
* [ ] Valores inválidos são tratados.

### Navegação

* [x] O menu leva para a Home;
* [x] O menu leva para IMC;
* [x] O menu leva para TMB;
* [x] O menu leva para Hidratação;
* [x] Os links funcionam corretamente;
* [x] O usuário consegue retornar para a Home.

---

# 🔐 Segurança e privacidade

A aplicação foi desenvolvida como um projeto frontend e não necessita, em sua versão atual, do armazenamento de informações pessoais em um banco de dados.

Os dados informados nas calculadoras são utilizados para realizar os cálculos apresentados na própria aplicação.

Recomenda-se não inserir informações pessoais desnecessárias.

---

# ⚠️ Limitações

A aplicação possui finalidade **educacional e informativa**.

Os resultados apresentados são estimativas matemáticas e não devem ser considerados como diagnóstico ou recomendação médica.

A aplicação não substitui:

* Médicos;
* Nutricionistas;
* Educadores físicos;
* Outros profissionais de saúde.

---

# 🔮 Melhorias futuras

Algumas funcionalidades que podem ser adicionadas futuramente:

* [ ] Melhorar a responsividade para celulares;
* [ ] Criar modo escuro;
* [ ] Melhorar as animações da interface;
* [ ] Adicionar mais calculadoras;
* [ ] Adicionar histórico de resultados;
* [ ] Criar gráficos;
* [ ] Melhorar a acessibilidade;
* [ ] Adicionar testes automatizados;
* [ ] Criar sistema de usuários;
* [ ] Permitir salvar resultados;
* [ ] Criar uma API;
* [ ] Adicionar banco de dados;
* [ ] Publicar a aplicação em produção.

---

# 📚 Aprendizados

O desenvolvimento deste projeto permitiu praticar conceitos relacionados ao desenvolvimento frontend e ao ecossistema React.

Entre os principais conhecimentos trabalhados estão:

* Desenvolvimento de aplicações React;
* Criação e organização de componentes;
* Utilização de JavaScript;
* Manipulação de estados;
* Eventos;
* Formulários;
* Validação de dados;
* Cálculos matemáticos;
* Navegação entre páginas;
* React Router;
* CSS;
* Vite;
* npm;
* ESLint;
* Git;
* GitHub;
* Organização de projetos.

---

# 🌱 Evolução do projeto

O projeto foi desenvolvido de maneira incremental, permitindo adicionar novas funcionalidades conforme os conhecimentos foram sendo adquiridos.

A ideia é continuar utilizando a aplicação como forma de praticar desenvolvimento web e, futuramente, evoluí-la para uma solução mais completa.

---

# 👩‍💻 Autora

**Karina Amorim**

Projeto desenvolvido como parte dos estudos em **Análise e Desenvolvimento de Sistemas**.

---

# 🐙 Repositório

O projeto está disponível no GitHub como:

**CalculadoraSaude**

---

# 📄 Licença

Este projeto foi desenvolvido para fins **educacionais e de aprendizado**.

---

# ⭐ Considerações finais

A **Calculadora de Saúde** reúne três ferramentas em uma única aplicação:

```text
⚖️ IMC
   ↓
Índice de Massa Corporal

🔥 TMB
   ↓
Taxa Metabólica Basal

💧 Hidratação
   ↓
Estimativa de consumo de água
```

O projeto representa uma aplicação prática dos conhecimentos adquiridos em desenvolvimento web com **React, JavaScript, HTML, CSS, Vite, Git e GitHub**.

---

## 💡 Status do projeto

🚧 **Em desenvolvimento**

Novas funcionalidades e melhorias poderão ser adicionadas conforme a evolução do projeto.
