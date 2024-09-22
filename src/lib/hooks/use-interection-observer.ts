import { useEffect } from 'react';

type UseInteractionObserverParams = {
  selector: string;
  callback: (entry: IntersectionObserverEntry) => void;
};

export function useInteractionObserver({
  selector,
  callback,
}: UseInteractionObserverParams) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
          .at(0);

        if (entry) {
          callback(entry);
        }
      },
      {
        root: null,
      },
    );

    const observables = document.querySelectorAll(selector);

    observables.forEach((observable) => {
      observer.observe(observable);
    });

    return () => {
      observer.disconnect();
    };
  }, [callback, selector]);
}
