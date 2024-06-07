import { type Item } from '@/types/Item';

// 初期データ
export const items: Item[] = [
  { name: '鉛筆', price: '200', amount: '3' },
  { name: '消しゴム', price: '350', amount: '2' },
  { name: 'ホッチキス', price: '500', amount: '2' },
];

// フォーム初期化用
export const initItem: Item = {
  name: '',
  price: '',
  amount: '',
};
