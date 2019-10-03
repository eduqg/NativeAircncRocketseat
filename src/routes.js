import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// Poderia ser por tabs com react-navigation-tabs
// Navegação em stack usada para animações de entrar, voltar
// Switch navigator, a tela antiga deixa de existir
import Login from './pages/Login';
import List from './pages/List';
import Book from './pages/Book';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    List,
    Book,
  })
);

export default Routes;
