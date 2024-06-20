'use client';

import { Title } from '@/components/Title';
import { AppProvider } from '@/providers/AppProvider';
import { FormControl } from '@/components/FormControl';
import { TableBox } from '@/components/Table';
import { Stats } from '@/components/Stats';

export const App = function () {
  return (
    <AppProvider>
      <div className="text-center">
        <Title>Todoリスト</Title>
      </div>
    </AppProvider>
  );
};
