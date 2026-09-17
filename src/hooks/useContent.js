import { useEffect, useState } from 'react';

// Renders the bundled static data immediately, then upgrades to server
// content when it arrives. status: 'static' | 'loading' | 'loaded' | 'error'.
// 'error' means the backend is unreachable and we fell back to static data.
export default function useContent(staticData, fetcher, deps = []) {
  const [data, setData] = useState(staticData);
  const [status, setStatus] = useState('static');

  useEffect(() => {
    let live = true;
    setStatus('loading');
    fetcher()
      .then((d) => {
        if (!live) return;
        setData(d && d.length ? d : staticData);
        setStatus('loaded');
      })
      .catch(() => {
        if (!live) return;
        setData(staticData);
        setStatus('error');
      });
    return () => {
      live = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, status };
}