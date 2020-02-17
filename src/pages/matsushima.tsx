import { NextPage } from 'next'

import City from '../components/city';
import { FixedNav } from '../components/Nav'

const Kyoto: NextPage = () => {
  return (
    <>
      <FixedNav />
      <City city='matsushima' />
    </>
  )
};
export default Kyoto;
