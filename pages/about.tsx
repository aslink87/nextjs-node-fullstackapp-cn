import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page'

const About: NextPageWithLayout = () => {
  return (
    <h1 className="">Hello Mom</h1>
  )
}

export default About;

About.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
