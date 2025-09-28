# Autocomplete

## 📖 1. Resumo  
Esta tela apresenta um campo de pesquisa reativo que sugere termos para complementar a digitação do usuário. 

---

## 🎯 1.1 Ideia Central  
A aplicação contém um **campo de pesquisa** para que o usuário pesquise alguns **conceitos de RxJS**. Ao selecionar algum termo sua descrição aparece em um **card** abaixo.

## 🏗️ 2. Arquitetura da Página  

Esta página segue o padrão **Atomic Design**, organizado em:  

- **Atoms** → autocomplete-input, autocomplete-card.  
- **Pages** → Página final do Autocomplete.  

### 2.1. Comunicação dos Componentes  

- **autocomplete-input**
```ts
// Emissão
this.slugItem.emit(event: string);

// Uso no componente pai
  <app-autocomplete-input (slugItem)="handleSlug($event)"></app-autocomplete-input>
```
- **autocomplete-card** 
```ts
// Input
  @Input() description!: string;

// Uso no componente pai
  <app-autocomplete-card [description]="getDescription" *ngIf="getDescription"></app-autocomplete-card>

```
---

## 🔄 3. Conceitos RxJS Aplicados  

- **autocomplete-input** 

```ts

  results$!: Observable<IAutocomplete[]>;

  constructor(private autocompleteService: AutocompleteService) {
      this.results$ = this.searchControl.valueChanges.pipe(
        debounceTime(300), // espera o usuário parar de digitar
        distinctUntilChanged(), // só dispara se for valor diferente
        switchMap(term => this.autocompleteService.search(term ?? '')) // cancela requisições antigas
      );

      this.results$.subscribe(results => {
        this.menuOpen = results.length > 0;
      });
  }


```

Alguns operadores e práticas utilizados nesse componente:  

- `debounceTime` → evita execuções excessivas em eventos como digitação.  
- `distinctUntilChanged` → ignora valores repetidos.  
- `switchMap` → cancela requisições anteriores ao fazer novas.  
- `Observable` → Fluxo de dados assíncronos (nesse caso, os resultados da busca). Ele “promete” emitir valores ao longo do tempo, conforme o usuário digita.
- `Subscribe` → Forma de ouvir esse fluxo. Sempre que o Observable emite algo (lista de resultados), o subscribe executa a função passada, reagindo a esses valores.  

- **autocomplete-service** 

```ts

  private items: IAutocomplete[] = autocompleteArray;

  search(term: string): Observable<IAutocomplete[]> {
    if (!term.trim()) {
      return of([]);
    }

    return of(this.items).pipe(
      delay(500), // simula latência de rede
      map(items =>
        items.filter(item =>
          item.label.toLowerCase().includes(term.toLowerCase())
        )
      )
    );
  }

```

Alguns operadores e práticas utilizados nessa service:  

- `Trim` → Remove espaços em branco extras do início e fim da string, evitando buscas inválidas como " teste "
- `Of` → Cria um Observable que emite o valor informado (nesse caso, o array de itens).
- `Pipe` → Encadeia operadores RxJS para transformar ou manipular o fluxo do Observable.
- `Delay` → A trasa a emissão do valor por um tempo (aqui simula a latência de rede).
- `Map` → Transforma os valores emitidos pelo Observable (nesse caso, filtra os itens de acordo com o termo).
---

## 🔍 4. Testes Unitários  

### 