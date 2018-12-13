import Loadable from 'react-loadable';
import { Loading } from './../../route/routeComponents';

const Home = Loadable({
  loader: () => import('./index'),
  loading: Loading
})

const homeRoute = [
  {
    path: '/',
    exact: true,
    component: Home
  }
]
export default homeRoute