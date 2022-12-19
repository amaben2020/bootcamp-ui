import { api } from '../../base/api';
import { TBootcamps } from '../../types/bootcamp';
import { Card } from 'flowbite-react';
import { MouseEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQueryState } from 'next-usequerystate';

const BootCamps = ({ bootcamps }: TBootcamps) => {
  const [queryParam, setQueryParam] = useState('');
  const { push } = useRouter();
  const [p, setP] = useQueryState('price');
  const prices = [400, 800, 1200, 1600, 2000];

  const buildFilters = (price: number) => {
    const url = `?price[gte]=${price}`;
    if (price) {
      setQueryParam(url);
    } else {
      setQueryParam(`/bootcamps`);
    }
  };

  const handleCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const selectedPrice = prices[idx];

    console.log('Selected Price', selectedPrice);

    const id = parseInt(event.target.value);

    console.log('ID', id);

    if (id) {
      setP(id);
    } else {
      setP(null);
    }

    if (p) {
      buildFilters(p);
      push(queryParam);
    } else {
      push('/bootcamp');
    }
  };

  console.log('PRICE', p);

  return (
    <section className='grid row-span-2 grid-cols-1 md:grid-cols-2 gap-4 p-4 lg:p-6'>
      <div>
        {prices.map((p, idx) => (
          <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
            <input
              type='checkbox'
              value={p}
              onChange={(e) => handleCheckbox(e, idx)}
            />
            <span>Price: {p}</span>
          </div>
        ))}
      </div>
      <div>
        {bootcamps
          ?.sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((bootcamp) => (
            <Card href={`/bootcamp/${bootcamp._id}`} className='mb-4'>
              <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {bootcamp.name}
              </h5>
            </Card>
          ))}
      </div>
    </section>
  );
};

export default BootCamps;

export const getServerSideProps = async (ctx: any) => {
  console.log(Object.values(ctx.query)[0]);

  const price = ctx.query.price;

  const ratingOperator = ctx.query.sort;

  console.log('Price 🔥', price);

  let bc = [];
  if (price) {
    const { data } = await api.get(`/bootcamps?price[gte]=${price}`);
    bc = data;
  } else {
    const { data } = await api.get(`bootcamps`);
    bc = data;
  }

  return {
    props: {
      bootcamps: bc.data,
    },
  };
};
