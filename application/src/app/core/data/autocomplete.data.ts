import { IAutocomplete } from "../models/IAutocomplete.model";

export const autocompleteArray: IAutocomplete[] = [
  {
    slug: "debounceTime",
    label: "debounceTime",
    description:
      "O operador debounceTime atrasa a emissão dos valores de um Observable por um período de tempo especificado. Isso é útil em situações como buscas em tempo real, evitando disparar requisições a cada tecla pressionada pelo usuário.\n\nNa prática, ele aguarda um intervalo de inatividade antes de emitir o valor final. Assim, melhora a performance e reduz chamadas desnecessárias à API."
  },
  {
    slug: "distinctUntilChanged",
    label: "distinctUntilChanged",
    description:
      "Esse operador emite valores somente quando eles são diferentes do último valor emitido. Ele é muito útil para evitar processamento redundante em situações onde o mesmo valor pode ser emitido várias vezes.\n\nNo Angular, é comum em formulários ou inputs, garantindo que chamadas a APIs só aconteçam quando realmente há uma mudança significativa."
  },
  {
    slug: "switchMap",
    label: "switchMap",
    description:
      "O switchMap mapeia um valor emitido para um novo Observable, cancelando automaticamente requisições anteriores em andamento. Isso é ideal para buscas e cenários onde apenas a resposta mais recente interessa.\n\nEle ajuda a prevenir condições de corrida e desperdício de recursos quando múltiplas requisições são disparadas rapidamente."
  },
  {
    slug: "httpClient",
    label: "HttpClient",
    description:
      "No Angular, o HttpClient é um serviço que retorna Observables ao realizar chamadas HTTP. Ele se integra perfeitamente com RxJS, permitindo compor fluxos reativos com operadores como map, catchError e retry.\n\nAlém disso, seu uso promove uma abordagem declarativa e enxuta para lidar com requisições assíncronas."
  },
  {
    slug: "interval",
    label: "interval",
    description:
      "O operador interval cria um Observable que emite números sequenciais a cada intervalo de tempo definido. É bastante útil para criar timers, polling e animações reativas.\n\nEle funciona de forma infinita até que seja explicitamente parado ou combinado com outros operadores como take ou takeUntil."
  },
  {
    slug: "takeUntil",
    label: "takeUntil",
    description:
      "Esse operador completa um Observable quando outro Observable emite um valor. É muito utilizado em Angular para gerenciar ciclos de vida e evitar memory leaks.\n\nUm caso comum é parar uma assinatura quando o componente é destruído, garantindo que não fiquem observadores ativos consumindo recursos."
  },
  {
    slug: "subject",
    label: "Subject",
    description:
      "O Subject é um tipo especial de Observable que também é Observer. Ele permite enviar valores para múltiplos inscritos ao mesmo tempo, funcionando como um canal de comunicação.\n\nNo Angular, é amplamente usado para eventos compartilhados, como comunicação entre componentes e gerenciamento de estados locais."
  },
  {
    slug: "scan",
    label: "scan",
    description:
      "O scan funciona como o reduce, mas em um fluxo contínuo. Ele acumula valores emitidos e emite o estado acumulado a cada nova entrada.\n\nEsse operador é útil para criar contadores, listas incrementais e estados derivados sem precisar recorrer a variáveis externas."
  },
  {
    slug: "timer",
    label: "timer",
    description:
      "O operador timer cria um Observable que emite após um atraso inicial e pode continuar emitindo em intervalos regulares. É bastante flexível para agendamentos de ações assíncronas.\n\nEle é usado para cenários como splash screens, mensagens temporárias ou simulação de chamadas periódicas."
  },
  {
    slug: "merge",
    label: "merge",
    description:
      "O merge combina múltiplos Observables em um único fluxo, emitindo valores conforme eles acontecem. Diferente de concat, não espera um Observable terminar para iniciar o outro.\n\nÉ ideal quando precisamos lidar com múltiplas fontes de eventos ao mesmo tempo, como cliques e entradas de teclado."
  },
  {
    slug: "map",
    label: "map",
    description:
      "O map transforma cada valor emitido por um Observable em outro valor. É provavelmente o operador mais usado em RxJS.\n\nNo Angular, é usado principalmente para formatar ou adaptar dados vindos de requisições HTTP antes de passá-los adiante."
  },
  {
    slug: "finalize",
    label: "finalize",
    description:
      "O finalize executa uma ação quando o Observable completa ou é cancelado. Ele não altera os valores, apenas garante a execução de uma lógica no encerramento.\n\nÉ útil para liberar recursos, parar loaders ou fazer logs após o término de um fluxo."
  },
  {
    slug: "retry",
    label: "retry",
    description:
      "Esse operador repete automaticamente a assinatura de um Observable em caso de erro, por um número definido de vezes. Isso é muito útil em chamadas de API instáveis.\n\nDessa forma, aumenta a resiliência da aplicação sem precisar reimplementar lógica de repetição manualmente."
  },
  {
    slug: "catchError",
    label: "catchError",
    description:
      "O catchError intercepta erros emitidos por um Observable e permite retornar um novo fluxo no lugar do erro. Assim, evita que a aplicação quebre ao menor problema.\n\nÉ comumente usado junto a throwError ou valores default, fornecendo uma forma controlada de lidar com falhas."
  },
  {
    slug: "throwError",
    label: "throwError",
    description:
      "Esse criador de Observable emite imediatamente um erro quando subscrito. Ele é geralmente usado junto a catchError para simular ou propagar erros.\n\nIsso ajuda a manter fluxos consistentes mesmo em cenários de falhas esperadas."
  },
  {
    slug: "shareReplay",
    label: "shareReplay",
    description:
      "O shareReplay permite que múltiplos assinantes compartilhem a mesma execução de um Observable e ainda recebam os últimos valores emitidos. É um operador poderoso para caching.\n\nNo Angular, é muito usado em chamadas HTTP para evitar requisições duplicadas e reaproveitar respostas já carregadas."
  },
  {
    slug: "behaviorSubject",
    label: "BehaviorSubject",
    description:
      "O BehaviorSubject é um tipo especial de Subject que armazena o último valor emitido. Quando um novo assinante se inscreve, ele recebe imediatamente esse valor inicial.\n\nEle é amplamente usado em Angular para gerenciamento de estado, pois garante que todos os componentes recebam o estado atual."
  },
  {
    slug: "combineLatest",
    label: "combineLatest",
    description:
      "Esse operador combina múltiplos Observables e emite um array com os valores mais recentes de cada um sempre que algum deles emite. É excelente para trabalhar com estados derivados.\n\nNo Angular, pode ser usado para juntar resultados de diferentes fontes, como filtros e dados de backend."
  },
  {
    slug: "asyncPipe",
    label: "Async Pipe",
    description:
      "O AsyncPipe é um recurso do Angular que simplifica a inscrição em Observables diretamente no template, cuidando automaticamente da inscrição e desinscrição.\n\nIsso reduz boilerplate no código e ajuda a evitar memory leaks, além de tornar o template mais reativo e legível."
  },
  {
    slug: "filter",
    label: "filter",
    description:
      "O operador filter emite apenas valores que passam em uma condição booleana definida. Ele atua como um filtro em tempo real sobre o fluxo de dados.\n\nÉ útil para processar apenas eventos válidos, como cliques em botões habilitados ou respostas específicas da API."
  },
  {
    slug: "tap",
    label: "tap",
    description:
      "O tap permite executar efeitos colaterais em um fluxo sem alterar os valores emitidos. Ele é ideal para logs, métricas ou disparar ações auxiliares.\n\nNo Angular, é bastante usado para mostrar ou esconder loaders durante chamadas HTTP."
  },
  {
    slug: "multicast",
    label: "multicast",
    description:
      "O multicast compartilha a execução de um Observable entre múltiplos assinantes através de um Subject. Ele é a base de operadores como share e shareReplay.\n\nNa prática, ajuda a otimizar performance ao evitar múltiplas execuções de um mesmo fluxo."
  },
  {
    slug: "share",
    label: "share",
    description:
      "Esse operador transforma um Observable frio em quente, permitindo que vários assinantes compartilhem a mesma execução. É muito usado em eventos contínuos.\n\nEle evita que cada novo assinante reinicie o fluxo, sendo útil em streams como WebSockets."
  },
  {
    slug: "observables",
    label: "Observables",
    description:
      "Os Observables são a base do RxJS, representando fluxos de dados assíncronos que podem emitir múltiplos valores ao longo do tempo. Eles seguem o padrão Observer.\n\nNo Angular, quase tudo gira em torno de Observables: eventos, formulários e chamadas HTTP são manipulados de forma reativa."
  },
  {
    slug: "promise",
    label: "Promise",
    description:
      "A Promise é uma abstração assíncrona que resolve apenas um valor ou erro no futuro. Embora não seja parte do RxJS, ela se integra com Observables.\n\nAngular permite facilmente converter Observables em Promises e vice-versa, garantindo flexibilidade no consumo de APIs assíncronas."
  },
  {
    slug: "asObservable",
    label: "asObservable",
    description:
      "O método asObservable converte um Subject ou BehaviorSubject em um Observable comum. Isso restringe o acesso, evitando que assinantes externos consigam emitir valores.\n\nEssa prática é recomendada para encapsular estado interno e expor apenas a leitura dos dados."
  },
  {
    slug: "toPromise",
    label: "toPromise",
    description:
      "O toPromise converte um Observable em uma Promise, retornando o primeiro ou último valor emitido. Apesar de estar obsoleto nas versões mais recentes do RxJS, ainda é encontrado em muito código legado.\n\nHoje em dia, o recomendado é usar lastValueFrom ou firstValueFrom para essa conversão."
  }
];
