import React from 'react'
import { useState, useEffect} from 'react';
const financialTips = [
    
  {
    tip: "Track your daily expenses to understand where your money goes.",
    quote: "Beware of little expenses; a small leak can sink a great ship."
  },
  {
    tip: "Set aside a portion of your income for savings every payday.",
    quote: "Do not save what is left after spending, but spend what is left after saving."
  },
  {
    tip: "Build an emergency fund for unexpected expenses.",
    quote: "Small savings today can create big opportunities tomorrow."
  },
  {
    tip: "Avoid impulse purchases and think before you spend.",
    quote: "Financial freedom starts with financial discipline."
  },
  {
    tip: "Review your subscriptions and cancel the ones you no longer use.",
    quote: "A penny saved is a penny earned."
  },
  {
    tip: "Set realistic short-term and long-term financial goals.",
    quote: "Wealth is built one smart decision at a time."
  },
  {
    tip: "Compare prices before making big purchases.",
    quote: "The secret to wealth is simple: spend less than you earn."
  },
  {
    tip: "Review your budget regularly and adjust it when needed.",
    quote: "A budget is telling your money where to go instead of wondering where it went."
  },
  {
    tip: "Pay your bills on time to avoid unnecessary late fees.",
    quote: "Consistency is more powerful than occasional big savings."
  },
  {
    tip: "Save for your goals before spending on non-essential items.",
    quote: "Every dollar saved is a step towards financial freedom."
  }
];

export const FinancialTips = () => {
    const [showQuote,setShowQuote] = useState(financialTips[0]);

    useEffect(()=> {
        
        setInterval(()=>{
            setShowQuote(financialTips[Math.floor(Math.random() * financialTips.length)]
        );
        }, 5000)
    }, []);

    const {tip, quote} = showQuote;
  return (
    <div className= 'd-flex flex-column justify-content-center' style={{height: '100%'}}>
      <h3>{tip}</h3>
      <div className='fw-bolder'>" {quote} "</div>
    </div>
  )
}

export default FinancialTips;
