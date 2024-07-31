'use client';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './StepWizard.css';
import Image from 'next/image';

const steps = [
  {
    header: 'Welcome to Moogli! 👋🏻',
    description:
      "Let's take a quick tour to help you get started. Click 'Start' to continue the tour or 'Skip' if you prefer to explore on your own.",
    position: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
    highlight: null,
    arrow: null,
    step_count: null,
    image_url: '/start.svg',
  },
  {
    header: 'Your One-Stop Shop',
    description:
      'The overview dashboard provides a quick snapshot of your current emissions status. See key metrics like total emissions, recent progress, and achievements at a glance.',
    position: { top: '37%', left: '35%', transform: 'translate(-50%, -50%)' },
    highlight: { top: '18%', left: '8%', width: '280px', height: '60px' },
    arrow: { left: '-10%', top: '30%' },
    step_count: true,
    image_url: '/step_1.svg',
  },
  {
    header: 'Lay the Foundation',
    description:
      'This section serves as your starting point. Define your company structure by creating your organisational chart and outlining operational boundaries.',
    position: { top: '45%', left: '35%', transform: 'translate(-50%, -50%)' },
    highlight: { top: '27%', left: '8%', width: '280px', height: '60px' },
    arrow: { left: '-10%', top: '32%' },
    step_count: true,
    image_url: '/step_2.svg',
  },
  {
    header: 'Powering Insight',
    description:
      'Enter data related to both Scope 1 and Scope 2 emissions to calculate your overall emissions inventory. The platform guides you through the data collection process.',
    position: { top: '45%', left: '35%', transform: 'translate(-50%, -50%)' },
    highlight: { top: '36%', left: '8%', width: '280px', height: '125px' },
    arrow: { left: '-10%', top: '55%' },
    step_count: true,
    image_url: '/step_3.svg',
  },
  {
    header: 'Uncover Opportunities',
    description:
      'Analyse your emissions data to identify the biggest contributors. Gain valuable insights into your emissions and prioritise areas for improvement.',
    position: { top: '55%', left: '35%', transform: 'translate(-50%, -50%)' },
    highlight: { top: '55%', left: '8%', width: '280px', height: '90px' },
    arrow: { left: '-10%', top: '65%' },
    step_count: true,
    image_url: '/step_4.svg',
  },
  {
    header: 'Spread the Word',
    description:
      'Share your sustainability achievements with your customers! Communicate your progress directly through the app or leverage our network of MUPIs for wider reach.',
    position: { top: '55%', left: '35%', transform: 'translate(-50%, -50%)' },
    highlight: { top: '69%', left: '8%', width: '280px', height: '125px' },
    arrow: { left: '-10%', top: '95%' },
    step_count: true,
    image_url: '/step_5.svg',
  },
  {
    header: 'Congratulations!🎉',
    description:
      "You're now equipped to navigate the platform and begin your emissions management journey. Remember, we're here to help you every step of the way. Explore the platform further to discover additional features and resources.",
    position: { top: '44%', left: '30%', transform: 'translate(-50%, -50%)' },
    highlight: { top: '0%', left: '28.5%', width: '310px', height: '100px' },
    arrow: { left: '50%', top: '-30%', transform: 'rotate(90deg)' },
    step_count: null,
    image_url: null,
  },
  {
    header: 'Before you continue ...',
    description:
      'The reporting year is a 12-month period for measuring and reporting GHG emissions. For example, if reporting for 2023, use data from that year.',
    position: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
    highlight: null,
    arrow: null,
    step_count: null,
    image_url: '/start.svg',
  },
];

const TRANSITION_TIMEOUT = 300;

const generateOverlayStyle = (highlight) => {
  if (!highlight) return {};
  return {
    '--highlight-top': highlight.top,
    '--highlight-left': highlight.left,
    '--highlight-width': highlight.width,
    '--highlight-height': highlight.height,
  };
};

const StepWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [show, setShow] = useState(true);
  const [overlayStyle, setOverlayStyle] = useState({});
  const nodeRef = useRef(null);

  const changeStep = (newStep) => {
    setShow(false);
    setTimeout(() => {
      setCurrentStep(newStep);
      setShow(true);
    }, TRANSITION_TIMEOUT);
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      changeStep(currentStep + 1);
    } else {
      skipTour();
    }
  };

  const skipTour = () => {
    changeStep(steps.length);
  };

  useEffect(() => {
    setOverlayStyle(generateOverlayStyle(steps[currentStep]?.highlight));
  }, [currentStep]);

  return (
    <div
      className={`fixed step-overlay inset-0 isolate flex items-center justify-center z-10 ${
        currentStep < steps.length ? 'block' : 'hidden'
      }`}
      style={overlayStyle}
    >
      <CSSTransition
        in={show}
        timeout={TRANSITION_TIMEOUT}
        classNames='fade'
        nodeRef={nodeRef}
      >
        <div
          style={steps[currentStep]?.position}
          className='bg-white p-8 absolute rounded-lg shadow-lg max-w-md w-full transition-transform transform duration-300'
          ref={nodeRef}
        >
          {currentStep < steps.length && (
            <div className='relative'>
              {steps[currentStep].arrow && (
                <div
                  style={steps[currentStep].arrow}
                  className='absolute transform -translate-x-1/2 -translate-y-full'
                >
                  <Image
                    src='/left_arrow.svg'
                    alt='left arrow'
                    height={20}
                    width={20}
                  />
                </div>
              )}
              <div>
                {steps[currentStep].image_url && (
                  <div>
                    <Image
                      src={steps[currentStep].image_url}
                      alt='steps-image'
                      height={50}
                      width={500}
                    />
                  </div>
                )}
                <h2 className='text-xl font-semibold my-4'>
                  {steps[currentStep].header}
                </h2>
                <p className='text-gray-700 mb-6'>
                  {steps[currentStep].description}
                </p>
                <div className='flex space-x-2'>
                  {steps[currentStep].step_count &&
                    steps
                      .filter((step) => step.step_count)
                      .map((step, index) => (
                        <span
                          key={index}
                          className={`h-2 w-2 rounded-full ${
                            currentStep - 1 === index
                              ? 'bg-gray-700'
                              : 'bg-gray-300'
                          }`}
                        ></span>
                      ))}
                </div>
                <div className='flex mt-4 justify-between space-x-4'>
                  {currentStep !== steps.length - 1 && (
                    <button
                      className='text-gray-700 px-4 py-2 rounded-2xl hover:text-white hover:bg-gray-500'
                      onClick={skipTour}
                      aria-label='Skip Tour'
                    >
                      Skip
                    </button>
                  )}
                  <button
                    className={`
                      ${
                        currentStep === 0
                          ? 'w-56 bg-indigo-500 text-white'
                          : currentStep === steps.length - 1
                          ? 'w-full bg-indigo-500 text-white'
                          : 'bg-indigo-100 hover:text-white'
                      }
                      rounded-2xl text-indigo-600 px-4 py-2 hover:bg-indigo-600`}
                    onClick={nextStep}
                    aria-label={
                      currentStep === 0 || currentStep == steps.length - 1
                        ? 'Start'
                        : 'Next'
                    }
                  >
                    {currentStep === 0 || currentStep == steps.length - 1
                      ? 'Start'
                      : 'Next'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </CSSTransition>
    </div>
  );
};

export default StepWizard;
