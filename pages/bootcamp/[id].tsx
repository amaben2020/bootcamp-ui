import React from 'react';
import { fetchAllBootcamps, fetchSingleBootcamp } from '../../base/services';
import { TBootcampData } from '../../types/bootcamp';

const BootCamp = ({ data: { name, description } }: TBootcampData) => {
  return (
    <div>
      <h2>{name}</h2>

      <h4>{description}</h4>
    </div>
  );
};

export default BootCamp;

export const getStaticProps = async ({ params }: any) => {
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

  return {
    paths: paths,
    fallback: true,
  };
};
