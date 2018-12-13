import Loadable from 'react-loadable';
import { Loading } from './../../route/routeComponents';

const Recommend = Loadable({
  loader: () => import('./index'),
  loading: Loading
})

const recommendRoute = [
  {
    path: '/recommend',
    component: Recommend
  }
]

export default recommendRoute