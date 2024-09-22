'use client';

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type PropsWithChildren,
} from 'react';
import { useInteractionObserver } from '@/lib/hooks/use-interection-observer';

const ScrollSpyContext = createContext<string>('');

export function useScrollSpy() {
  const context = useContext(ScrollSpyContext);
  return context;
}

export function ScrollSpyProvider({ children }: PropsWithChildren) {
  const [active, setActive] = useState('');

  const handleCallback = useCallback((entry: IntersectionObserverEntry) => {
    setActive(entry.target.id);
  }, []);

  useInteractionObserver({
    selector: '[id]',
    callback: handleCallback,
  });

  return (
    <ScrollSpyContext.Provider value={active}>
      {children}
    </ScrollSpyContext.Provider>
  );
}
