import axios from 'axios';
import { Checkbox, Label } from 'flowbite-react';
import Head from 'next/head';
import Image from 'next/image';
import ListItem from '../components/ListItem';
import styles from '../styles/Home.module.css';
import { TBootcamps } from '../types/bootcamp';

export default function Home({ bootcamps }: TBootcamps) {
  console.log('Bootcamps', bootcamps);
  return (
    <div className={styles.container}>
      <div className='flex items-center gap-2'>
        <Checkbox id='remember' />
        <Label htmlFor='remember'>Remember me</Label>
      </div>
      {bootcamps?.map((elem) => (
        <ListItem name={elem.name} key={elem._id} />
      ))}
    </div>
  );
}

export const getServerSideProps = async (ctx: any) => {
  console.log(ctx.query);
  // query: ?price[gte]=999&sort=rating

  const { price, sort } = ctx.query;
  // look for how to make gte and lte dynamic plus - in sort
  const { data } = await axios.get(
    `http://localhost:3001/api/v1/bootcamps?price[gte]=${price}&sort=${sort}`
  );

  return {
    props: {
      bootcamps: data.data,
    },
  };
};
