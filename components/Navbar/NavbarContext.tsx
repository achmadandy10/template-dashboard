import { createContext, useContext } from 'react';

export type TNavbarContext = {
  isShort: boolean;
  handleIsShortClick: () => void;
};

export const NavbarContext = createContext<TNavbarContext | undefined>(
  undefined,
);

export function useNavbarContext(): TNavbarContext {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error(
      'useNavbarContext should be used within the NavbarContext provider!',
    );
  }

  return context;
}
