import * as React from 'react';
import Checkbox from './components/Checkbox';
import useLoader from './components/useLoader';

export default function App({ ...props }) {
  let [isPending, startTransition] = useLoader(3000);
  let [message, setMessage] = React.useState('');

  React.useEffect(() => {
    startTransition();
    setTimeout(() => setMessage('Yeah'), 1000);
  }, []);

  if (!message && !isPending) {
    return null
  }

  if (!message && isPending) {
    return <p>...</p>;
  }

  
  return <p>{message}</p>;
}
