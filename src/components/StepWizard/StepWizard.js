'use client';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './StepWizard.css';
import Image from 'next/image';
import { steps } from '@/data/data.json';

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
      className={`fixed step-overlay inset-0 isolate hidden  items-center justify-center z-20 ${
        currentStep < steps.length ? 'md:flex' : 'hidden'
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
