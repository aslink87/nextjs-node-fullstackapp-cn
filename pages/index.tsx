import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import NavigationBar from '../components/navigation/Navigation';
import { NextPageWithLayout } from './page';


const Home: NextPageWithLayout = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
      {/* <Navigation {...mockBaseNavProps.base} /> */}
      <NavigationBar />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
