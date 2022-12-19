import { Card } from 'flowbite-react';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { fetchAllBootcamps, fetchSingleBootcamp } from '../../base/services';
import { TBootcampData } from '../../types/bootcamp';

const BootCamp = ({ data: { name, description } }: TBootcampData) => {
  return (
    <Card href='#' className='m-5'>
      <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {name}
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400'>
        {description}
      </p>
    </Card>
  );
};

export default BootCamp;

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  let bootcamp = {};

  try {
    const data = await fetchSingleBootcamp('bootcamps', params?.id);

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

export const getStaticPaths: GetStaticPaths = async () => {
  const bootcamps = (await fetchAllBootcamps('bootcamps'))?.data.data;

  const paths = bootcamps.map((elem: any) => ({
    params: { id: elem._id.toString() },
  }));

  return {
    paths: paths,
    fallback: true,
  };
};
