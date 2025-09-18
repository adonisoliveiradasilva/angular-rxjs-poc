import { faMagnifyingGlass, faStopwatch, faBell, faTableColumns, faFile, faMoon, faGamepad, faComments } from '@fortawesome/free-solid-svg-icons';
import { ILink } from '../models/ILink.model';

export const navBarItems: (ILink)[] = [
  { slug: 'autocomplete', label: 'Autocomplete', faIcon: faMagnifyingGlass },
  { slug: 'contador', label: 'Contador', faIcon: faStopwatch },
  { slug: 'notificacoes', label: 'Notificações', faIcon: faBell },
  { slug: 'dashboard', label: 'Dashboard', faIcon: faTableColumns },
  { slug: 'formulario', label: 'Formulário', faIcon: faFile },
  { slug: 'tema-dinamico', label: 'Tema Dinâmico', faIcon: faMoon },
  { slug: 'jogo-de-reflexo', label: 'Jogo de Reflexo',  faIcon: faGamepad },
  { slug: 'chat-com-multicast', label: 'Chat com Multicast',  faIcon: faComments }
];