import Loadable from 'react-loadable';

const Loading = (props) => {
  if (props.error) {
    return <div>Error</div>
  } else if (props.timedOut) {
    return <div>take a too long time...</div>
  } else if (props.pastDelay) {
    return <div>loading</div>
  } else {
    return null
  }
}

