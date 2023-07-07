import { Box } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';
import FooterBrand from './FooterBrand';
import FooterCopyright from './FooterCopyright';
import FooterDivider from './FooterDivider';
import FooterLink from './FooterLink';
import FooterLinkGroup from './FooterLinkGroup';
import FooterTitle from './FooterTitle';

type FooterComponentProps = ComponentProps<typeof Box>;

const FooterComponent: FC<FooterComponentProps> = ({
  children,
  ...props
}): JSX.Element => {
  return (
    <Box as={'footer'} aria-label={'Footer'} {...props}>
      {children}
    </Box>
  );
};

FooterComponent.displayName = 'Footer';

export const Footer = Object.assign(FooterComponent, {
  Brand: FooterBrand,
  Copyright: FooterCopyright,
  Divider: FooterDivider,
  Icon: FooterDivider,
  Link: FooterLink,
  LinkGroup: FooterLinkGroup,
  Title: FooterTitle,
});
