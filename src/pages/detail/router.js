import Loadable from 'react-loadable';
import { Loading } from './../../route/routeComponents';

const Detail = Loadable({
  loader: () => import('./index'),
  loading: Loading
})

const detailRoute = [
  {
    path: '/detail',
    component: Detail
  }
]
export default detailRoute