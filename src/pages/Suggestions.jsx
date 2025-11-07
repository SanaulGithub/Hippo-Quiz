import { AiOutlineStar } from 'react-icons/ai';
import ProductOne from '../assets/product1.webp';
import ProductTwo from '../assets/producttwo.svg';
import ProductThree from '../assets/productthree.webp';
import ProductFour from '../assets/productfour.webp';
import { Link } from 'react-router-dom';

import { AiFillStar } from 'react-icons/ai';

const products = [
   {
      name: 'Liquid Blenz Flat Belly Bully – Daily Herbal Cleanse Tonic',
      description:
         'Whether youre jumpstarting your wellness journey or enhancing your routine, Flat Belly Bully is a natural way to support balance and mindful living',
      rating: 5,
      reviews: 8230,
      img: ProductOne,
      Link: 'https://liquidblenz.com/products/pure-flat-belly-bully',
   },
   {
      name: 'Fibroid Bully – Hormone Balance & Uterine Support Tonic',
      description:
         'Crafted with herbs traditionally used by women for centuries, including Chasteberry, Dong Quai, Red Raspberry Leaf, and more',
      rating: 5,
      reviews: 8230,
      img: ProductTwo,
      Link: 'https://liquidblenz.com/products/pure-fibroid-bully',
   },
   {
      name: 'Herbal Fuel Wildberry Drink',
      description:
         'Revitalize and refresh your tastebuds with our Herbal flavored drink. Made with natural medicinal herbs, spices and Wildberry flavor',
      rating: 5,
      reviews: 8230,
      img: ProductThree,
      Link: 'https://liquidblenz.com/products/herbal-fuel-wildberry-drink-12oz-1',
   },
   {
      name: 'Liquid Blenz Menopause Bully Natural Herbal Support for Women',
      description:
         'Are you ready to take control of your menopause journey? Say goodbye to the challenges and discomfort that can accompany this significant life transition',
      rating: 5,
      reviews: 8230,
      img: ProductFour,
      Link: 'https://liquidblenz.com/products/pure-menopause-bully',
   },
];

const Suggestions = () => {
   return (
      <div className='suggestions-container'>
         <h1 className='suggestions-title'>Suggested Solutions</h1>
         <div className='suggestions-subtitle'>
            Here’s a plan designed for your needs.
         </div>
         <div className='suggestions-list'>
            {products.map((product, idx) => (
               <div className='suggestion-card' key={idx}>
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
                     <div className='suggestion-card-name'>{product.name}</div>
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
               </div>
            ))}
         </div>
      </div>
   );
};

export default Suggestions;
