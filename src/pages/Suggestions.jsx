import React, { useState, useEffect } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';

import WeightLossImg from '../assets/weight-loss.webp';
import FocusImg from '../assets/Focus-and-Clarity-Bundle.png';
import FocusShilajitImg from '../assets/Focus-Clarity-Bundle-add-on-Pure-shilajit.png';
import TheDailyWellnessPackImg from '../assets/Thedailywellnesspack.jpg';
import DailyPerformanceFemaleImg from '../assets/DailyPerformanceBundleforFemale.jpg';
import DailyPerformanceMaleImg from '../assets/DailyPerformanceBundleForMale.png';

const productDetails = {
   DETOX_4_STEP: {
      name: 'Liquid Blenz 4-Step Detox & Cleanse Bundle',
      img: WeightLossImg,
      link: 'https://liquidblenz.com/products/liquid-blenz-4-step-detox-cleanse-bundle-flat-belly-bully-sea-moss-tonic-soursop-bitters-immunity-enhancer',
   },
   FOCUS_CLARITY: {
      name: 'Focus & Clarity Bundle',
      img: FocusImg,
      link: 'https://liquidblenz.com/products/focus-clarity-bundle',
   },
   FOCUS_CLARITY_SHILAJIT: {
      name: 'Focus & Clarity Bundle + Pure Shilajit Add-on',
      img: FocusShilajitImg,
      link: 'https://liquidblenz.com/products/focus-clarity-bundle-add-on-pure-shilajit',
   },
   DAILY_WELLNESS_PACK: {
      name: 'The Daily Wellness Pack',
      img: TheDailyWellnessPackImg,
      link: 'https://liquidblenz.com/products/the-daily-wellness-pack',
   },
   PERFORMANCE_FEMALE: {
      name: 'Daily Performance Bundle for Female',
      img: DailyPerformanceFemaleImg,
      link: 'https://liquidblenz.com/products/daily-performance-bundle-for-female',
   },
   PERFORMANCE_MALE: {
      name: 'Daily Performance Bundle For Male',
      img: DailyPerformanceMaleImg,
      link: 'https://liquidblenz.com/products/daily-performance-bundle-for-male',
   },
};

const needsStaminaSupport = (answers) => {
   const text = Object.values(answers || {})
      .join(' | ')
      .toLowerCase();
   return [
      'stamina',
      'tired',
      'fatigue',
      'always tired',
      'low energy',
      'consistently tired',
      'need energy',
      'burnout',
   ].some((k) => text.includes(k));
};

const chooseImmunityProductKey = (answers) => {
   if (!answers || typeof answers !== 'object') return 'DETOX_4_STEP';
   const getAnswer = (...possibleKeys) => {
      for (const k of possibleKeys) {
         if (k in answers) return String(answers[k]).toLowerCase();
         const found = Object.keys(answers).find((q) =>
            q.toLowerCase().includes(k.toLowerCase())
         );
         if (found) return String(answers[found]).toLowerCase();
      }
      return '';
   };
   const colds = getAnswer('colds', 'how often do you catch colds');
   const energy = getAnswer('energy', 'daily energy');
   const diet = getAnswer('diet', 'balanced is your diet');
   const sleep = getAnswer('sleep', 'sleep at night');
   const active = getAnswer('active', 'how active are you');
   const stress = getAnswer('stress', 'frequent stress');
   const supportType = getAnswer('support_type', 'kind of support');

   const flags = new Set();
   if (colds.includes('often') || colds.includes('occasionally'))
      flags.add('frequentIllness');
   if (
      energy.includes('always tired') ||
      energy.includes('up and down') ||
      energy.includes('up_down') ||
      energy.includes('tired') ||
      energy.includes('fatigue')
   )
      flags.add('lowEnergy');
   if (
      diet.includes('moderate') ||
      diet.includes('unbalanced') ||
      diet.includes('could improve')
   )
      flags.add('poorDiet');
   if (
      sleep.includes('poor') ||
      sleep.includes('varies') ||
      sleep.includes('fair')
   )
      flags.add('poorSleep');
   if (
      active.includes('not very active') ||
      active.includes('rarely') ||
      active.includes('rarely active')
   )
      flags.add('lowActivity');
   if (
      stress.includes('yes') ||
      stress.includes('a lot') ||
      stress.includes('high') ||
      stress.includes('sometimes') ||
      stress.includes('burnout')
   )
      flags.add('highStress');
   if (
      supportType.includes('recovery') ||
      supportType.includes('energy') ||
      supportType.includes('recovery and energy support') ||
      supportType.includes('recovery_energy')
   )
      flags.add('recoveryIntent');

   return flags.size >= 3 ? 'DAILY_WELLNESS_PACK' : 'DETOX_4_STEP';
};

// Strict gender-based selection based ONLY on the stored question text:
// "What is your biological sex?" -> value "Male" or "Female"
// Case-insensitive comparison for safety.
const chooseLibidoPerformanceKey = (answers) => {
   if (!answers || typeof answers !== 'object') return 'PERFORMANCE_FEMALE';

   const sexKey = Object.keys(answers).find(
      (k) => k.trim().toLowerCase() === 'what is your biological sex?'
   );

   if (sexKey) {
      const val = String(answers[sexKey]).trim().toLowerCase();
      if (val === 'male') return 'PERFORMANCE_MALE';
      if (val === 'female') return 'PERFORMANCE_FEMALE';
   }

   return 'PERFORMANCE_FEMALE';
};

const resolveProductForTopic = (topic, answers) => {
   switch (topic) {
      case 'weight-loss':
         return 'DETOX_4_STEP';
      case 'stress-calm':
         return 'FOCUS_CLARITY';
      case 'focus-clarity':
         return needsStaminaSupport(answers)
            ? 'FOCUS_CLARITY_SHILAJIT'
            : 'FOCUS_CLARITY';
      case 'immunity-support':
         return chooseImmunityProductKey(answers);
      case 'libido-balance':
         return chooseLibidoPerformanceKey(answers);
      case 'digestion-gut-health':
         return 'DETOX_4_STEP';
      default:
         return 'DETOX_4_STEP';
   }
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
         scale: 1.15,
         transition: { duration: 1.1, ease: 'easeOut' },
      },
   };
   const cloudVariants = {
      initial: { x: -18, y: 0 },
      animate: {
         x: [0, 18, 0],
         y: [0, 6, 0],
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
            const topic = localStorage.getItem('lastCompletedQuizTopic') || '';
            const answersJSON = topic
               ? localStorage.getItem(`quizAnswers_${topic}`)
               : null;
            const answers = answersJSON ? JSON.parse(answersJSON) : {};
            const key = resolveProductForTopic(topic, answers);
            const product = productDetails[key] || productDetails.DETOX_4_STEP;
            setFinalCard({
               name: product.name,
               description:
                  'Your personalized Liquid Blenz plan based on your quiz results.',
               rating: 5,
               reviews: 8230,
               img: product.img,
               checkoutUrl: product.link,
            });
         } catch {
            const p = productDetails.DETOX_4_STEP;
            setFinalCard({
               name: p.name,
               description:
                  'Your personalized Liquid Blenz plan based on your quiz results.',
               rating: 5,
               reviews: 8230,
               img: p.img,
               checkoutUrl: p.link,
            });
         } finally {
            setIsLoading(false);
         }
      }, 1200);
      return () => clearTimeout(timer);
   }, []);

   const containerVariants = {
      hidden: { opacity: 0, y: 46 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.2 } },
   };
   const itemVariants = {
      hidden: { opacity: 0, y: 14 },
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
                        <a
                           href={finalCard.checkoutUrl}
                           target='_blank'
                           rel='noopener noreferrer'
                           style={{ width: '100%', textDecoration: 'none' }}
                        >
                           <button className='suggestion-card-btn'>
                              View My Personalized Plan
                           </button>
                        </a>
                     </div>
                  </motion.div>
               </div>
            </motion.div>
         )}
      </div>
   );
};

export default Suggestions;
