import React, { useState, useEffect } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import ProductOne from '../assets/product1.webp';
import ProductTwo from '../assets/producttwo.svg';
import ProductThree from '../assets/productthree.webp';
import ProductFour from '../assets/productfour.webp';

const allProducts = [
   {
      name: 'Liquid Blenz Flat Belly Bully – Daily Herbal Cleanse Tonic',
      description:
         'Whether youre jumpstarting your wellness journey or enhancing your routine, Flat Belly Bully is a natural way to support balance and mindful living',
      rating: 5,
      reviews: 8230,
      img: ProductOne,
      Link: 'https://liquidblenz.com/products/pure-flat-belly-bully',
      tags: ['belly', 'cleanse'],
   },
   {
      name: 'Fibroid Bully – Hormone Balance & Uterine Support Tonic',
      description:
         'Crafted with herbs traditionally used by women for centuries, including Chasteberry, Dong Quai, Red Raspberry Leaf, and more',
      rating: 5,
      reviews: 8230,
      img: ProductTwo,
      Link: 'https://liquidblenz.com/products/pure-fibroid-bully',
      tags: ['hormone', 'fibroid'],
   },
   {
      name: 'Herbal Fuel Wildberry Drink',
      description:
         'Revitalize and refresh your tastebuds with our Herbal flavored drink. Made with natural medicinal herbs, spices and Wildberry flavor',
      rating: 5,
      reviews: 8230,
      img: ProductThree,
      Link: 'https://liquidblenz.com/products/herbal-fuel-wildberry-drink-12oz-1',
      tags: ['energy', 'drink'],
   },
   {
      name: 'Liquid Blenz Menopause Bully Natural Herbal Support for Women',
      description:
         'Are you ready to take control of your menopause journey? Say goodbye to the challenges and discomfort that can accompany this significant life transition',
      rating: 5,
      reviews: 8230,
      img: ProductFour,
      Link: 'https://liquidblenz.com/products/pure-menopause-bully',
      tags: ['hormone', 'menopause'],
   },
];

const CloudSvg = ({ style }) => (
   <svg
      style={style}
      className='cloud-svg'
      viewBox='0 0 152 79'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
   >
      <path
         d='M125.161 78.1363H26.839C12.0163 78.1363 0 66.1199 0 51.2973C0 36.4746 12.0163 24.4583 26.839 24.4583C26.839 24.4583 28.0927 24.4604 28.2324 24.4604C32.6102 10.3344 45.753 0.612305 60.9706 0.612305C77.4981 0.612305 91.192 12.3533 94.3973 28.3193C96.1118 27.247 98.055 26.4716 100.16 25.996C108.831 23.905 117.843 27.2183 123.633 34.02C129.423 40.8217 131.258 50.1173 128.329 58.508C138.825 60.671 146.402 70.3204 146.402 81.3853C146.402 81.5641 146.398 81.7429 146.393 81.9217C148.067 79.5447 151.054 78.1363 152 78.1363H125.161Z'
         fill='white'
         fillOpacity='0.9'
      />
   </svg>
);

const CloudOverlay = () => {
   const overlayVariants = {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
      exit: {
         opacity: 0,
         y: -200,
         scale: 1.2,
         transition: { duration: 1.5, ease: 'easeOut' },
      },
   };

   const cloudVariants = {
      initial: { x: -20, y: 0 },
      animate: {
         x: [0, 20, 0],
         y: [0, 5, 0],
         transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
         },
      },
   };

   return (
      <motion.div
         className='cloud-overlay'
         variants={overlayVariants}
         initial='hidden'
         animate='visible'
         exit='exit'
      >
         <motion.div
            variants={cloudVariants}
            animate='animate'
            style={{
               position: 'absolute',
               top: '20%',
               left: '10%',
               scale: 1.2,
            }}
         >
            <CloudSvg />
         </motion.div>
         <motion.div
            variants={cloudVariants}
            animate='animate'
            style={{
               position: 'absolute',
               top: '30%',
               right: '15%',
               scale: 0.8,
            }}
         >
            <CloudSvg />
         </motion.div>
         <motion.div
            variants={cloudVariants}
            animate='animate'
            style={{ position: 'absolute', top: '50%', left: '30%', scale: 1 }}
         >
            <CloudSvg />
         </motion.div>
         <div className='cloud-loading-text'>
            Finding your perfect solution...
         </div>
      </motion.div>
   );
};

const Suggestions = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [suggestedProduct, setSuggestedProduct] = useState(null);

   useEffect(() => {
      const randomIndex = Math.floor(Math.random() * allProducts.length);
      setSuggestedProduct(allProducts[randomIndex]);

      const timer = setTimeout(() => {
         setIsLoading(false);
      }, 2500);
      return () => clearTimeout(timer);
   }, []);

   const containerVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.8,
            delay: 0.5,
            when: 'beforeChildren',
            staggerChildren: 0.3,
         },
      },
   };

   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
   };

   return (
      <div className='suggestions-page-container'>
         <AnimatePresence>
            {isLoading && <CloudOverlay key='cloud-loader' />}
         </AnimatePresence>

         {!isLoading && suggestedProduct && (
            <motion.div
               className='suggestions-container'
               variants={containerVariants}
               initial='hidden'
               animate='visible'
            >
               <motion.h1 variants={itemVariants} className='suggestions-title'>
                  Suggested Solutions
               </motion.h1>
               <motion.div
                  variants={itemVariants}
                  className='suggestions-subtitle'
               >
                  Here’s a plan designed for your needs.
               </motion.div>

               <div className='suggestions-list'>
                  <motion.div
                     className='suggestion-card'
                     key={suggestedProduct.name}
                     variants={itemVariants}
                  >
                     <div className='suggestion-card-img-wrap'>
                        <img
                           src={suggestedProduct.img}
                           alt={suggestedProduct.name}
                           className='suggestion-card-img'
                        />
                        <span className='suggestion-card-fav'>
                           <AiOutlineStar size={26} />
                        </span>
                     </div>
                     <div className='suggestion-card-body'>
                        <div className='suggestion-card-name'>
                           {suggestedProduct.name}
                        </div>
                        <div className='suggestion-card-desc'>
                           {suggestedProduct.description}
                        </div>
                        <div className='suggestion-card-rating'>
                           <span className='suggestion-card-stars'>
                              {Array.from({ length: 5 }).map((_, i) => (
                                 <AiFillStar
                                    key={i}
                                    className='star'
                                    color='#222'
                                    size={18}
                                 />
                              ))}
                           </span>
                           <span className='suggestion-card-reviews'>
                              ({suggestedProduct.reviews})
                           </span>
                        </div>
                        <Link
                           to={suggestedProduct.Link}
                           target='_blank'
                           rel='noopener noreferrer'
                           style={{ width: '100%' }}
                        >
                           <button className='suggestion-card-btn'>
                              View Product
                           </button>
                        </Link>
                     </div>
                  </motion.div>
               </div>
            </motion.div>
         )}
      </div>
   );
};

export default Suggestions;
