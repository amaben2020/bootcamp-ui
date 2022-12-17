import Link from 'next/link';
import React from 'react';
import { api } from '../../base/api';
import { useRouter } from 'next/router';
import { TBootcamps } from '../../types/bootcamp';

const BootCamps = ({ bootcamps }: TBootcamps) => {
  const location = useRouter();

  return (
    <div>
      {bootcamps?.map((bootcamp) => (
        <Link href={`/${location.pathname}/${bootcamp._id}`}>
          {bootcamp.name}
        </Link>
      ))}
    </div>
  );
};

export default BootCamps;

export const getStaticProps = async () => {
  const { data } = await api.get('/bootcamps');

  console.log(data);
  return {
    props: {
      bootcamps: data.data,
    },
  };
};
