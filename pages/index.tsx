import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import ListItem from '../components/ListItem';
import styles from '../styles/Home.module.css';
import { TBootcamps } from '../types/bootcamp';

export default function Home({ bootcamps }: TBootcamps) {
  console.log('Bootcamps', bootcamps);
  return (
    <div className={styles.container}>
      {bootcamps?.map((elem) => (
        <ListItem name={elem.name} key={elem._id} />
      ))}
    </div>
  );
}

export const getServerSideProps = async (ctx: any) => {
  console.log(ctx);
  // query: ?price[gte]=999&sort=rating

  const { data } = await axios.get('http://localhost:3001/api/v1/bootcamps');

  return {
    props: {
      bootcamps: data.data,
    },
  };
};
