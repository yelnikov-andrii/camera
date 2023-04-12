import React from 'react';

export const useLoading = () => {
  const [loading, setLoading] = React.useState(false);

  const timerId: any = React.useRef();

  const showLoading = React.useCallback(() => {
    if (loading === true) {
      setLoading(true);
      clearInterval(timerId.current);
      timerId.current = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return;
    }

    setLoading(true);
    timerId.current = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading])

  return { loading, showLoading};
};