// Trying to allow Next.js to work with JS's built-in window object
// pulled from StackOverflow: https://stackoverflow.com/a/75692565/21558165
// https://stackblitz.com/edit/nextjs-mekkqj?file=pages/index.tsx

import { createContext, useContext, useEffect, useState } from 'react';

const IsClientCtx = createContext(false);

//* How to not get an error with children as a param:
// const yourfunc = ({destructuredProps}: {destructuredProps: type}) => {}

export const IsClientCtxProvider = ({ children }: { children: any }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return (
    <IsClientCtx.Provider value={isClient}>{children}</IsClientCtx.Provider>
  );
};

export function useIsClient() {
  return useContext(IsClientCtx);
}
