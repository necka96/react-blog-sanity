import { useEffect, useState } from "react";
const Footer = () => {
  const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear());
  useEffect(() => {
    getYear();
  }, []);
  return (
    <footer className='bg-[#242132] w-full p-4'>
      <p className='flex justify-center items-center text-blue-100'>
        &copy; Nemanja Djordjevic {date} All rights reserved{" "}
      </p>
    </footer>
  );
};

export default Footer;
