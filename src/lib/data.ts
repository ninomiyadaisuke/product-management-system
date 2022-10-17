export const sidebarMenus = [
  {
    id: 1,
    imagePath: '/icons/product.svg',
    title: 'Product',
    menus: [
      { path: '/', link: 'Product List' },
      { path: '/', link: 'Add Product' },
      { path: '/', link: 'Category List' },
      { path: '/', link: 'Add Category' },
      { path: '/', link: 'Sub Category List' },
      { path: '/', link: 'Add Sub Category' },
      { path: '/', link: 'Print Barcode' },
    ],
  },
  {
    id: 2,
    imagePath: '/icons/sales1.svg',
    title: 'Sales',
    menus: [
      { path: '/', link: 'Sales List' },
      { path: '/', link: 'POS' },
    ],
  },
  {
    id: 3,
    imagePath: '/icons/purchase1.svg',
    title: 'Purchase',
    menus: [
      { path: '/', link: 'Purchase List' },
      { path: '/', link: 'Add Purchase' },
    ],
  },
  {
    id: 4,
    imagePath: '/icons/users1.svg',
    title: 'People',
    menus: [
      { path: '/', link: 'User List' },
      { path: '/', link: 'Add User' },
    ],
  },
];
