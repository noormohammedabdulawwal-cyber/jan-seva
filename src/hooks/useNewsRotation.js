import { useCallback, useEffect, useState } from 'react';

// Auto-cycles through items every intervalMs, pausing while the tab is
// hidden (Page Visibility API) and catching up with one advance on return.
export default function useNewsRotation(items, intervalMs = 30000) {
  const count = items.length;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (count <= 1) return undefined;
    const id = setInterval(() => {
      if (document.hidden) return;
      setIndex((i) => (i + 1) % count);
    }, intervalMs);
    const onVis = () => {
      if (!document.hidden) setIndex((i) => (i + 1) % count);
    };
    document.addEventListener('visibilitychange', onVis);
    return () => {
      clearInterval(id);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [count, intervalMs]);

  const next = useCallback(() => setIndex((i) => (i + 1) % Math.max(count, 1)), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + Math.max(count, 1)) % Math.max(count, 1)), [count]);

  return { index, next, prev };
}