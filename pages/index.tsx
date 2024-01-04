import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Leftside from '@/components/Leftside';
import Rightside from '@/components/Rightside';
import { motion } from "framer-motion";
import Banner from '@/components/Banner';
import About from '@/components/About';
import Experience from '@/components/Experience';
export default function Home() {
  return (
    <>
      <Head>
        <title>Saidul Islam</title>
      </Head>
      <main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll'>
        <Navbar />
        <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
            <Leftside />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className='lg:ml-40 h-[88vh] mx-auto p-4'>
            <Banner/>
            <About/>
            <Experience/>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-20"'>
            <Rightside />
          </motion.div>
        </div>
      </main>
    </>
  );
}
