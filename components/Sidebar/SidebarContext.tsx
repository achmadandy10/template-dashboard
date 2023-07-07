import { createContext, useContext } from 'react';

export type TSidebarContext = {
  isShort: boolean;
};

export const SidebarContext = createContext<TSidebarContext | undefined>(
  undefined,
);

export function useSidebarContext(): TSidebarContext {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error(
      'useSidebarContext should be used within the SidebarContext provider!',
    );
  }

  return context;
}
