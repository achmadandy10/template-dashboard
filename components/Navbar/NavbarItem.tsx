import { ListItem } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';

type NavbarItemProps = ComponentProps<typeof ListItem> & {
  icon: FC<ComponentProps<'svg'>>;
  iconBadge?: string;
};

const NavbarItem: FC<NavbarItemProps> = ({
  icon: Icon,
  iconBadge,
  ...props
}): JSX.Element => {
  return (
    <ListItem {...props}>
      <Icon
        style={{
          width: '20px',
          height: '20px',
        }}
      />
    </ListItem>
  );
};

export default NavbarItem;
