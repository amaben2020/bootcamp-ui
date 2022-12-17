import { api } from '../../base/api';
import { TBootcamps } from '../../types/bootcamp';
import { Card } from 'flowbite-react';
import { MouseEventHandler } from 'react';

const BootCamps = ({ bootcamps }: TBootcamps) => {
  const handleCheckbox = (event: any) => {
    console.log(event.target.checked);
  };
  return (
    <section className='grid row-span-2 col-span-2 grid-cols-1 md:grid-cols-2 gap-4 p-4 lg:p-6'>
      <div>
        <input type='checkbox' onClick={handleCheckbox} />
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

export const getStaticProps = async () => {
  const { data } = await api.get('/bootcamps');

  console.log(data);
  return {
    props: {
      bootcamps: data.data,
    },
  };
};
