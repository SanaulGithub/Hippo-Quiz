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
         key: 'weight_goal',
         percent: 0,
         title: 'Weight Loss',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'Which best represents your weight loss goals?',
         options: [
            { label: 'Lose a few pounds (5–10 lbs)', value: 'few' },
            { label: 'Lose a moderate amount (10–20 lbs)', value: 'moderate' },
            {
               label: 'Lose significant weight (20+ lbs)',
               value: 'significant',
            },
            { label: 'Maintain weight but tone up', value: 'tone' },
            {
               label: 'Improve overall health & metabolism',
               value: 'metabolism',
            },
         ],
      },
      {
         key: 'body_focus',
         percent: 6,
         title: 'Weight Loss',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'Where do you feel weight is most noticeable?',
         options: [
            { label: 'Belly / waist', value: 'belly', img: imgBelly },
            { label: 'Thighs / hips', value: 'thighs', img: imgThighs },
            { label: 'Arms', value: 'arms', img: imgArms },
            { label: 'All over', value: 'all', img: imgAllOver },
            { label: 'Not sure', value: 'unsure' },
         ],
      },
      {
         key: 'experience_level',
         percent: 12,
         title: 'Weight Loss',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How long have you been working on weight loss?',
         options: [
            { label: 'Just starting', value: 'new' },
            { label: 'Tried for a few months', value: 'months' },
            { label: 'On & off for years', value: 'years' },
            { label: 'I’ve always struggled', value: 'always' },
         ],
      },
      {
         key: 'motivation',
         percent: 18,
         title: 'Weight Loss',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'What motivates you most to lose weight?',
         options: [
            {
               label: 'Improve health (heart, blood pressure, diabetes prevention)',
               value: 'health',
            },
            { label: 'Boost confidence & appearance', value: 'appearance' },
            { label: 'Increase energy & stamina', value: 'energy' },
            { label: 'Fit better in clothes', value: 'clothes' },
            { label: 'Improve digestion & metabolism', value: 'digestion' },
         ],
      },
      {
         key: 'lifestyle',
         percent: 24,
         title: 'Weight Loss',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'What’s your current lifestyle like?',
         options: [
            { label: 'Sedentary (sit most of the day)', value: 'sedentary' },
            {
               label: 'Lightly active (occasional walks / light exercise)',
               value: 'light',
            },
            { label: 'Active (workouts 3-5x a week)', value: 'active' },
            {
               label: 'Very active (daily training, physical job, or sports)',
               value: 'very_active',
            },
         ],
      },
      {
         key: 'challenge',
         percent: 30,
         title: 'Weight Loss',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'What’s your biggest challenge with weight loss?',
         options: [
            { label: 'Cravings & overeating', value: 'cravings' },
            { label: 'Low energy / lack of motivation', value: 'low_energy' },
            { label: 'Slow metabolism', value: 'metabolism' },
            { label: 'Stress & emotional eating', value: 'stress' },
            { label: 'Inconsistent exercise', value: 'exercise' },
            { label: 'Poor digestion', value: 'digestion' },
         ],
      },
      {
         key: 'eating',
         percent: 36,
         title: 'Weight Loss',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How would you describe your eating habits?',
         options: [
            {
               label: 'Balanced meals, just large portions',
               value: 'large_portions',
            },
            { label: 'Skip meals, then overeat', value: 'skip_overeat' },
            { label: 'Frequent snacking', value: 'snacking' },
            { label: 'High-sugar / processed foods', value: 'processed' },
            { label: 'Healthy most of the time', value: 'healthy' },
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
               'With the right support, you can boost energy, manage cravings, and achieve steady results.',
            ],
         },
      },
      {
         key: 'digestion',
         percent: 48,
         title: 'Weight Loss',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How often do you experience digestive issues?',
         options: [
            { label: 'Rarely', value: 'rare' },
            { label: 'Sometimes', value: 'some' },
            { label: 'Often (bloating, irregular digestion)', value: 'often' },
            { label: 'Daily', value: 'daily' },
         ],
      },
      {
         key: 'sleep',
         percent: 54,
         title: 'Weight Loss',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How’s your sleep quality?',
         options: [
            { label: 'Great (7-8 hrs, restful)', value: 'great' },
            { label: 'Okay (5-6 hrs, light sleep)', value: 'ok' },
            { label: 'Poor (less than 5 hrs, restless)', value: 'poor' },
            { label: 'Varies a lot', value: 'varies' },
         ],
      },
      {
         key: 'stress',
         percent: 60,
         title: 'Weight Loss',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How often do you feel stressed or emotionally drained?',
         options: [
            { label: 'Rarely', value: 'rare' },
            { label: 'Sometimes', value: 'some' },
            { label: 'Often', value: 'often' },
            { label: 'Constantly', value: 'constant' },
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
         key: 'support_preference',
         percent: 72,
         title: 'Weight Loss',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'Which type of support would you prefer?',
         options: [
            { label: 'Daily liquid tonic (easy routine)', value: 'tonic' },
            { label: 'Herbal drinks for cravings & energy', value: 'drinks' },
            { label: 'Detox + cleanse pack', value: 'detox' },
            { label: 'A combination plan', value: 'combo' },
         ],
      },
      {
         key: 'combination_preference',
         percent: 80,
         title: 'Weight Loss',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'Are you open to a combination approach?',
         options: [
            { label: 'Yes, I want the best results', value: 'yes' },
            { label: 'No, I’d like to start simple', value: 'no' },
         ],
      },
      {
         key: 'secondary_goal',
         percent: 91,
         title: 'Weight Loss',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'Would you like to improve any secondary areas?',
         options: [
            { label: 'Energy & stamina', value: 'energy' },
            { label: 'Stress & calm', value: 'calm' },
            { label: 'Digestion & gut health', value: 'digestion' },
            { label: 'Focus & clarity', value: 'focus' },
            { label: 'Libido & balance', value: 'libido' },
            { label: 'None', value: 'none' },
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
         key: 'stress_level',
         percent: 0,
         title: 'Stress & Calm',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'Which best describes your current stress levels?',
         options: [
            { label: 'Constantly anxious or tense', value: 'high' },
            { label: 'Frequently stressed but manageable', value: 'medium' },
            { label: 'Occasional stress', value: 'low' },
            { label: 'Calm most of the time', value: 'calm' },
         ],
      },
      {
         key: 'stress_cause',
         percent: 10,
         title: 'Stress & Calm',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'What’s the biggest source of stress for you?',
         options: [
            { label: 'Work or studies', value: 'work' },
            { label: 'Family or relationships', value: 'family' },
            { label: 'Health concerns', value: 'health' },
            { label: 'Finances', value: 'financial' },
            { label: 'Other', value: 'other' },
         ],
      },
      {
         key: 'stress_symptom',
         percent: 20,
         title: 'Stress & Calm',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How does stress usually show up for you?',
         options: [
            { label: 'Trouble sleeping', value: 'sleep' },
            { label: 'Headaches or tension', value: 'headache' },
            { label: 'Emotional eating', value: 'eating' },
            { label: 'Low mood or irritability', value: 'mood' },
            { label: 'Loss of focus', value: 'focus' },
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
         key: 'sleep_quality',
         percent: 40,
         title: 'Stress & Calm',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How well do you usually sleep?',
         options: [
            { label: 'Great, 7-8 hours', value: 'good' },
            { label: 'Okay, light sleep', value: 'light' },
            { label: 'Poor, restless', value: 'poor' },
            { label: 'Hardly sleep', value: 'insomnia' },
         ],
      },
      {
         key: 'relax_frequency',
         percent: 50,
         title: 'Stress & Calm',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How often do you take time to unwind or relax?',
         options: [
            { label: 'Every day', value: 'often' },
            { label: 'A few times a week', value: 'sometimes' },
            { label: 'Rarely', value: 'rarely' },
            { label: 'Never', value: 'never' },
         ],
      },
      {
         key: 'stress_coping',
         percent: 60,
         title: 'Stress & Calm',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'When you feel stressed, what helps you the most?',
         options: [
            { label: 'Exercise or movement', value: 'movement' },
            { label: 'Talking to someone', value: 'social' },
            { label: 'Food or comfort snacks', value: 'eating' },
            { label: 'Rest / sleep', value: 'rest' },
            { label: 'Meditation or breathing', value: 'meditation' },
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
         key: 'support_type',
         percent: 80,
         title: 'Stress & Calm',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'What type of support do you prefer?',
         options: [
            { label: 'Liquid tonic I can take daily', value: 'daily' },
            { label: 'Herbal drink for evening relaxation', value: 'evening' },
            { label: 'Combination of both', value: 'combo' },
         ],
      },
      {
         key: 'secondary_goal',
         percent: 90,
         title: 'Stress & Calm',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'Would you like to improve other areas as well?',
         options: [
            { label: 'Sleep quality', value: 'sleep' },
            { label: 'Focus & energy', value: 'focus_energy' },
            { label: 'Digestion & mood', value: 'digestion' },
            { label: 'None', value: 'none' },
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
         key: 'focus_frequency',
         percent: 0,
         title: 'Focus & Clarity',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How often do you feel distracted or unfocused?',
         options: [
            { label: 'Constantly', value: 'Constantly' },
            { label: 'Frequently', value: 'Frequently' },
            { label: 'Occasionally', value: 'Occasionally' },
            { label: 'Rarely', value: 'Rarely' },
         ],
      },
      {
         key: 'focus_time',
         percent: 12,
         title: 'Focus & Clarity',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'What time of day do you struggle most to focus?',
         options: [
            { label: 'Morning', value: 'Morning' },
            { label: 'Afternoon crash', value: 'Afternoon crash' },
            { label: 'Evenings', value: 'Evenings' },
            { label: 'All day', value: 'All day' },
         ],
      },
      {
         key: 'energy_level',
         percent: 25,
         title: 'Focus & Clarity',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'What’s your current energy like throughout the day?',
         options: [
            { label: 'Consistently tired', value: 'Consistently tired' },
            { label: 'Highs and lows', value: 'Highs and lows' },
            { label: 'Stable', value: 'Stable' },
            { label: 'Energetic all day', value: 'Energetic all day' },
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
         key: 'caffeine_intake',
         percent: 62,
         title: 'Focus & Clarity',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'Do you consume caffeine regularly?',
         options: [
            {
               label: 'Yes, multiple times daily',
               value: 'Yes, multiple times daily',
            },
            { label: 'Once a day', value: 'Once a day' },
            { label: 'Rarely', value: 'Rarely' },
            { label: 'Never', value: 'Never' },
         ],
      },
      {
         key: 'fatigue_management',
         percent: 70,
         title: 'Focus & Clarity',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How do you manage mental fatigue?',
         options: [
            {
               label: 'Coffee / energy drinks',
               value: 'Coffee / energy drinks',
            },
            { label: 'Power naps', value: 'Power naps' },
            { label: 'Exercise', value: 'Exercise' },
            { label: 'Supplements', value: 'Supplements' },
            { label: 'I don’t', value: "I don't" },
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
         key: 'primary_goal',
         percent: 90,
         title: 'Focus & Clarity',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'What are you looking to improve most?',
         options: [
            { label: 'Productivity at work', value: 'Productivity at work' },
            { label: 'Mental clarity', value: 'Mental clarity' },
            { label: 'Motivation & energy', value: 'Motivation & energy' },
            {
               label: 'Memory & concentration',
               value: 'Memory & concentration',
            },
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
         key: 'colds',
         percent: 0,
         title: 'Immunity Support',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How often do you catch colds or feel run down?',
         options: [
            { label: 'Often (every month or two)', value: 'often' },
            { label: 'Occasionally', value: 'occasionally' },
            { label: 'Rarely', value: 'rarely' },
            { label: 'Hardly ever', value: 'hardly_ever' },
         ],
      },
      {
         key: 'energy',
         percent: 16,
         title: 'Immunity Support',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How would you describe your daily energy levels?',
         options: [
            { label: 'Always tired', value: 'always_tired' },
            { label: 'Up and down', value: 'up_down' },
            { label: 'Usually good', value: 'good' },
            { label: 'Always high', value: 'high' },
         ],
      },
      {
         key: 'diet',
         percent: 24,
         title: 'Immunity Support',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How balanced is your diet?',
         options: [
            { label: 'Lots of fruits/veggies', value: 'fruits_veggies' },
            { label: 'Moderate, could improve', value: 'moderate' },
            { label: 'Unbalanced, eat on the go', value: 'unbalanced' },
            { label: 'Not sure', value: 'unsure' },
         ],
      },
      {
         key: 'immunity_info_1',
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
         key: 'sleep',
         percent: 43,
         title: 'Immunity Support',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How well do you sleep at night?',
         options: [
            { label: 'Great', value: 'great' },
            { label: 'Fair', value: 'fair' },
            { label: 'Poor', value: 'poor' },
            { label: 'Varies', value: 'varies' },
         ],
      },
      {
         key: 'active',
         percent: 55,
         title: 'Immunity Support',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How active are you during the week?',
         options: [
            { label: 'Very active', value: 'very_active' },
            { label: 'Somewhat active', value: 'somewhat_active' },
            { label: 'Not very active', value: 'not_very_active' },
            { label: 'Rarely active', value: 'rarely' },
         ],
      },
      {
         key: 'stress',
         percent: 65,
         title: 'Immunity Support',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'Do you experience frequent stress or burnout?',
         options: [
            { label: 'Yes, a lot', value: 'high' },
            { label: 'Sometimes', value: 'sometimes' },
            { label: 'Rarely', value: 'rarely' },
            { label: 'Not at all', value: 'none' },
         ],
      },
      {
         key: 'immunity_info_2',
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
         key: 'support_type',
         percent: 85,
         title: 'Immunity Support',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'What kind of support are you looking for?',
         options: [
            { label: 'Preventive daily tonic', value: 'preventive' },
            { label: 'Fast immune booster', value: 'fast_boost' },
            { label: 'Recovery and energy support', value: 'recovery_energy' },
         ],
      },
      {
         key: 'contact_info',
         percent: 100,
         title: 'Please provide your information',
         form: true,
      },
   ],
   'libido-balance': [
      {
         key: 'current_concern',
         percent: 0,
         title: 'Libido & Balance',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'Which best describes your current concern?',
         options: [
            { label: 'Low desire / libido', value: 'Low desire / libido' },
            { label: 'Low stamina or energy', value: 'Low stamina or energy' },
            { label: 'Hormonal imbalance', value: 'Hormonal imbalance' },
            {
               label: 'Mood & confidence issues',
               value: 'Mood & confidence issues',
            },
         ],
      },
      {
         key: 'changes_duration',
         percent: 13,
         title: 'Libido & Balance',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How long have you noticed these changes?',
         options: [
            {
               label: 'Recently (past few months)',
               value: 'Recently (past few months)',
            },
            { label: '6-12 months', value: '6-12 months' },
            { label: 'Over a year', value: 'Over a year' },
            { label: 'Unsure', value: 'Unsure' },
         ],
      },
      {
         key: 'fatigue_frequency',
         percent: 27,
         title: 'Libido & Balance',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How often do you feel physically tired or drained?',
         options: [
            { label: 'Every day', value: 'Every day' },
            { label: 'Several times a week', value: 'Several times a week' },
            { label: 'Occasionally', value: 'Occasionally' },
            { label: 'Rarely', value: 'Rarely' },
         ],
      },
      {
         key: 'gender',
         percent: 46,
         title: 'Libido & Balance',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'What is your biological sex?',
         options: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
         ],
      },
      {
         percent: 54,
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
         key: 'exercise_frequency',
         percent: 63,
         title: 'Libido & Balance',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How often do you exercise?',
         options: [
            { label: 'Regularly', value: 'Regularly' },
            { label: 'Occasionally', value: 'Occasionally' },
            { label: 'Rarely', value: 'Rarely' },
            { label: 'Never', value: 'Never' },
         ],
      },
      {
         key: 'stress_frequency',
         percent: 75,
         title: 'Libido & Balance',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'Do you experience stress or anxiety often?',
         options: [
            { label: 'Yes', value: 'Yes' },
            { label: 'Sometimes', value: 'Sometimes' },
            { label: 'Rarely', value: 'Rarely' },
            { label: 'No', value: 'No' },
         ],
      },
      {
         key: 'primary_goal',
         percent: 88,
         title: 'Libido & Balance',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'What’s your goal with this plan?',
         options: [
            { label: 'Boost libido', value: 'Boost libido' },
            { label: 'Improve energy & mood', value: 'Improve energy & mood' },
            {
               label: 'Support hormonal balance',
               value: 'Support hormonal balance',
            },
            { label: 'All of the above', value: 'All of the above' },
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
         key: 'bloating_frequency',
         percent: 0,
         title: 'Digestion & Gut Health',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How often do you experience bloating or discomfort?',
         options: [
            { label: 'Daily', value: 'Daily' },
            { label: 'A few times a week', value: 'A few times a week' },
            { label: 'Occasionally', value: 'Occasionally' },
            { label: 'Rarely', value: 'Rarely' },
         ],
      },
      {
         key: 'primary_symptom',
         percent: 15,
         title: 'Digestion & Gut Health',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'Which symptom affects you most?',
         options: [
            { label: 'Gas or bloating', value: 'Gas or bloating' },
            { label: 'Irregular digestion', value: 'Irregular digestion' },
            { label: 'Acid reflux', value: 'Acid reflux' },
            { label: 'All of the above', value: 'All of the above' },
         ],
      },
      {
         key: 'cleanse_type',
         percent: 25,
         title: 'Digestion & Gut Health',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question:
            'Are you looking for a quick daily aid or a full body reset/cleanse?',
         options: [
            {
               label: 'Full Body Reset (Deep cleanse)',
               value: 'Full Body Reset (Deep cleanse)',
            },
            {
               label: 'Quick Daily Aid (Maintenance)',
               value: 'Quick Daily Aid (Maintenance)',
            },
         ],
      },
      {
         key: 'appetite',
         percent: 33,
         title: 'Digestion & Gut Health',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How’s your appetite usually?',
         options: [
            { label: 'Low appetite', value: 'Low appetite' },
            { label: 'Normal', value: 'Normal' },
            { label: 'Too high', value: 'Too high' },
            { label: 'Varies a lot', value: 'Varies a lot' },
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
         key: 'meals_per_day',
         percent: 60,
         title: 'Digestion & Gut Health',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How many meals do you eat per day?',
         options: [
            { label: '1-2', value: '1-2' },
            { label: '3', value: '3' },
            { label: '4 or more', value: '4 or more' },
            { label: 'I skip meals', value: 'I skip meals' },
         ],
      },
      {
         key: 'diet_type',
         percent: 75,
         title: 'Digestion & Gut Health',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'What’s your diet type?',
         options: [
            { label: 'Mixed (regular diet)', value: 'Mixed (regular diet)' },
            { label: 'Plant-based', value: 'Plant-based' },
            { label: 'High protein', value: 'High protein' },
            {
               label: 'Processed / convenience foods',
               value: 'Processed / convenience foods',
            },
         ],
      },
      {
         key: 'bowel_movements',
         percent: 82,
         title: 'Digestion & Gut Health',
         subtitle:
            "Answer a few quick questions and we'll recommend a plan tailored for you.",
         question: 'How would you describe your bowel movements?',
         options: [
            { label: 'Regular and normal', value: 'Regular and normal' },
            {
               label: 'Occasional constipation',
               value: 'Occasional constipation',
            },
            { label: 'Loose or irregular', value: 'Loose or irregular' },
            { label: 'Always uncomfortable', value: 'Always uncomfortable' },
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

   const [answers, setAnswers] = useState(() => {
      const savedAnswers = localStorage.getItem(`quizAnswers_${topic}`);
      try {
         return savedAnswers ? JSON.parse(savedAnswers) : {};
      } catch (e) {
         return e;
      }
   });

   const [isLoading, setIsLoading] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      const savedAnswers = localStorage.getItem(`quizAnswers_${topic}`);
      if (savedAnswers) {
         try {
            setAnswers((prev) => ({ ...prev, ...JSON.parse(savedAnswers) }));
         } catch (e) {
            console.error(e);
         }
      } else {
         setAnswers({});
      }

      const savedStep = localStorage.getItem(`quizStep_${topic}`);
      if (savedStep) {
         const pStep = parseInt(savedStep, 10);
         if (!isNaN(pStep)) setStep(pStep);
      } else {
         setStep(0);
      }
   }, [topic]);

   useEffect(() => {
      localStorage.setItem(`quizStep_${topic}`, step);
   }, [step, topic]);

   useEffect(() => {
      try {
         localStorage.setItem(`quizAnswers_${topic}`, JSON.stringify(answers));
      } catch (e) {
         console.error('Failed to save quiz answers:', e);
      }
   }, [answers, topic]);

   useEffect(() => {
      const currentQuestion = quizSteps[step]?.question;
      if (currentQuestion && answers[currentQuestion]) {
         const savedLabel = answers[currentQuestion];
         const index = quizSteps[step].options?.findIndex(
            (opt) => opt.label === savedLabel
         );
         if (index > -1) {
            setSelected(index);
         } else {
            setSelected(null);
         }
      } else {
         setSelected(null);
      }
   }, [step, quizSteps, answers]);

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
                  Please try refreshing the page.
               </p>
            </div>
         </div>
      );
   }

   const handleOption = (idx) => {
      setSelected(idx);
      const questionText = current.question;
      const answerLabel = current.options[idx].label;

      if (questionText) {
         setAnswers((prevAnswers) => {
            const newAnswers = {
               ...prevAnswers,
               [questionText]: answerLabel,
            };
            return newAnswers;
         });
      }
   };

   const handleNext = () => {
      if (step < quizSteps.length - 1) {
         setStep(step + 1);
      }
   };

   const handleBack = () => {
      if (step > 0) {
         setStep(step - 1);
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

      const finalAnswers = { ...answers, ...form };
      localStorage.setItem(
         `quizAnswers_${topic}`,
         JSON.stringify(finalAnswers)
      );
      localStorage.setItem('lastCompletedQuizTopic', topic);

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
                  onSubmit={handleSubmit}
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
                        required
                     />
                  </div>
                  <div className='quiz-form-group'>
                     <label>Email</label>
                     <input
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handleFormChange}
                        required
                     />
                  </div>
                  <div className='quiz-form-group'>
                     <label>Phone</label>
                     <input
                        type='text'
                        name='phone'
                        value={form.phone}
                        onChange={handleFormChange}
                        required
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
                        type='submit'
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
