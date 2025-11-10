import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/img1.svg';
import img2 from '../assets/img2.svg';
import img3 from '../assets/img3.svg';
import img4 from '../assets/img4.svg';
import img5 from '../assets/img5.svg';
import img6 from '../assets/img6.svg';
import arrow from '../assets/SVG.svg';

const options = [
   { label: 'Weight Loss', img: img1, link: '/quiz/weight-loss' },
   { label: 'Stress & Calm', img: img4, link: '/quiz/stress-calm' },
   { label: 'Focus & Clarity', img: img2, link: '/quiz/focus-clarity' },
   { label: 'Immunity Support', img: img5, link: '/quiz/immunity-support' }, // /quiz/immunity-support
   { label: 'Libido & Balance', img: img3, link: '#' }, // /quiz/libido-balance
   {
      label: 'Digestion & Gut Health',
      img: img6,
      link: '#', // /quiz/digestion-gut-health
   },
];

const Shop = () => {
   const [hovered, setHovered] = useState(null);

   return (
      <div className='shop-container'>
         <div className='shop-wrapper'>
            <h1 className='shop-title'>
               Which area of your wellness do
               <br />
               you want to improve today?
            </h1>
            <div className='shop-grid'>
               {options.map((opt, idx) => {
                  const isActive = hovered === idx;
                  const content = (
                     <>
                        <span className='shop-label'>{opt.label}</span>
                        <img
                           src={opt.img}
                           alt={opt.label}
                           className={`shop-img${
                              isActive ? ' shop-img--active' : ''
                           }`}
                        />
                        <span
                           className={`shop-arrow${
                              isActive ? ' shop-arrow--active' : ''
                           }`}
                        >
                           <img src={arrow} alt='arrow' />
                        </span>
                     </>
                  );
                  return (
                     <Link
                        to={opt.link}
                        key={opt.label}
                        className={`shop-option${
                           isActive ? ' shop-option--active' : ''
                        }`}
                        style={{
                           background: isActive
                              ? 'var(--primary-green)'
                              : '#e7ecf4',
                           color: isActive ? '#fff' : '#000',
                           position: 'relative',
                           textDecoration: 'none',
                        }}
                        onMouseEnter={() => setHovered(idx)}
                        onMouseLeave={() => setHovered(null)}
                     >
                        {content}
                     </Link>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default Shop;
