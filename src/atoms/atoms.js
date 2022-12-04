import { atom } from 'recoil';

export const qtyState = atom({
  key: 'qtyState',
  default: 0,
});

export const addedQtyState = atom({
  key: 'addedQtyState',
  default: 0,
});

export const sidebarState = atom({
  key: 'sidebarState',
  default: false,
});

export const seeAllShop = atom({
  key: 'seeAllOne',
  default: false,
});

export const seeAllProgram = atom({
  key: 'seeAllTwo',
  default: false,
});
