import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import arrow from '../assets/SVG.svg';
import imgBelly from '../assets/imgBelly.svg';
import imgThighs from '../assets/imgThighs.svg';
import imgArms from '../assets/imgArms.svg';
import imgAllOver from '../assets/imgAllOver.svg';
import BackIcon from '../assets/backsvg.svg';

const quizzes = {
   'weight-loss': [
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
   ],
   'stress-calm': [
      {
         percent: 0,
         title: 'Stress & Calm',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'Which best describes your current stress levels?',
         options: [
            { label: 'Constantly anxious or tense' },
            { label: 'Frequently stressed but manageable' },
            { label: 'Occasional stress' },
            { label: 'Calm most of the time' },
         ],
      },
      {
         percent: 10,
         title: 'Stress & Calm',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'What’s the biggest source of stress for you?',
         options: [
            { label: 'Work or studies' },
            { label: 'Family or relationships' },
            { label: 'Health concerns' },
            { label: 'Finances' },
            { label: 'Other' },
         ],
      },
      {
         percent: 20,
         title: 'Stress & Calm',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How does stress usually show up for you?',
         options: [
            { label: 'Trouble sleeping' },
            { label: 'Headaches or tension' },
            { label: 'Emotional eating' },
            { label: 'Low mood or irritability' },
            { label: 'Loss of focus' },
         ],
      },
      {
         percent: 30,
         title: 'Stress & Calm',
         subtitle:
            'Stress affects more than your mood — it impacts sleep, energy, digestion, and even hormones.',
         info: {
            heading:
               'Stress affects more than your mood — it impacts sleep, energy, digestion, and even hormones.',
            lines: [
               'The good news: nature provides calming herbs that help your body adapt and rebalance naturally.',
            ],
         },
      },
      {
         percent: 40,
         title: 'Stress & Calm',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How well do you usually sleep?',
         options: [
            { label: 'Great, 7-8 hours' },
            { label: 'Okay, light sleep' },
            { label: 'Poor, restless' },
            { label: 'Hardly sleep' },
         ],
      },
      {
         percent: 50,
         title: 'Stress & Calm',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How often do you take time to unwind or relax?',
         options: [
            { label: 'Every day' },
            { label: 'A few times a week' },
            { label: 'Rarely' },
            { label: 'Never' },
         ],
      },
      {
         percent: 60,
         title: 'Stress & Calm',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'When you feel stressed, what helps you the most?',
         options: [
            { label: 'Exercise or movement' },
            { label: 'Talking to someone' },
            { label: 'Food or comfort snacks' },
            { label: 'Rest / sleep' },
            { label: 'Meditation or breathing' },
         ],
      },
      {
         percent: 70,
         title: 'Stress & Calm',
         subtitle:
            'Adaptogenic herbs like Ashwagandha and Lemon Balm support your mind’s natural resilience to stress.',
         info: {
            heading:
               'Adaptogenic herbs like Ashwagandha and Lemon Balm support your mind’s natural resilience to stress.',
            lines: [
               'Paired with calming blends, you can start feeling relaxed — without drowsiness.',
            ],
         },
      },
      {
         percent: 80,
         title: 'Stress & Calm',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'What type of support do you prefer?',
         options: [
            { label: 'Liquid tonic I can take daily' },
            { label: 'Herbal drink for evening relaxation' },
            { label: 'Combination of both' },
         ],
      },
      {
         percent: 90,
         title: 'Stress & Calm',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'Would you like to improve other areas as well?',
         options: [
            { label: 'Sleep quality' },
            { label: 'Focus & energy' },
            { label: 'Digestion & mood' },
            { label: 'None' },
         ],
      },
      {
         percent: 100,
         title: 'Please provide your information',
         form: true,
      },
   ],
   'focus-clarity': [
      {
         percent: 0,
         title: 'Focus & Clarity',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How often do you feel distracted or unfocused?',
         options: [
            { label: 'Constantly' },
            { label: 'Frequently' },
            { label: 'Occasionally' },
            { label: 'Rarely' },
         ],
      },
      {
         percent: 12,
         title: 'Focus & Clarity',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'What time of day do you struggle most to focus?',
         options: [
            { label: 'Morning' },
            { label: 'Afternoon crash' },
            { label: 'Evenings' },
            { label: 'All day' },
         ],
      },
      {
         percent: 25,
         title: 'Focus & Clarity',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'What’s your current energy like throughout the day?',
         options: [
            { label: 'Consistently tired' },
            { label: 'Highs and lows' },
            { label: 'Stable' },
            { label: 'Energetic all day' },
         ],
      },
      {
         percent: 50,
         title: 'Focus & Clarity',
         subtitle:
            'Mental fatigue often comes from stress, poor sleep, and nutrition gaps.',
         info: {
            heading:
               'Mental fatigue often comes from stress, poor sleep, and nutrition gaps.',
            lines: [
               'Adaptogens like Ginkgo, Rhodiola, and Maca support focus and sustained energy naturally.',
            ],
         },
      },
      {
         percent: 62,
         title: 'Focus & Clarity',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'Do you consume caffeine regularly?',
         options: [
            { label: 'Yes, multiple times daily' },
            { label: 'Once a day' },
            { label: 'Rarely' },
            { label: 'Never' },
         ],
      },
      {
         percent: 70,
         title: 'Focus & Clarity',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How do you manage mental fatigue?',
         options: [
            { label: 'Coffee / energy drinks' },
            { label: 'Power naps' },
            { label: 'Exercise' },
            { label: 'Supplements' },
            { label: 'I don’t' },
         ],
      },
      {
         percent: 82,
         title: 'Focus & Clarity',
         subtitle:
            'Natural energy boosters help you stay focused without the crash.',
         info: {
            heading:
               'Natural energy boosters help you stay focused without the crash.',
            lines: [
               'Liquid Blenz tonics are designed to balance focus, mood, and stamina.',
            ],
         },
      },
      {
         percent: 90,
         title: 'Focus & Clarity',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'What are you looking to improve most?',
         options: [
            { label: 'Productivity at work' },
            { label: 'Mental clarity' },
            { label: 'Motivation & energy' },
            { label: 'Memory & concentration' },
         ],
      },
      {
         percent: 100,
         title: 'Please provide your information',
         form: true,
      },
   ],
   'immunity-support': [
      {
         percent: 0,
         title: 'Immunity Support',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How often do you catch colds or feel run down?',
         options: [
            { label: 'Often (every month or two)' },
            { label: 'Occasionally' },
            { label: 'Rarely' },
            { label: 'Hardly ever' },
         ],
      },
      {
         percent: 16,
         title: 'Immunity Support',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How would you describe your daily energy levels?',
         options: [
            { label: 'Always tired' },
            { label: 'Up and down' },
            { label: 'Usually good' },
            { label: 'Always high' },
         ],
      },
      {
         percent: 24,
         title: 'Immunity Support',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How balanced is your diet?',
         options: [
            { label: 'Lots of fruits/veggies' },
            { label: 'Moderate, could improve' },
            { label: 'Unbalanced, eat on the go' },
            { label: 'Not sure' },
         ],
      },
      {
         percent: 36,
         title: 'Immunity Support',
         subtitle:
            'Your immune system works best when supported with the right nutrients and rest.',
         info: {
            heading:
               'Your immune system works best when supported with the right nutrients and rest.',
            lines: [
               'Adaptogens and antioxidant-rich herbs can help strengthen natural defense and recovery.',
            ],
         },
      },
      {
         percent: 43,
         title: 'Immunity Support',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How well do you sleep at night?',
         options: [
            { label: 'Great' },
            { label: 'Fair' },
            { label: 'Poor' },
            { label: 'Varies' },
         ],
      },
      {
         percent: 55,
         title: 'Immunity Support',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How active are you during the week?',
         options: [
            { label: 'Very active' },
            { label: 'Somewhat active' },
            { label: 'Not very active' },
            { label: 'Rarely active' },
         ],
      },
      {
         percent: 65,
         title: 'Immunity Support',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'Do you experience frequent stress or burnout?',
         options: [
            { label: 'Yes, a lot' },
            { label: 'Sometimes' },
            { label: 'Rarely' },
            { label: 'Not at all' },
         ],
      },
      {
         percent: 73,
         title: 'Immunity Support',
         subtitle:
            'Stress, poor sleep, and low nutrition weaken your immunity — but nature offers a reset.',
         info: {
            heading:
               'Stress, poor sleep, and low nutrition weaken your immunity — but nature offers a reset.',
            lines: [
               'Herbs like Elderberry, Echinacea, and Astragalus can restore your body’s resilience.',
            ],
         },
      },
      {
         percent: 85,
         title: 'Immunity Support',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'What kind of support are you looking for?',
         options: [
            { label: 'Preventive daily tonic' },
            { label: 'Fast immune booster' },
            { label: 'Recovery and energy support' },
         ],
      },
      {
         percent: 100,
         title: 'Please provide your information',
         form: true,
      },
   ],
   'libido-balance': [
      {
         percent: 0,
         title: 'Libido & Balance',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'Which best describes your current concern?',
         options: [
            { label: 'Low desire / libido' },
            { label: 'Low stamina or energy' },
            { label: 'Hormonal imbalance' },
            { label: 'Mood & confidence issues' },
         ],
      },
      {
         percent: 13,
         title: 'Libido & Balance',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How long have you noticed these changes?',
         options: [
            { label: 'Recently (past few months)' },
            { label: '6-12 months' },
            { label: 'Over a year' },
            { label: 'Unsure' },
         ],
      },
      {
         percent: 27,
         title: 'Libido & Balance',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How often do you feel physically tired or drained?',
         options: [
            { label: 'Every day' },
            { label: 'Several times a week' },
            { label: 'Occasionally' },
            { label: 'Rarely' },
         ],
      },
      {
         percent: 39,
         title: 'Libido & Balance',
         subtitle: 'Your energy, hormones, and mood are all connected.',
         info: {
            heading: 'Your energy, hormones, and mood are all connected.',
            lines: [
               'Natural adaptogens help restore your balance and confidence — without side effects.',
            ],
         },
      },
      {
         percent: 53,
         title: 'Libido & Balance',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How often do you exercise?',
         options: [
            { label: 'Regularly' },
            { label: 'Occasionally' },
            { label: 'Rarely' },
            { label: 'Never' },
         ],
      },
      {
         percent: 67,
         title: 'Libido & Balance',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'Do you experience stress or anxiety often?',
         options: [
            { label: 'Yes' },
            { label: 'Sometimes' },
            { label: 'Rarely' },
            { label: 'No' },
         ],
      },
      {
         percent: 88,
         title: 'Libido & Balance',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'What’s your goal with this plan?',
         options: [
            { label: 'Boost libido' },
            { label: 'Improve energy & mood' },
            { label: 'Support hormonal balance' },
            { label: 'All of the above' },
         ],
      },
      {
         percent: 100,
         title: 'Please provide your information',
         form: true,
      },
   ],
   'digestion-gut-health': [
      {
         percent: 0,
         title: 'Digestion & Gut Health',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How often do you experience bloating or discomfort?',
         options: [
            { label: 'Daily' },
            { label: 'A few times a week' },
            { label: 'Occasionally' },
            { label: 'Rarely' },
         ],
      },
      {
         percent: 15,
         title: 'Digestion & Gut Health',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'Which symptom affects you most?',
         options: [
            { label: 'Gas or bloating' },
            { label: 'Irregular digestion' },
            { label: 'Acid reflux' },
            { label: 'All of the above' },
         ],
      },
      {
         percent: 33,
         title: 'Digestion & Gut Health',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How’s your appetite usually?',
         options: [
            { label: 'Low appetite' },
            { label: 'Normal' },
            { label: 'Too high' },
            { label: 'Varies a lot' },
         ],
      },
      {
         percent: 48,
         title: 'Digestion & Gut Health',
         subtitle:
            'Digestive issues can come from poor diet, stress, or low enzyme activity.',
         info: {
            heading:
               'Digestive issues can come from poor diet, stress, or low enzyme activity.',
            lines: [
               'Natural herbs and probiotics can help rebalance and support your gut health.',
            ],
         },
      },
      {
         percent: 60,
         title: 'Digestion & Gut Health',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How many meals do you eat per day?',
         options: [
            { label: '1-2' },
            { label: '3' },
            { label: '4 or more' },
            { label: 'I skip meals' },
         ],
      },
      {
         percent: 75,
         title: 'Digestion & Gut Health',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'What’s your diet type?',
         options: [
            { label: 'Mixed (regular diet)' },
            { label: 'Plant-based' },
            { label: 'High protein' },
            { label: 'Processed / convenience foods' },
         ],
      },
      {
         percent: 82,
         title: 'Digestion & Gut Health',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How would you describe your bowel movements?',
         options: [
            { label: 'Regular and normal' },
            { label: 'Occasional constipation' },
            { label: 'Loose or irregular' },
            { label: 'Always uncomfortable' },
         ],
      },
      {
         percent: 91,
         title: 'Digestion & Gut Health',
         subtitle:
            'Digestive tonics and herbal blends can reset your gut rhythm.',
         info: {
            heading:
               'Digestive tonics and herbal blends can reset your gut rhythm.',
            lines: [
               'They support detox, reduce bloating, and help your body absorb nutrients better.',
            ],
         },
      },
      {
         percent: 100,
         title: 'Please provide your information',
         form: true,
      },
   ],
};

const Quiz = () => {
   const { topic } = useParams();
   const quizSteps = quizzes[topic] || quizzes['weight-loss'];

   const [step, setStep] = useState(() => {
      const savedStep = localStorage.getItem(`quizStep_${topic}`);
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
   const [isLoading, setIsLoading] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      localStorage.setItem(`quizStep_${topic}`, step);
   }, [step, topic]);

   const current = quizSteps[step];

   if (!current) {
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
         localStorage.removeItem(`quizStep_${topic}`);
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
