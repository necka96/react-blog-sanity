import { motion } from "framer-motion";
import React from "react";

const Preloader = ({ loading, children }) => {
  if (loading) {
    const icon = {
      hidden: {
        pathLength: 0,
        fill: "rgba(116,108,254,0)",
      },
      visible: {
        pathLength: 1,
        fill: "rgba(116,108,254,1)",
      },
    };

    return (
      <div className='w-full h-screen fixed left-0 top-0 bg-[#242132] grid place-items-center'>
        <div className='w-[400px] h-[400px] grid place-items-center'>
          <motion.svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
            className='item'
          >
            <motion.path
              d='M16.2718 39.6613L16.2602 39.6909L16.2493 39.7208L12.9057 48.8792C12.2709 50.3424 11.7595 51.6242 11.3812 52.7142C9.29998 57.5747 7.4578 61.3227 5.85605 64.0025L5.85603 64.0025L5.85076 64.0114C5.08693 65.3015 4.47625 66.4629 4.04951 67.4776C3.64709 68.4345 3.30469 69.496 3.30469 70.5098C3.30469 71.7246 3.70939 73.034 4.86085 73.9597C5.90806 74.8015 7.19559 75.0117 8.29492 75.0117C10.6597 75.0117 13.0002 74.4865 15.2989 73.4854C17.5794 72.4923 19.6526 71.1325 21.5126 69.4185L21.563 69.372L21.6108 69.3228C22.8259 68.073 23.8235 66.8349 24.5421 65.6087C25.3143 64.3881 26.0512 62.9163 26.762 61.2239L26.7654 61.2158L26.7687 61.2077C27.4788 59.4832 28.3675 56.9957 29.4303 53.7798C29.5629 53.4751 29.7029 53.1302 29.8496 52.75C30.0504 52.2798 30.2253 51.8427 30.371 51.4422L30.4011 51.3594L30.4253 51.2747C30.5297 50.9092 30.6639 50.518 30.831 50.1004L30.841 50.0751L30.8506 50.0497C31.0453 49.5306 31.213 49.0184 31.3196 48.544L34.7557 37.7247C37.7316 47.1535 41.6907 56.3499 46.6288 65.3128C48.1321 68.0819 49.6677 70.3201 51.2645 71.8976C52.8464 73.4605 54.7455 74.6211 56.9277 74.6211C58.8205 74.6211 60.412 73.6372 61.674 72.3752C62.3914 71.6578 63.0167 70.873 63.5441 70.0215C65.7586 66.469 68.8299 59.0635 72.7435 48.102C72.9525 47.5759 73.1831 46.9315 73.4342 46.1809L74.1372 44.4471L74.1518 44.411L74.1653 44.3744C76.3813 38.3781 78.2256 33.2698 79.6969 29.0523C81.1991 24.8067 82.3675 21.3198 83.196 18.6021L83.1985 18.5941C84.0096 15.9011 84.5999 13.6433 84.9508 11.8457C85.1533 11.0647 85.209 10.1261 85.209 9.18164C85.209 7.85558 85.0571 6.25183 84.1879 5.06652C83.1422 3.64058 81.5032 3.3125 80.2188 3.3125C78.2995 3.3125 76.4113 3.71405 74.5697 4.48137L74.561 4.48499L74.5524 4.48868C72.7332 5.26278 71.0611 6.37303 69.535 7.78752L69.4798 7.83866L69.4278 7.89303C68.5613 8.79889 67.8085 9.82589 67.1636 10.9614C65.1726 14.3722 63.1389 20.5822 60.9996 29.2658C60.2586 32.0648 59.5695 34.5853 58.9322 36.8288C58.4265 35.6502 57.8424 34.1651 57.1793 32.3552C56.0302 29.1306 54.9754 25.7907 54.0154 22.3351C52.8171 17.9687 51.697 14.4238 50.6525 11.7319C49.656 9.16375 48.6013 7.01899 47.3964 5.78318C45.3785 3.67881 42.5627 2.82422 39.3984 2.82422C37.7403 2.82422 35.7296 3.15263 33.4379 3.72473C31.1445 4.26511 29.0627 4.91465 27.2046 5.68259C26.1403 6.07971 25.1724 6.52281 24.4239 7.0419C23.8113 7.46678 22.5918 8.45827 22.5918 10.1094C22.5918 11.1912 23.1089 12.0261 23.5539 12.5572C24.0045 13.0951 24.5772 13.5587 25.1682 13.9619C25.7982 14.4206 26.1481 14.7758 26.3228 15.01C26.3438 15.0381 26.3608 15.0624 26.3745 15.0832C26.3502 15.1817 26.3032 15.3472 26.2127 15.5928C26.0341 16.0777 25.7427 16.7251 25.3138 17.5523L25.3138 17.5523L25.309 17.5617C23.9785 20.1544 22.51 23.6179 20.9025 27.9141L16.2718 39.6613ZM26.4268 15.1744C26.4267 15.1744 26.426 15.1729 26.4249 15.17C26.4263 15.1729 26.4268 15.1744 26.4268 15.1744Z'
              variants={icon}
              initial='hidden'
              animate='visible'
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
          </motion.svg>
        </div>
      </div>
    );
  }

  return children;
};

export default Preloader;
