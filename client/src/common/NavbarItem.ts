export interface NavItem {
  label: string;
  href: string;
}

export const navbarItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  // {
  //   label: 'List',
  //   href: '/list',
  // },
  {
    label: 'Managerment',
    href: '/add-product',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
  {
    label: 'Comment',
    href: '/comment',
  },
];
