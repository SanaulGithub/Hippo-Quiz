import React, { useState, useEffect } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import ProductOne from '../assets/product1.webp';
import ProductTwo from '../assets/producttwo.svg';
import ProductThree from '../assets/productthree.webp';
import ProductFour from '../assets/productfour.webp';

const productDetails = {
   '4_STEP': {
      name: 'Liquid Blenz 4-Step Detox & Cleanse Bundle',
      img: ProductOne,
      link: 'https://liquidblenz.com/products/liquid-blenz-4-step-detox-cleanse-bundle',
   },
   FLAT_BELLY: {
      name: 'Liquid Blenz Flat Belly Bully',
      img: ProductTwo,
      link: 'https://liquidblenz.com/products/pure-flat-belly-bully',
   },
   SOURSOP: {
      name: 'Pure Soursop Bitters',
      img: ProductThree,
      link: 'https://liquidblenz.com/products/pure-soursop-bitters',
   },
   BLACK_SEED: {
      name: 'Pure Black Seed Bitters',
      img: ProductFour,
      link: 'https://liquidblenz.com/products/pure-black-seed-bitters',
   },
   SEA_MOSS: {
      name: 'Liquid Blenz Sea Moss Tonic',
      img: ProductFour,
      link: 'https://liquidblenz.com/products/liquid-blenz-sea-moss',
   },
   GOOD_BRAIN: {
      name: 'Good Brain Tonic',
      img: ProductOne,
      link: 'https://liquidblenz.com/products/good-brain-tonic',
   },
   IMMUNITY: {
      name: 'Pure Immunity Enhancer',
      img: ProductTwo,
      link: 'https://liquidblenz.com/products/pure-immunity-enhancer-elderberry',
   },
   SHILAJIT: {
      name: 'Pure Shilajit Tonic',
      img: ProductOne,
      link: 'https://liquidblenz.com/products/pure-shilajit-tonic',
   },
   WELLNESS_TRIO: {
      name: 'Daily Wellness Trio',
      img: ProductOne,
      link: 'https://liquidblenz.com/products/healthy-power-pack',
   },
   LIBIDO_KIT: {
      name: 'Energy & Libido Boost Kit',
      img: ProductOne,
      link: 'https://liquidblenz.com/products/pure-libido',
   },
   PURE_LIBIDO: {
      name: 'Pure Libido',
      img: ProductOne,
      link: 'https://liquidblenz.com/products/pure-libido',
   },
   FIBROID: {
      name: 'Fibroid Bully',
      img: ProductOne,
      link: 'https://liquidblenz.com/products/fibroid-bully',
   },
   MENOPAUSE: {
      name: 'Menopause Bully',
      img: ProductOne,
      link: 'https://liquidblenz.com/products/menopause-bully',
   },
   PROSTATE: {
      name: 'Prostate Bully',
      img: ProductOne,
      link: 'https://liquidblenz.com/products/prostate-bully',
   },
   PERFORMANCE: {
      name: 'Daily Performance Bundle',
      img: ProductOne,
      link: 'https://liquidblenz.com/products/build-your-box',
   },
};

const determineRecommendation = (topic, answers) => {
   let baseProductKey = '';
   let addOnKeys = [];

   const checkAns = (questionPart, answerPart) => {
      if (!answers) return false;
      const fullQuestionKey = Object.keys(answers).find((k) =>
         k.toLowerCase().includes(questionPart.toLowerCase())
      );
      if (!fullQuestionKey) return false;
      const userAnswer = answers[fullQuestionKey];
      if (!userAnswer) return false;
      return String(userAnswer)
         .toLowerCase()
         .includes(answerPart.toLowerCase());
   };

   switch (topic) {
      case 'weight-loss':
         baseProductKey = '4_STEP';

         if (checkAns('weight loss goals', 'significant'))
            addOnKeys.push('SOURSOP');
         if (checkAns('weight loss goals', 'Improve overall'))
            addOnKeys.push('BLACK_SEED');

         if (checkAns('biggest challenge', 'Slow metabolism'))
            addOnKeys.push('BLACK_SEED');
         if (checkAns('biggest challenge', 'Poor digestion'))
            addOnKeys.push('SOURSOP');
         if (checkAns('biggest challenge', 'Stress'))
            addOnKeys.push('GOOD_BRAIN');
         if (checkAns('biggest challenge', 'Cravings'))
            addOnKeys.push('GOOD_BRAIN');
         if (checkAns('biggest challenge', 'Low energy'))
            addOnKeys.push('SHILAJIT');

         if (checkAns('secondary areas', 'Energy')) addOnKeys.push('SHILAJIT');
         if (checkAns('secondary areas', 'Stress'))
            addOnKeys.push('GOOD_BRAIN');
         if (checkAns('secondary areas', 'Digestion'))
            addOnKeys.push('SEA_MOSS');
         if (checkAns('secondary areas', 'Focus')) addOnKeys.push('GOOD_BRAIN');
         if (checkAns('secondary areas', 'Libido'))
            addOnKeys.push('PURE_LIBIDO');

         if (checkAns('combination approach', 'No')) {
            addOnKeys = addOnKeys.slice(0, 1);
         }
         break;
      case 'stress-calm':
         baseProductKey = 'WELLNESS_TRIO';

         if (checkAns('stress levels', 'Constantly'))
            addOnKeys.push('GOOD_BRAIN');
         if (checkAns('stress levels', 'manageable'))
            addOnKeys.push('GOOD_BRAIN');

         if (checkAns('source of stress', 'Health')) addOnKeys.push('SOURSOP');

         if (checkAns('stress usually show up', 'tension'))
            addOnKeys.push('GOOD_BRAIN');
         if (checkAns('stress usually show up', 'sleep'))
            addOnKeys.push('GOOD_BRAIN');
         if (checkAns('stress usually show up', 'focus'))
            addOnKeys.push('GOOD_BRAIN');
         if (checkAns('stress usually show up', 'eating'))
            addOnKeys.push('FLAT_BELLY');

         if (checkAns('sleep quality', 'Poor')) addOnKeys.push('GOOD_BRAIN');
         if (checkAns('sleep quality', 'light sleep'))
            addOnKeys.push('SEA_MOSS');

         if (checkAns('feel stressed', 'Food')) addOnKeys.push('FLAT_BELLY');

         if (checkAns('support do you prefer', 'Combination'))
            addOnKeys.push('SOURSOP');
         if (checkAns('support do you prefer', 'tonic'))
            addOnKeys.push('GOOD_BRAIN');

         if (checkAns('improve other areas', 'Digestion'))
            addOnKeys.push('FLAT_BELLY');
         if (checkAns('improve other areas', 'Focus'))
            addOnKeys.push('GOOD_BRAIN');
         break;
      case 'focus-clarity':
         baseProductKey = 'GOOD_BRAIN';

         if (checkAns('distracted', 'Constantly')) addOnKeys.push('GOOD_BRAIN');
         if (checkAns('distracted', 'Frequently')) addOnKeys.push('GOOD_BRAIN');

         if (checkAns('time of day', 'Afternoon crash'))
            addOnKeys.push('SHILAJIT');
         if (checkAns('time of day', 'All day')) addOnKeys.push('SHILAJIT');

         if (checkAns('current energy', 'Consistently tired'))
            addOnKeys.push('SHILAJIT');
         if (checkAns('current energy', 'Highs and lows'))
            addOnKeys.push('SHILAJIT');

         if (checkAns('improve most', 'Motivation')) addOnKeys.push('SHILAJIT');
         if (checkAns('improve most', 'Mental clarity'))
            addOnKeys.push('GOOD_BRAIN');
         if (checkAns('improve most', 'Memory')) addOnKeys.push('GOOD_BRAIN');
         break;
      case 'immunity-support':
         baseProductKey = 'WELLNESS_TRIO';

         if (checkAns('catch colds', 'Often')) addOnKeys.push('IMMUNITY');

         if (checkAns('catch colds', 'Occasionally'))
            addOnKeys.push('SEA_MOSS');

         if (checkAns('daily energy', 'Always tired'))
            addOnKeys.push('SHILAJIT');
         if (checkAns('daily energy', 'Up and down'))
            addOnKeys.push('SHILAJIT');

         if (checkAns('diet', 'Unbalanced')) addOnKeys.push('SOURSOP');
         if (checkAns('diet', 'Moderate')) addOnKeys.push('SOURSOP');

         if (checkAns('sleep', 'Poor')) addOnKeys.push('SOURSOP');
         if (checkAns('sleep', 'Varies')) addOnKeys.push('SOURSOP');

         if (checkAns('active', 'Not very active')) addOnKeys.push('SHILAJIT');
         if (checkAns('active', 'Rarely')) addOnKeys.push('SHILAJIT');

         if (checkAns('stress', 'Yes')) addOnKeys.push('GOOD_BRAIN');
         if (checkAns('stress', 'Sometimes')) addOnKeys.push('GOOD_BRAIN');

         if (checkAns('support', 'Fast immune')) addOnKeys.push('IMMUNITY');

         if (checkAns('support', 'Preventive')) addOnKeys.push('SEA_MOSS');

         if (checkAns('support', 'Recovery')) addOnKeys.push('SHILAJIT');

         break;

      case 'libido-balance':
         baseProductKey = 'LIBIDO_KIT';

         if (checkAns('current concern', 'Hormonal')) addOnKeys.push('FIBROID');

         if (checkAns('current concern', 'Low stamina'))
            addOnKeys.push('SHILAJIT');

         if (checkAns('current concern', 'Low desire'))
            addOnKeys.push('PURE_LIBIDO');

         if (checkAns('tired or drained', 'Every day'))
            addOnKeys.push('WELLNESS_TRIO');

         if (checkAns('tired or drained', 'Several times'))
            addOnKeys.push('SHILAJIT');

         if (checkAns('exercise', 'Never')) addOnKeys.push('PROSTATE');
         if (checkAns('exercise', 'Rarely')) addOnKeys.push('PROSTATE');

         if (checkAns('stress or anxiety', 'Yes'))
            addOnKeys.push('WELLNESS_TRIO');

         if (checkAns('goal', 'Boost libido')) addOnKeys.push('PURE_LIBIDO');

         if (checkAns('goal', 'hormonal balance')) addOnKeys.push('FIBROID');

         if (checkAns('goal', 'All of the above')) {
            addOnKeys.push('PURE_LIBIDO');
            addOnKeys.push('FIBROID');
            addOnKeys.push('PROSTATE');
         }
         break;
      case 'digestion-gut-health':
         baseProductKey = '4_STEP';

         if (checkAns('symptom affects you', 'All of the above'))
            addOnKeys.push('PERFORMANCE');

         if (checkAns('appetite usually', 'Varies'))
            addOnKeys.push('WELLNESS_TRIO');

         if (checkAns('meals do you eat', '1-2'))
            addOnKeys.push('WELLNESS_TRIO');
         if (checkAns('meals do you eat', 'skip meals'))
            addOnKeys.push('WELLNESS_TRIO');

         if (checkAns('diet type', 'Processed')) addOnKeys.push('FLAT_BELLY');

         if (checkAns('bowel movements', 'constipation'))
            addOnKeys.push('FLAT_BELLY');
         if (checkAns('bowel movements', 'uncomfortable'))
            addOnKeys.push('FLAT_BELLY');

         if (!addOnKeys.includes('FLAT_BELLY')) {
            addOnKeys.push('FLAT_BELLY');
         }
         break;
      default:
         baseProductKey = '4_STEP';
   }

   addOnKeys = [...new Set(addOnKeys)];

   addOnKeys = addOnKeys.filter((k) => k !== baseProductKey);

   return { base: baseProductKey, addons: addOnKeys };
};

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
         transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
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
   const [finalCard, setFinalCard] = useState(null);

   useEffect(() => {
      const timer = setTimeout(() => {
         try {
            const topic = localStorage.getItem('lastCompletedQuizTopic');
            const answersJSON = localStorage.getItem(`quizAnswers_${topic}`);
            const answers = answersJSON ? JSON.parse(answersJSON) : {};

            if (!topic || Object.keys(answers).length === 0) {
               const base = productDetails['4_STEP'];
               setFinalCard({
                  name: base.name,
                  description: 'Complete detox system for deep cleanse.',
                  rating: 5,
                  reviews: 8230,
                  img: base.img,
                  Link: base.link,
               });
               setIsLoading(false);
               return;
            }

            const { base, addons } = determineRecommendation(topic, answers);

            const baseObj = productDetails[base];
            let combinedName = baseObj.name;

            if (addons.length > 0) {
               const addonNames = addons
                  .map((key) => productDetails[key].name)
                  .join(' AND ');
               combinedName = `${baseObj.name} AND ${addonNames}`;
            }

            setFinalCard({
               name: combinedName,
               description:
                  'Your personalized Liquid Blenz plan based on your quiz results.',
               rating: 5,
               reviews: 8230,
               img: baseObj.img,
               Link: baseObj.link,
            });
         } catch (error) {
            console.error('Error processing quiz results:', error);
            const fallback = productDetails['4_STEP'];
            setFinalCard({
               name: fallback.name,
               description: 'Complete detox system for deep cleanse.',
               rating: 5,
               reviews: 8230,
               img: fallback.img,
               Link: fallback.link,
            });
         }
         setIsLoading(false);
      }, 2500);

      return () => clearTimeout(timer);
   }, []);

   const containerVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
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

         {!isLoading && finalCard && (
            <motion.div
               className='suggestions-container'
               variants={containerVariants}
               initial='hidden'
               animate='visible'
            >
               <motion.h1 variants={itemVariants} className='suggestions-title'>
                  Suggested Solution
               </motion.h1>
               <motion.div
                  variants={itemVariants}
                  className='suggestions-subtitle'
               >
                  Here’s a custom plan designed for your needs.
               </motion.div>

               <div className='suggestions-list'>
                  <motion.div
                     className='suggestion-card'
                     variants={itemVariants}
                  >
                     <div className='suggestion-card-img-wrap'>
                        <img
                           src={finalCard.img}
                           alt={finalCard.name}
                           className='suggestion-card-img'
                        />
                        <span className='suggestion-card-fav'>
                           <AiOutlineStar size={26} />
                        </span>
                     </div>
                     <div className='suggestion-card-body'>
                        <div
                           className='suggestion-card-name'
                           style={{ fontSize: '1.2rem', lineHeight: '1.4' }}
                        >
                           {finalCard.name}
                        </div>
                        <div className='suggestion-card-desc'>
                           {finalCard.description}
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
                              ({finalCard.reviews})
                           </span>
                        </div>
                        <Link
                           to={finalCard.Link}
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
