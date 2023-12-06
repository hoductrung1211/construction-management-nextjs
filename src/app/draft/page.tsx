'use client';
import PopupTaskInfo from '@/components/plan/create/PopupTaskInfo';
import { IEmployee, IProduct } from '@/features/plan/create/PlanTask';
import { useState } from 'react';

export default function FreeSolo() {
  const [labors, setLabors] = useState<IEmployee[]>([]);
  const [products, setProducts] = useState<{product: IProduct, quantity: number}[]>([]);

  return (
    <main className='h-screen grid place-items-center'>
      <PopupTaskInfo
        labors={labors}
        products={products}

        onChangeLabors={(newLabors: IEmployee[]) => {
          setLabors(newLabors);
          console.log(newLabors);
        }}
        onChangeProducts={(newProducts: { product: IProduct, quantity: number }[]) => {
          
        }}
      />
    </main>
  );
}