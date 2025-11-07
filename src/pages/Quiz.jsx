import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner'; // Import the loader
import arrow from '../assets/SVG.svg';
import imgBelly from '../assets/imgBelly.svg';
import imgThighs from '../assets/imgThighs.svg';
import imgArms from '../assets/imgArms.svg';
import imgAllOver from '../assets/imgAllOver.svg';
import BackIcon from '../assets/backsvg.svg';

const quizSteps = [
   {
      percent: 0,
      title: 'Weight Loss',
      subtitle:
         "Answer a few quick questions and we'll recommend a plan tailored for you.",
      question: 'Which best represents your weight loss goals?',
      options: [
         { label: 'Lose a few pounds (5–10 lbs)' },
         { label: 'Lose a moderate amount (10–20 lbs)' },
         { label: 'Lose significant weight (20+ lbs)' },
         { label: 'Maintain weight but tone up' },
         { label: 'Improve overall health & metabolism' },
      ],
   },
   {
      percent: 6,
      title: 'Weight Loss',
      subtitle:
         "Answer a few quick questions and we'll recommend a plan tailored for you.",
      question: 'Where do you feel weight is most noticeable?',
      options: [
         { label: 'Belly / waist', img: imgBelly },
         { label: 'Thighs / hips', img: imgThighs },
         { label: 'Arms', img: imgArms },
         { label: 'All over', img: imgAllOver },
         { label: 'Not sure' },
      ],
   },
   {
      percent: 12,
      title: 'Weight Loss',
      subtitle:
         "Answer a few quick questions and we'll recommend a plan tailored for you.",
      question: 'How long have you been working on weight loss?',
      options: [
         { label: 'Just starting' },
         { label: 'Tried for a few months' },
         { label: 'On & off for years' },
         { label: 'I’ve always struggled' },
      ],
   },
   {
      percent: 18,
      title: 'Weight Loss',
      subtitle:
         "Answer a few quick questions and we'll recommend a plan tailored for you.",
      question: 'What motivates you most to lose weight?',
      options: [
         {
            label: 'Improve health (heart, blood pressure, diabetes prevention)',
         },
         { label: 'Boost confidence & appearance' },
         { label: 'Increase energy & stamina' },
         { label: 'Fit better in clothes' },
         { label: 'Improve digestion & metabolism' },
      ],
   },
   {
      percent: 24,
      title: 'Weight Loss',
      subtitle:
         "Answer a few quick questions and we'll recommend a plan tailored for you.",
      question: 'What’s your current lifestyle like?',
      options: [
         { label: 'Sedentary (sit most of the day)' },
         { label: 'Lightly active (occasional walks / light exercise)' },
         { label: 'Active (workouts 3-5x a week)' },
         { label: 'Very active (daily training, physical job, or sports)' },
      ],
   },
   {
      percent: 30,
      title: 'Weight Loss',
      subtitle:
         "Answer a few quick questions and we'll recommend a plan tailored for you.",
      question: 'What’s your biggest challenge with weight loss?',
      options: [
         { label: 'Cravings & overeating' },
         { label: 'Low energy / lack of motivation' },
         { label: 'Slow metabolism' },
         { label: 'Stress & emotional eating' },
         { label: 'Inconsistent exercise' },
         { label: 'Poor digestion' },
      ],
   },
   {
      percent: 36,
      title: 'Weight Loss',
      subtitle:
         "Answer a few quick questions and we'll recommend a plan tailored for you.",
      question: 'How would you describe your eating habits?',
      options: [
         { label: 'Balanced meals, just large portions' },
         { label: 'Skip meals, then overeat' },
         { label: 'Frequent snacking' },
         { label: 'High-sugar / processed foods' },
         { label: 'Healthy most of the time' },
      ],
   },
   {
      percent: 42,
      title: 'Weight Loss',
      subtitle: 'Weight loss isn’t one-size-fits-all.',
      info: {
         heading: 'Weight loss isn’t one-size-fits-all.',
         lines: [
            'Weight loss isn’t one–size–fits–all.',
            'Factors like <b>metabolism, cravings, stress, and lifestyle</b> all affect your results.',
            'The good news? With the right natural support, you can boost energy, manage cravings, and achieve steady results that last.',
         ],
      },
   },
   {
      percent: 48,
      title: 'Weight Loss',
      subtitle:
         "Answer a few quick questions and we'll recommend a plan tailored for you.",
      question: 'How often do you experience digestive issues?',
      options: [
         { label: 'Rarely' },
         { label: 'Sometimes' },
         { label: 'Often (bloating, irregular digestion)' },
         { label: 'Daily' },
      ],
   },
   {
      percent: 54,
      title: 'Weight Loss',
      subtitle:
         "Answer a few quick questions and we'll recommend a plan tailored for you.",
      question: 'How’s your sleep quality?',
      options: [
         { label: 'Great (7-8 hrs, restful)' },
         { label: 'Okay (5-6 hrs, light sleep)' },
         { label: 'Poor (less than 5 hrs, restless)' },
         { label: 'Varies a lot' },
      ],
   },
   {
      percent: 60,
      title: 'Weight Loss',
      subtitle:
         "Answer a few quick questions and we'll recommend a plan tailored for you.",
      question: 'How often do you feel stressed or emotionally drained?',
      options: [
         { label: 'Rarely' },
         { label: 'Sometimes' },
         { label: 'Often' },
         { label: 'Constantly' },
      ],
   },
   {
      percent: 66,
      title: 'Weight Loss',
      subtitle:
         'Stress, cravings, and poor sleep can all sabotage weight loss.',
      info: {
         heading:
            'Stress, cravings, and poor sleep can all sabotage weight loss.',
         link: 'That’s why our approach is holistic:',
         lines: [
            'supporting digestion, stress, and metabolism — not just calories.',
         ],
      },
   },
   {
      percent: 72,
      title: 'Weight Loss',
      subtitle:
         "Answer a few quick questions and we'll recommend a plan tailored for you.",
      question: 'Which type of support would you prefer?',
      options: [
         { label: 'Daily liquid tonic (easy routine)' },
         { label: 'Herbal drinks for cravings & energy' },
         { label: 'Detox + cleanse pack' },
         { label: 'A combination plan' },
      ],
   },
   {
      percent: 80,
      title: 'Weight Loss',
      subtitle:
         "Answer a few quick questions and we'll recommend a plan tailored for you.",
      question: 'Are you open to a combination approach?',
      options: [
         { label: 'Yes, I want the best results' },
         { label: 'No, I’d like to start simple' },
      ],
   },
   {
      percent: 91,
      title: 'Weight Loss',
      subtitle:
         "Answer a few quick questions and we'll recommend a plan tailored for you.",
      question: 'Would you like to improve any secondary areas?',
      options: [
         { label: 'Energy & stamina' },
         { label: 'Stress & calm' },
         { label: 'Digestion & gut health' },
         { label: 'Focus & clarity' },
         { label: 'Libido & balance' },
         { label: 'None' },
      ],
   },
   {
      percent: 100,
      title: 'Please provide your information',
      form: true,
   },
];

const Quiz = () => {
   // State persistence: Read from localStorage or default to 0
   const [step, setStep] = useState(() => {
      const savedStep = localStorage.getItem('quizStep');
      const initialStep = parseInt(savedStep, 10);
      return !isNaN(initialStep) &&
         initialStep >= 0 &&
         initialStep < quizSteps.length
         ? initialStep
         : 0;
   });

   const [selected, setSelected] = useState(null);
   const [form, setForm] = useState({
      name: '',
      email: '',
      phone: '',
      location: '',
      agree: false,
   });
   const [isLoading, setIsLoading] = useState(false); // New loading state
   const navigate = useNavigate(); // Hook for navigation

   // Save step to localStorage whenever it changes
   useEffect(() => {
      localStorage.setItem('quizStep', step);
   }, [step]);

   const current = quizSteps[step];

   if (!current) {
      // Error handling remains the same
      return (
         <div className='quiz-container'>
            <div className='quiz-header'>
               <h1 className='quiz-title'>Quiz Error</h1>
            </div>
            <div className='quiz-content'>
               <p style={{ color: 'red', fontSize: 20 }}>
                  Sorry, there was a problem loading this quiz step.
                  <br />
                  Please try refreshing the page or contact support.
               </p>
            </div>
         </div>
      );
   }

   const handleOption = (idx) => setSelected(idx);

   const handleNext = () => {
      if (step < quizSteps.length - 1) {
         setStep(step + 1);
         setSelected(null);
      }
   };

   const handleBack = () => {
      if (step > 0) {
         setStep(step - 1);
         setSelected(null);
      }
   };

   const handleFormChange = (e) => {
      const { name, value, type, checked } = e.target;
      setForm((f) => ({
         ...f,
         [name]: type === 'checkbox' ? checked : value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);

      setTimeout(() => {
         localStorage.removeItem('quizStep');
         navigate('/suggestion');
      }, 2000);
   };

   if (isLoading) {
      return (
         <div
            className='quiz-container'
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               minHeight: '80vh',
               flexDirection: 'column',
            }}
         >
            <Oval
               height={80}
               width={80}
               color='#189f1d'
               wrapperStyle={{}}
               wrapperClass=''
               visible={true}
               ariaLabel='oval-loading'
               secondaryColor='#189f1d'
               strokeWidth={2}
               strokeWidthSecondary={2}
            />
            <h2
               style={{
                  color: '#144395',
                  marginTop: '20px',
                  textAlign: 'center',
               }}
            >
               Hold on, we are fetching the best weight loss product for you...
            </h2>
         </div>
      );
   }

   return (
      <div className='quiz-container'>
         <div className='quiz-header'>
            <h1 className='quiz-title'>{current.title || 'Quiz'}</h1>
            <div className='quiz-progress'>
               <span className='quiz-progress-text'>
                  {current.percent ?? 0}%
               </span>
               <svg className='quiz-progress-circle' width='64' height='64'>
                  <circle
                     cx='32'
                     cy='32'
                     r='28'
                     stroke='#189f1d'
                     strokeWidth='4'
                     fill='none'
                     opacity='0.2'
                  />
                  <circle
                     cx='32'
                     cy='32'
                     r='28'
                     stroke='#189f1d'
                     strokeWidth='4'
                     fill='none'
                     strokeDasharray={2 * Math.PI * 28}
                     strokeDashoffset={
                        2 * Math.PI * 28 * (1 - (current.percent ?? 0) / 100)
                     }
                     style={{ transition: 'stroke-dashoffset 0.4s' }}
                  />
               </svg>
            </div>
         </div>
         <div className='quiz-content'>
            {current.form ? (
               <form
                  className='quiz-form'
                  autoComplete='off'
                  onSubmit={handleSubmit} // Added onSubmit handler
               >
                  <h2 className='quiz-form-title'>
                     Let’s personalize your plan!
                  </h2>
                  <div className='quiz-form-group'>
                     <label>Name</label>
                     <input
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={handleFormChange}
                     />
                  </div>
                  <div className='quiz-form-group'>
                     <label>Email</label>
                     <input
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handleFormChange}
                     />
                  </div>
                  <div className='quiz-form-group'>
                     <label>Phone</label>
                     <input
                        type='text'
                        name='phone'
                        value={form.phone}
                        onChange={handleFormChange}
                     />
                  </div>
                  <div className='quiz-form-group'>
                     <label>Location</label>
                     <input
                        type='text'
                        name='location'
                        value={form.location}
                        onChange={handleFormChange}
                     />
                  </div>
                  <div className='quiz-form-check'>
                     <input
                        type='checkbox'
                        name='agree'
                        checked={form.agree}
                        onChange={handleFormChange}
                        id='agree'
                     />
                     <label htmlFor='agree'>
                        I Agree to receive health tips & offers.
                     </label>
                  </div>
                  <div className='quiz-form-actions'>
                     <button
                        type='button'
                        className='quiz-btn quiz-btn-outline'
                        onClick={handleBack}
                     >
                        <img
                           src={BackIcon}
                           alt='back'
                           className='quiz-btn-arrow'
                        />
                        Back
                     </button>
                     <button
                        type='submit' // Stays as 'submit' to trigger the form's onSubmit
                        className='quiz-btn'
                        style={{ marginLeft: 16 }}
                     >
                        See My Plan
                        <img
                           src={arrow}
                           alt='next'
                           className='quiz-btn-arrow'
                        />
                     </button>
                  </div>
               </form>
            ) : current.info ? (
               <div className='quiz-info-step'>
                  <div
                     className='quiz-info-heading'
                     style={{
                        color: '#144395',
                        fontWeight: 700,
                        fontSize: 20,
                        marginBottom: 12,
                     }}
                  >
                     {current.info.heading}
                  </div>
                  {current.info.link && (
                     <div
                        style={{
                           color: '#144395',
                           fontSize: 16,
                           marginBottom: 6,
                        }}
                     >
                        {current.info.link}
                     </div>
                  )}
                  {current.info.lines &&
                     current.info.lines.map((line, i) => (
                        <div
                           key={i}
                           style={{
                              color: i === 1 ? '#000' : '#222',
                              fontWeight: i === 1 ? 700 : 400,
                              fontSize: 16,
                              marginBottom: 4,
                           }}
                           dangerouslySetInnerHTML={{ __html: line }}
                        />
                     ))}
                  <div className='quiz-actions' style={{ marginTop: 24 }}>
                     {step > 0 && (
                        <button
                           className='quiz-btn quiz-btn-outline'
                           onClick={handleBack}
                           type='button'
                        >
                           <img
                              src={BackIcon}
                              alt='back'
                              className='quiz-btn-arrow'
                           />
                           Back
                        </button>
                     )}
                     <button
                        className='quiz-btn'
                        onClick={handleNext}
                        type='button'
                        style={{ marginLeft: 16 }}
                     >
                        {step === quizSteps.length - 2 ? 'Continue' : 'Next'}
                        <img
                           src={arrow}
                           alt='next'
                           className='quiz-btn-arrow'
                        />
                     </button>
                  </div>
               </div>
            ) : (
               <>
                  {current.subtitle && (
                     <div className='quiz-subtitle'>{current.subtitle}</div>
                  )}
                  {current.question && (
                     <div className='quiz-question'>{current.question}</div>
                  )}
                  {Array.isArray(current.options) && (
                     <div className='quiz-options'>
                        {current.options.map((opt, idx) => (
                           <div
                              key={opt.label}
                              className={`quiz-option${
                                 selected === idx
                                    ? ' quiz-option--selected'
                                    : ''
                              }`}
                              onClick={() => handleOption(idx)}
                           >
                              <span className='quiz-radio'>
                                 {selected === idx ? (
                                    <span className='quiz-radio-checked' />
                                 ) : (
                                    <span className='quiz-radio-unchecked' />
                                 )}
                              </span>
                              <span className='quiz-option-label'>
                                 {opt.label}
                              </span>
                              {opt.img && (
                                 <img
                                    src={opt.img}
                                    alt=''
                                    className='quiz-option-img'
                                 />
                              )}
                           </div>
                        ))}
                     </div>
                  )}
                  <div className='quiz-actions'>
                     {step > 0 && (
                        <button
                           className='quiz-btn quiz-btn-outline'
                           onClick={handleBack}
                           type='button'
                        >
                           <img
                              src={BackIcon}
                              alt='back'
                              className='quiz-btn-arrow'
                           />
                           Back
                        </button>
                     )}
                     <button
                        className='quiz-btn'
                        onClick={handleNext}
                        disabled={
                           !Array.isArray(current.options) || selected === null
                        }
                        type='button'
                     >
                        Next
                        <img
                           src={arrow}
                           alt='next'
                           className='quiz-btn-arrow'
                        />
                     </button>
                  </div>
               </>
            )}
         </div>
      </div>
   );
};

export default Quiz;
