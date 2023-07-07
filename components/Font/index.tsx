import type { FC } from 'react';

export const Font: FC = (): JSX.Element => (
  // eslint-disable-next-line react/no-unknown-property
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
  `}</style>
);
