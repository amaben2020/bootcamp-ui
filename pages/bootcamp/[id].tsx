import React from 'react';
import { fetchAllBootcamps, fetchSingleBootcamp } from '../../base/services';

const BootCamp = ({ data }) => {
  console.log('DATA', data);
  return (
    <div>
      <h2>{data.name}</h2>
    </div>
  );
};

export default BootCamp;

export const getStaticProps = async ({ params }: any) => {
  console.log(params);
  let bootcamp = {};

  try {
    const data = await fetchSingleBootcamp('bootcamps', params.id);

    bootcamp = data?.data.bootcamp;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      data: bootcamp,
    },
  };
};

export const getStaticPaths = async () => {
  const bootcamps = (await fetchAllBootcamps('bootcamps'))?.data.data;

  const paths = bootcamps.map((elem: any) => ({
    params: { id: elem._id.toString() },
  }));

  console.log('Paths', paths);

  return {
    paths: paths,
    fallback: true,
  };
};
