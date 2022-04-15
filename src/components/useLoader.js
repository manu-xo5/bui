import * as React from 'react';

export default function useLoader(msTime) {
  let [isPending, setIsPending] = React.useState(false);

  function startLoading() {
    setIsPending(false);

    setTimeout(() => {
      setIsPending(true);
    }, msTime);
  }

  return [isPending, startLoading];
}
