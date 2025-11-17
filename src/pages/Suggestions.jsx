/* eslint-disable no-unused-vars */
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
      name: 'Liquid Blenz 4-Step Detox & Cleanse Bundle – Flat Belly Bully, Sea Moss Tonic, Soursop Bitters & Immunity Enhancer',
      description:
         'Complete 4-step detox system for deep cleanse, digestion support and immunity.',
      rating: 5,
      reviews: 8230,
      img: ProductOne,
      Link: 'https://liquidblenz.com/products/liquid-blenz-4-step-detox-cleanse-bundle',
      tags: ['weight-loss', 'detox', 'bundle', 'digestion', 'immunity'],
   },
   {
      name: 'Liquid Blenz Flat Belly Bully – Daily Herbal Cleanse Tonic',
      description:
         'Daily herbal cleanse to support belly fat reduction, digestion & cravings control.',
      rating: 5,
      reviews: 8230,
      img: ProductTwo,
      Link: 'https://liquidblenz.com/products/pure-flat-belly-bully',
      tags: ['weight-loss', 'digestion', 'belly', 'cravings'],
   },
   {
      name: 'Pure Soursop Bitters with Moringa & Turmeric - Immune Antioxidant Supplement',
      description:
         'Antioxidant bitters to support immunity, digestion and restful sleep.',
      rating: 5,
      reviews: 8230,
      img: ProductThree,
      Link: 'https://liquidblenz.com/products/pure-soursop-bitters',
      tags: ['immunity', 'digestion', 'sleep', 'calm'],
   },
   {
      name: 'Pure Black Seed Bitters with Moringa & Tumeric - Metabolism Support',
      description: 'Supports metabolism and healthy weight management.',
      rating: 5,
      reviews: 8230,
      img: ProductFour,
      Link: 'https://liquidblenz.com/products/pure-black-seed-bitters',
      tags: ['weight-loss', 'metabolism', 'detox'],
   },
   {
      name: 'Liquid Blenz Sea Moss Natural Superfood Tonic',
      description:
         'Mineral-rich sea moss for energy, metabolism and preventive wellness.',
      rating: 5,
      reviews: 8230,
      img: ProductFour,
      Link: 'https://liquidblenz.com/products/liquid-blenz-sea-moss',
      tags: ['immunity', 'energy', 'superfood', 'weight-loss', 'minerals'],
   },
   {
      name: 'Liquid Blenz Pure Immunity Enhancer – Elderberry Wellness Tonic',
      description:
         'Elderberry tonic for fast immune boosting and seasonal defense.',
      rating: 5,
      reviews: 8230,
      img: ProductTwo,
      Link: 'https://liquidblenz.com/products/pure-immunity-enhancer-elderberry',
      tags: ['immunity', 'fast-boost', 'preventive'],
   },
   {
      name: 'Natural Elixir Pack',
      description:
         'Pack combining Elderberry + Sea Moss + Soursop for immune + energy support.',
      rating: 5,
      reviews: 8230,
      img: ProductOne,
      Link: 'https://liquidblenz.com/products/natural-elixir-pack',
      tags: ['immunity', 'bundle', 'energy', 'detox'],
   },
   {
      name: 'Health Builder Pack',
      description:
         'Support pack (Black Seed + Soursop + Elderberry) for stress, immunity & recovery.',
      rating: 5,
      reviews: 8230,
      img: ProductThree,
      Link: 'https://liquidblenz.com/products/health-builder-pack',
      tags: ['immunity', 'stress', 'bundle', 'recovery'],
   },
   {
      name: 'Healthy Power Pack',
      description: 'Daily power pack for overall wellness and energy.',
      rating: 5,
      reviews: 8230,
      img: ProductOne,
      Link: 'https://liquidblenz.com/products/healthy-power-pack',
      tags: ['bundle', 'energy', 'wellness'],
   },
   {
      name: 'Fuel Pack',
      description: 'Energy + stamina pack to support active lifestyles.',
      rating: 5,
      reviews: 8230,
      img: ProductOne,
      Link: 'https://liquidblenz.com/products/fuel-pack',
      tags: ['bundle', 'energy', 'stamina'],
   },
   {
      name: 'Wellness Pack',
      description:
         'Balanced wellness pack for daily immune & hormonal support.',
      rating: 5,
      reviews: 8230,
      img: ProductOne,
      Link: 'https://liquidblenz.com/products/wellness-pack',
      tags: ['bundle', 'wellness', 'preventive'],
   },
   {
      name: 'Pure Shilajit Tonic - Energy & Vitality Support',
      description:
         'Traditional shilajit tonic for energy, stamina and recovery.',
      rating: 5,
      reviews: 8230,
      img: ProductOne,
      Link: 'https://liquidblenz.com/products/pure-shilajit-tonic',
      tags: ['energy', 'stamina', 'recovery'],
   },
   {
      name: 'Good Brain Tonic - Brain Health Support',
      description:
         'Supports focus, clarity, mood balance and stress resilience.',
      rating: 5,
      reviews: 8230,
      img: ProductOne,
      Link: 'https://liquidblenz.com/products/good-brain-tonic',
      tags: ['focus', 'stress', 'clarity', 'calm'],
   },
   {
      name: 'Liquid Blenz Blood Pressure Bully – Herbal Wellness Tonic with Hawthorn & Hibiscus',
      description:
         'Cardio support tonic to help maintain healthy blood pressure.',
      rating: 5,
      reviews: 8230,
      img: ProductOne,
      Link: 'https://liquidblenz.com/products/blood-pressure-bully',
      tags: ['cardio', 'blood-pressure', 'heart'],
   },
   {
      name: 'Prostate Bully - Male Vitality Herbal Support Wellness Tonic',
      description: 'Support for male urinary & prostate health and vitality.',
      rating: 5,
      reviews: 8230,
      img: ProductOne,
      Link: 'https://liquidblenz.com/products/prostate-bully',
      tags: ['male', 'prostate', 'vitality'],
   },
   {
      name: 'Fibroid Bully – Hormone Balance & Uterine Support Tonic',
      description:
         'Herbal formula supporting female hormone balance and uterine health.',
      rating: 5,
      reviews: 8230,
      img: ProductOne,
      Link: 'https://liquidblenz.com/products/fibroid-bully',
      tags: ['hormone', 'fibroid', 'female-health'],
   },
   {
      name: 'Liquid Blenz Menopause Bully Natural Herbal Support for Women',
      description: 'Support for menopause symptoms, mood & hormonal balance.',
      rating: 5,
      reviews: 8230,
      img: ProductOne,
      Link: 'https://liquidblenz.com/products/menopause-bully',
      tags: ['hormone', 'menopause', 'female-health'],
   },
   {
      name: 'Liquid Blenz Pure Libido – Daily Herbal Wellness Drink for Him & Her',
      description:
         'Daily tonic to support libido, balance and intimate wellness.',
      rating: 5,
      reviews: 8230,
      img: ProductOne,
      Link: 'https://liquidblenz.com/products/pure-libido',
      tags: ['libido', 'balance', 'sexual-health'],
   },
   {
      name: 'Liquid Blenz Stamina Herbal Supplement for Men & Women, 24oz',
      description:
         'Large-format stamina tonic for sustained energy and performance.',
      rating: 5,
      reviews: 8230,
      img: ProductOne,
      Link: 'https://liquidblenz.com/products/stamina-herbal-supplement-24oz',
      tags: ['stamina', 'energy', 'performance'],
   },
   {
      name: 'Stamina Fix Herbal Energy Drink 12oz',
      description: 'Ready-to-drink energy tonic for an on-the-go boost.',
      rating: 5,
      reviews: 8230,
      img: ProductOne,
      Link: 'https://liquidblenz.com/products/stamina-fix-herbal-energy-drink-12oz',
      tags: ['drink', 'energy', 'stamina'],
   },
   {
      name: 'Herbal Fuel Wildberry Drink 12oz',
      description: 'Herbal-flavored drink made with natural medicinal herbs.',
      rating: 5,
      reviews: 8230,
      img: ProductOne,
      Link: 'https://liquidblenz.com/products/herbal-fuel-wildberry-drink-12oz',
      tags: ['drink', 'energy', 'flavor'],
   },
   {
      name: 'Herbal Fuel Cranberry Ginger Drink 12oz',
      description:
         'Cranberry & ginger herbal drink for refreshment and light energy.',
      rating: 5,
      reviews: 8230,
      img: ProductOne,
      Link: 'https://liquidblenz.com/products/herbal-fuel-cranberry-ginger-12oz',
      tags: ['drink', 'energy', 'flavor'],
   },
   {
      name: 'Pure Diabetes Bully – Blood Sugar Support Tonic',
      description:
         'Herbal support to help maintain healthy blood sugar levels.',
      rating: 5,
      reviews: 8230,
      img: ProductOne,
      Link: 'https://liquidblenz.com/products/pure-diabetes-bully',
      tags: ['blood-sugar', 'diabetes', 'metabolic'],
   },
   {
      name: 'PICK 1 Free 8oz with $75+ Order',
      description: 'Promotional free 8oz pick for qualifying orders.',
      rating: 5,
      reviews: 8230,
      img: ProductOne,
      Link: 'https://liquidblenz.com/products/pick-1-free-8oz',
      tags: ['promo', 'sample'],
   },
   {
      name: 'Build your Box',
      description: 'Custom bundle builder (allow customers to pick items).',
      rating: 5,
      reviews: 8230,
      img: ProductOne,
      Link: 'https://liquidblenz.com/products/build-your-box',
      tags: ['bundle', 'custom'],
   },
];

const mapKeysToProducts = (keys, allProducts) => {
   if (!keys || keys.length === 0) {
      return [allProducts[0]];
   }

   const keyMap = {
      '4_step_bundle':
         'Liquid Blenz 4-Step Detox & Cleanse Bundle – Flat Belly Bully, Sea Moss Tonic, Soursop Bitters & Immunity Enhancer',
      flat_belly_bully:
         'Liquid Blenz Flat Belly Bully – Daily Herbal Cleanse Tonic',
      soursop_bitters:
         'Pure Soursop Bitters with Moringa & Turmeric - Immune Antioxidant Supplement',
      black_seed_bitters:
         'Pure Black Seed Bitters with Moringa & Tumeric - Metabolism Support',
      sea_moss: 'Liquid Blenz Sea Moss Natural Superfood Tonic',
      elderberry:
         'Liquid Blenz Pure Immunity Enhancer – Elderberry Wellness Tonic',
      natural_elixir_pack: 'Natural Elixir Pack',
      health_builder_pack: 'Health Builder Pack',
      good_brain: 'Good Brain Tonic - Brain Health Support',
      full_reset_pack: [
         'Good Brain Tonic - Brain Health Support',
         'Liquid Blenz Sea Moss Natural Superfood Tonic',
         'Pure Soursop Bitters with Moringa & Turmeric - Immune Antioxidant Supplement',
      ],
      good_brain_seamoss: [
         'Good Brain Tonic - Brain Health Support',
         'Liquid Blenz Sea Moss Natural Superfood Tonic',
      ],
   };

   const foundProducts = [];
   const productNames = new Set();

   keys.forEach((key) => {
      const mappedValue = keyMap[key];
      if (Array.isArray(mappedValue)) {
         mappedValue.forEach((name) => {
            if (!productNames.has(name)) {
               const product = allProducts.find((p) => p.name === name);
               if (product) {
                  foundProducts.push(product);
                  productNames.add(name);
               }
            }
         });
      } else if (mappedValue) {
         if (!productNames.has(mappedValue)) {
            const product = allProducts.find((p) => p.name === mappedValue);
            if (product) {
               foundProducts.push(product);
               productNames.add(mappedValue);
            }
         }
      } else {
         const product = allProducts.find((p) => p.name.includes(key));
         if (product && !productNames.has(product.name)) {
            foundProducts.push(product);
            productNames.add(product.name);
         }
      }
   });

   return foundProducts.length > 0 ? foundProducts : [allProducts[0]];
};

const getRecommendations = (topic, answers) => {
   switch (topic) {
      case 'stress-calm': {
         let recommendations = [];
         if (
            answers.stress_level === 'high' ||
            answers.stress_level === 'medium'
         ) {
            recommendations = ['full_reset_pack'];
         } else if (
            answers.stress_level === 'low' ||
            answers.stress_level === 'calm'
         ) {
            recommendations = ['good_brain'];
         } else {
            recommendations = ['full_reset_pack'];
         }

         const addOnTriggers = [
            answers.stress_symptom === 'eating',
            answers.stress_coping === 'eating',
            answers.secondary_goal === 'digestion',
         ];
         if (addOnTriggers.some(Boolean)) {
            recommendations.push('flat_belly_bully');
         }
         return recommendations;
      }

      case 'focus-clarity': {
         const scores = { brain: 0, brain_sea: 0, reset: 0 };
         const logic = {
            Q1: {
               Constantly: 'reset',
               Frequently: 'reset',
               Occasionally: 'brain',
               Rarely: 'brain',
            },
            Q2: {
               Morning: 'brain_sea',
               'Afternoon crash': 'brain_sea',
               Evenings: 'brain',
               'All day': 'reset',
            },
            Q3: {
               'Consistently tired': 'brain_sea',
               'Highs and lows': 'reset',
               Stable: 'brain',
               'Energetic all day': 'brain',
            },
            Q4: {
               'Yes, multiple times daily': 'reset',
               'Once a day': 'brain_sea',
               Rarely: 'brain',
               Never: 'brain',
            },
            Q5: {
               'Coffee / energy drinks': 'reset',
               'Power naps': 'brain_sea',
               Exercise: 'brain',
               Supplements: 'brain',
               "I don't": 'reset',
            },
            Q6: {
               'Productivity at work': 'reset',
               'Mental clarity': 'brain',
               'Motivation & energy': 'brain_sea',
               'Memory & concentration': 'brain',
            },
         };

         Object.keys(logic).forEach((qKey, index) => {
            const questionKey = `Q${index + 1}`;
            const answer = answers[questionKey];
            if (answer && logic[questionKey][answer]) {
               const bucket = logic[questionKey][answer];
               scores[bucket]++;
            }
         });

         if (scores.reset >= scores.brain_sea && scores.reset >= scores.brain) {
            return ['full_reset_pack'];
         }
         if (
            scores.brain_sea >= scores.reset &&
            scores.brain_sea >= scores.brain
         ) {
            return ['good_brain_seamoss'];
         }
         return ['good_brain'];
      }

      case 'immunity': {
         if (answers.support_type === 'fast_boost') return ['elderberry'];
         if (answers.support_type === 'preventive') return ['sea_moss'];
         if (answers.support_type === 'recovery_energy')
            return ['natural_elixir_pack'];

         const highNeedTriggers = [
            answers.colds === 'often',
            answers.energy === 'always_tired',
            answers.diet === 'unbalanced',
            answers.sleep === 'poor_varies',
            answers.active === 'rarely',
            answers.stress === 'high',
         ];
         if (highNeedTriggers.some(Boolean)) {
            return answers.stress === 'high'
               ? ['health_builder_pack']
               : ['natural_elixir_pack'];
         }

         if (answers.colds === 'rarely') return ['sea_moss'];
         return ['elderberry', 'sea_moss'];
      }

      case 'weight-loss': {
         let primary = 'soursop_bitters';
         let addons = [];

         if (answers.body_focus === 'belly') primary = 'flat_belly_bully';
         if (answers.experience_level === 'always')
            primary = 'black_seed_bitters';

         if (answers.challenge === 'cravings') addons.push('flat_belly_bully');
         if (answers.challenge === 'low_energy') addons.push('sea_moss');
         if (answers.challenge === 'metabolism')
            addons.push('black_seed_bitters');
         if (answers.challenge === 'stress') addons.push('good_brain');
         if (answers.challenge === 'digestion') addons.push('flat_belly_bully');

         if (answers.eating === 'processed') addons.push('black_seed_bitters');
         if (answers.sleep === 'poor') addons.push('soursop_bitters');
         if (answers.stress === 'often' || answers.stress === 'constant') {
            addons.push('good_brain');
         }

         if (answers.secondary_goal === 'energy') addons.push('sea_moss');
         if (answers.secondary_goal === 'calm') addons.push('good_brain');
         if (answers.secondary_goal === 'digestion')
            addons.push('flat_belly_bully');

         if (answers.support_preference === 'detox') return ['4_step_bundle'];
         if (
            answers.support_preference === 'combo' ||
            answers.combination_preference === 'yes'
         ) {
            return ['4_step_bundle', ...addons];
         }
         if (answers.combination_preference === 'no') {
            return [primary, addons[0]].filter(Boolean);
         }

         return [primary, ...addons];
      }

      default:
         return ['4_step_bundle'];
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
   const [suggestedProducts, setSuggestedProducts] = useState([]);

   useEffect(() => {
      try {
         const topic = localStorage.getItem('lastCompletedQuizTopic');
         const answersJSON = localStorage.getItem(`quizAnswers_${topic}`);
         const answers = answersJSON ? JSON.parse(answersJSON) : {};

         if (!allProducts || allProducts.length === 0) {
            console.error('`allProducts` array is empty or not defined.');
            setIsLoading(false);
            return;
         }

         if (!topic || Object.keys(answers).length === 0) {
            setSuggestedProducts([allProducts[0]]);
            setIsLoading(false);
            return;
         }

         const recommendedKeys = getRecommendations(topic, answers);
         const products = mapKeysToProducts(recommendedKeys, allProducts);

         setSuggestedProducts(products.slice(0, 4));

         // I have commented these out so you can test.
         // Your localStorage will NOT be deleted.
         // localStorage.removeItem('lastCompletedQuizTopic');
         // localStorage.removeItem(`quizAnswers_${topic}`);
      } catch (error) {
         console.error('Error processing quiz results:', error);
         if (allProducts && allProducts.length > 0) {
            setSuggestedProducts([allProducts[0]]);
         }
      }

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

         {!isLoading && suggestedProducts.length > 0 && (
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
                  {suggestedProducts.map((product) => (
                     <motion.div
                        className='suggestion-card'
                        key={product.name}
                        variants={itemVariants}
                     >
                        <div className='suggestion-card-img-wrap'>
                           <img
                              src={product.img}
                              alt={product.name}
                              className='suggestion-card-img'
                           />
                           <span className='suggestion-card-fav'>
                              <AiOutlineStar size={26} />
                           </span>
                        </div>
                        <div className='suggestion-card-body'>
                           <div className='suggestion-card-name'>
                              {product.name}
                           </div>
                           <div className='suggestion-card-desc'>
                              {product.description}
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
                                 ({product.reviews})
                              </span>
                           </div>
                           <Link
                              to={product.Link}
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
                  ))}
               </div>
            </motion.div>
         )}
      </div>
   );
};

export default Suggestions;
