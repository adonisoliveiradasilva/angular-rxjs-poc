## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
# 🚀 POC - Gerenciamento de Estado com RxJS em Angular  

![Angular](https://img.shields.io/badge/Angular-v20-DD0031?style=for-the-badge&logo=angular&logoColor=white)  
![Node](https://img.shields.io/badge/Node.js-v20.19.4-339933?style=for-the-badge&logo=node.js&logoColor=white)  
![RxJS](https://img.shields.io/badge/RxJS-Reactive%20Programming-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)  

---

## 📖 1. Resumo  
Este projeto é uma **Prova de Conceito (POC)** para estudos de **gerenciamento de estado** utilizando **RxJS no Angular**, aplicando o padrão de arquitetura **Atomic Design**.  

O objetivo é **aprimorar habilidades técnicas** no controle de estados em componentes Angular e explorar conceitos reativos.  

---

## 🎯 1.1 Ideia Central  
A aplicação contém **8 páginas diferentes**, cada uma abordando **conceitos distintos de RxJS**.  

---

## 🛠️ 2. Requisitos  
- [Angular](https://angular.dev/) **v20**  
- [Node.js](https://nodejs.org/) **v20.19.4**  

---

## ⚡ 3. Inicialização do Projeto  

### 3.1 Instalar dependências  
```bash
npm install
```

### 3.2 Executar projeto
```bash
npm start
```

## 🏗️ 4. Arquitetura do Projeto  

Este projeto segue o padrão **Atomic Design**, organizado em:  

- **Atoms** → Elementos básicos (*inputs, botões, labels*).  
- **Molecules** → Combinação de átomos (ex: campo de busca com botão).  
- **Organisms** → Blocos complexos (ex: formulários, cards).  
- **Templates** → Estruturas que organizam organismos.  
- **Pages** → Páginas finais consumidas pelo usuário.  

Essa arquitetura ajuda a manter o **código escalável, reutilizável e organizado**.  

---

## 🔄 5. Conceitos RxJS Aplicados  

Alguns operadores e práticas utilizados no projeto:  

- `debounceTime` → evita execuções excessivas em eventos como digitação.  
- `distinctUntilChanged` → ignora valores repetidos.  
- `switchMap` → cancela requisições anteriores ao fazer novas.  
- `merge` / `combineLatest` → combinação de múltiplos observables.  
- `BehaviorSubject` → gerenciamento de estado reativo.  
- `takeUntil` → limpeza de observables e prevenção de memory leaks.  

---

## 📂 6. Páginas da Aplicação  

### 🔍 6.1 [AutoComplete](./docs/autocomplete.md)  
Campo de input que consulta uma **API simulada** conforme o usuário digita.  

### ⏱️ 6.2 Contador  
Um contador que pode ser **pausado** e **retomado** utilizando botões.  

<!-- > ⚡ Outras páginas exploram mais conceitos avançados de **RxJS** aplicados a casos práticos no Angular.   -->
