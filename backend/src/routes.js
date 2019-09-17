import Home from './components/Home';
import About from './components/About';

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/about",
    exact: true,
    component: About,
  }
]

export default routes;