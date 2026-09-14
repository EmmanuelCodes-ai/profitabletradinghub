import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Lock, 
  CreditCard, 
  Check, 
  Coins, 
  ChevronLeft,
  FileCheck,
  UserCheck,
  Target,
  Clock,
  TrendingUp,
  AlertCircle,
  Building
} from 'lucide-react';

interface BecomeClientModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ApplicationStep = 'questions' | 'review' | 'checkout' | 'proof' | 'confirmed';

export const BecomeClientModal: React.FC<BecomeClientModalProps> = ({ isOpen, onClose }) => {
  // Navigation step state
  const [step, setStep] = useState<ApplicationStep>('questions');
  
  // Question step state (questions come ONE AFTER ANOTHER: 1 to 5)
  const [questionIndex, setQuestionIndex] = useState<number>(1);
  const TOTAL_QUESTIONS = 5;
  
  // Questionnaire answers
  const [tradingSituation, setTradingSituation] = useState('');
  const [profitabilityReason, setProfitabilityReason] = useState('');
  const [primaryOutcome, setPrimaryOutcome] = useState('');
  const [processCommitment, setProcessCommitment] = useState('');
  const [investmentCommitment, setInvestmentCommitment] = useState('');
  const [traderName, setTraderName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  // Form error notification
  const [inputError, setInputError] = useState('');

  // Checkout Payment Method
  const [paymentMethod, setPaymentMethod] = useState<'bank_naira' | 'bank_usd' | 'crypto'>('bank_naira');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [proofFileName, setProofFileName] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  // Reset states when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('questions');
      setQuestionIndex(1);
      setInputError('');
      setIsProcessing(false);
      setIsEvaluating(false);
      setProofFileName('');
      setIsUploading(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Validation before advancing to next question
  const handleNextQuestion = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setInputError('');

    if (questionIndex === 1) {
      if (!tradingSituation) {
        setInputError('Please select your current trading experience level to continue.');
        return;
      }
    } else if (questionIndex === 2) {
      if (!profitabilityReason) {
        setInputError('Please select your biggest trading challenge to continue.');
        return;
      }
    } else if (questionIndex === 3) {
      if (!primaryOutcome) {
        setInputError('Please select your primary goal for joining to continue.');
        return;
      }
    } else if (questionIndex === 4) {
      if (!processCommitment) {
        setInputError('Please select your commitment level to continue.');
        return;
      }
    } else if (questionIndex === 5) {
      if (!traderName.trim()) {
        setInputError('Please enter your full name or trader alias.');
        return;
      }
      if (!email.trim() || !email.includes('@')) {
        setInputError('Please enter a valid email address.');
        return;
      }
    }

    if (questionIndex < TOTAL_QUESTIONS) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      // Final question reached: evaluate and advance to desk review
      setIsEvaluating(true);
      setTimeout(() => {
        setIsEvaluating(false);
        setStep('review');
      }, 900);
    }
  };

  const handlePrevQuestion = () => {
    setInputError('');
    if (questionIndex > 1) {
      setQuestionIndex((prev) => prev - 1);
    }
  };

  // Handle Checkout Submission
  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Dispatches the automated email with the "Send Proof of Payment" button
      await fetch('/api/send-payment-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          traderName,
          paymentMethod,
          phoneNumber: `${countryCode} ${phoneNumber}`,
          amount: '$1,500',
        }),
      });
    } catch (err) {
      console.warn('Could not dispatch confirmation email:', err);
    } finally {
      setIsProcessing(false);
      setStep('confirmed');
    }
  };

  const handleProofSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmed');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-zinc-950 text-white border border-zinc-800 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/90 max-h-[92vh] overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* TOP MODAL HEADER & MAIN STAGE PROGRESS */}
        <div className="sticky top-0 z-20 bg-zinc-950/95 backdrop-blur-md px-5 sm:px-8 pt-5 pb-4 border-b border-zinc-800/80">
          <div className="flex items-center justify-between gap-4">
            
            {/* Step Indicators */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 text-[10px] sm:text-xs">
              <div className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full font-bold transition-colors ${
                step === 'questions' ? 'bg-yellow-400 text-zinc-950 shadow-sm' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
              }`}>
                <span>1. Assessment</span>
              </div>
              <span className="hidden sm:inline text-zinc-600">→</span>
              <div className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full font-bold transition-colors ${
                step === 'review' ? 'bg-yellow-400 text-zinc-950 shadow-sm' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
              }`}>
                <span>2. Desk Approval</span>
              </div>
              <span className="hidden sm:inline text-zinc-600">→</span>
              <div className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full font-bold transition-colors ${
                step === 'checkout' || step === 'proof' || step === 'confirmed' ? 'bg-yellow-400 text-zinc-950 shadow-sm' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
              }`}>
                <span>3. Checkout</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center justify-center transition-colors cursor-pointer shrink-0"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Micro Question Progress Bar (visible during questions step) */}
          {step === 'questions' && (
            <div className="mt-4 pt-3 border-t border-zinc-800/60">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-yellow-400 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Question {questionIndex} of {TOTAL_QUESTIONS}</span>
                </span>
                <span className="text-zinc-400 font-medium text-[11px]">
                  {Math.round((questionIndex / TOTAL_QUESTIONS) * 100)}% Complete
                </span>
              </div>
              <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-400 transition-all duration-300 ease-out"
                  style={{ width: `${(questionIndex / TOTAL_QUESTIONS) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* MODAL BODY CONTENT */}
        <div className="p-5 sm:p-8">

          {/* ========================================================
              STEP 1: QUESTIONS ONE AFTER ANOTHER (1 TO 5)
             ======================================================== */}
          {step === 'questions' && (
            <div className="space-y-6">
              
              {/* Question Banner */}
              <div className="p-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-zinc-400 block text-[11px]">(One-Time)</span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-xl font-black text-white">$1,500</span>
                    <span className="text-yellow-400 font-bold">Lifetime • 0 Monthly Fees</span>
                  </div>
                </div>
              </div>

              {inputError && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{inputError}</span>
                </div>
              )}

              {/* QUESTION 1: TRADING SITUATION */}
              {questionIndex === 1 && (
                <div className="space-y-5 animate-in fade-in slide-in-from-right-3 duration-200">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-400 text-[11px] font-bold uppercase tracking-wider">
                      <Target className="w-3.5 h-3.5" />
                      <span>Step 1: Current Reality</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-instrument tracking-tight text-white">
                      1. What best describes your current trading experience?
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      Select the scenario that matches your recent trading history so we can calibrate your onboarding.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5 text-xs">
                    {[
                      '🌱 I\'m a complete beginner',
                      '📈 I\'ve been trading for 1–3 years but I\'m not consistent',
                      '🔥 I\'ve been trading for 3+ years and I\'m looking to refine my approach'
                    ].map((opt, idx) => {
                      const isSelected = tradingSituation === opt;
                      return (
                        <div
                          key={idx}
                          onClick={() => {
                            setTradingSituation(opt);
                            setInputError('');
                          }}
                          className={`p-4 rounded-2xl border flex items-center gap-3.5 cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-yellow-400/10 border-yellow-400 shadow-md shadow-yellow-400/10'
                              : 'bg-zinc-900/70 border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? 'border-yellow-400 bg-yellow-400 text-zinc-950' : 'border-zinc-700 bg-zinc-950'
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <div className="text-sm font-bold text-white leading-relaxed">{opt}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Question Controls */}
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => handleNextQuestion()}
                      className="w-full py-4 rounded-full bg-yellow-400 text-zinc-950 font-black text-sm sm:text-base hover:bg-yellow-300 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-yellow-400/25 cursor-pointer min-h-[48px]"
                    >
                      <span>Continue to Question 2</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              )}


              {/* QUESTION 2: PROFITABILITY REASON (NEW) */}
              {questionIndex === 2 && (
                <div className="space-y-5 animate-in fade-in slide-in-from-right-3 duration-200">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-400 text-[11px] font-bold uppercase tracking-wider">
                      <Target className="w-3.5 h-3.5" />
                      <span>Step 2: Core Roadblock</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-instrument tracking-tight text-white">
                      2. What is your biggest challenge in trading right now?
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      This helps us understand where your current setup is breaking down.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5 text-xs">
                    {[
                      '🧠 Psychology & discipline',
                      '📊 I don\'t have a clear, profitable system',
                      '🎯 I have a strategy but struggle with consistent execution'
                    ].map((opt, idx) => {
                      const isSelected = profitabilityReason === opt;
                      return (
                        <div
                          key={idx}
                          onClick={() => {
                            setProfitabilityReason(opt);
                            setInputError('');
                          }}
                          className={`p-4 rounded-2xl border flex items-center gap-3.5 cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-yellow-400/10 border-yellow-400 shadow-md shadow-yellow-400/10'
                              : 'bg-zinc-900/70 border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? 'border-yellow-400 bg-yellow-400 text-zinc-950' : 'border-zinc-700 bg-zinc-950'
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <div className="text-sm font-bold text-white leading-relaxed">{opt}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Question Controls */}
                  <div className="pt-3 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handlePrevQuestion}
                      className="px-5 py-3.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 font-semibold text-xs hover:text-white hover:bg-zinc-800 transition-colors flex items-center gap-1.5 cursor-pointer min-h-[48px]"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNextQuestion()}
                      className="flex-1 py-3.5 rounded-full bg-yellow-400 text-zinc-950 font-black text-sm sm:text-base hover:bg-yellow-300 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-yellow-400/25 cursor-pointer min-h-[48px]"
                    >
                      <span>Continue to Question 3</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              )}

              {/* QUESTION 3: PRIMARY OUTCOME (NEW) */}
              {questionIndex === 3 && (
                <div className="space-y-5 animate-in fade-in slide-in-from-right-3 duration-200">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-400 text-[11px] font-bold uppercase tracking-wider">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Step 3: Core Objective</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-instrument tracking-tight text-white">
                      3. What is your primary goal for joining the mentorship?
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      Select your primary focus so we can tailor the mentorship structure to your priorities.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5 text-xs">
                    {[
                      'Learn how to trade properly from the foundation.',
                      'Become consistent and develop a structured trading system.',
                      'Refine my current approach and improve my execution.'
                    ].map((opt, idx) => {
                      const isSelected = primaryOutcome === opt;
                      return (
                        <div
                          key={idx}
                          onClick={() => {
                            setPrimaryOutcome(opt);
                            setInputError('');
                          }}
                          className={`p-4 rounded-2xl border flex items-center gap-3.5 cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-yellow-400/10 border-yellow-400 shadow-md shadow-yellow-400/10'
                              : 'bg-zinc-900/70 border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? 'border-yellow-400 bg-yellow-400 text-zinc-950' : 'border-zinc-700 bg-zinc-950'
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <div className="text-sm font-bold text-white leading-relaxed">{opt}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Question Controls */}
                  <div className="pt-3 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handlePrevQuestion}
                      className="px-5 py-3.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 font-semibold text-xs hover:text-white hover:bg-zinc-800 transition-colors flex items-center gap-1.5 cursor-pointer min-h-[48px]"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNextQuestion()}
                      className="flex-1 py-3.5 rounded-full bg-yellow-400 text-zinc-950 font-black text-sm sm:text-base hover:bg-yellow-300 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-yellow-400/25 cursor-pointer min-h-[48px]"
                    >
                      <span>Continue to Question 4</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              )}

              {/* QUESTION 4: PROCESS COMMITMENT (NEW) */}
              {questionIndex === 4 && (
                <div className="space-y-5 animate-in fade-in slide-in-from-right-3 duration-200">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-400 text-[11px] font-bold uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Step 4: Process Commitment</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-instrument tracking-tight text-white">
                      4. How ready are you to commit to your trading development?
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      Consistency requires discipline. Let us know where you stand on sticking to a strict system.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5 text-xs">
                    {[
                      'I\'m just exploring my options.',
                      'I\'m serious and ready to put in the work.',
                      'I\'m ready to invest in mentorship and start immediately.'
                    ].map((opt, idx) => {
                      const isSelected = processCommitment === opt;
                      return (
                        <div
                          key={idx}
                          onClick={() => {
                            setProcessCommitment(opt);
                            setInputError('');
                          }}
                          className={`p-4 rounded-2xl border flex items-center gap-3.5 cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-yellow-400/10 border-yellow-400 shadow-md shadow-yellow-400/10'
                              : 'bg-zinc-900/70 border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? 'border-yellow-400 bg-yellow-400 text-zinc-950' : 'border-zinc-700 bg-zinc-950'
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <div className="text-sm font-bold text-white leading-relaxed">{opt}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Question Controls */}
                  <div className="pt-3 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handlePrevQuestion}
                      className="px-5 py-3.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 font-semibold text-xs hover:text-white hover:bg-zinc-800 transition-colors flex items-center gap-1.5 cursor-pointer min-h-[48px]"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNextQuestion()}
                      className="flex-1 py-3.5 rounded-full bg-yellow-400 text-zinc-950 font-black text-sm sm:text-base hover:bg-yellow-300 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-yellow-400/25 cursor-pointer min-h-[48px]"
                    >
                      <span>Continue to Final Question</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              )}

              {/* QUESTION 5: TRADER PROFILE */}
              {questionIndex === 5 && (
                <div className="space-y-5 animate-in fade-in slide-in-from-right-3 duration-200">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-400 text-[11px] font-bold uppercase tracking-wider">
                      <UserCheck className="w-3.5 h-3.5" />
                      <span>Step 5: Trader Identification</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-instrument tracking-tight text-white">
                      Who is applying for desk placement?
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      Your onboarding credentials will be dispatched here.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-zinc-300 block mb-1">
                        Full Name / Trader Alias <span className="text-yellow-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        autoFocus
                        value={traderName}
                        onChange={(e) => {
                          setTraderName(e.target.value);
                          if (inputError) setInputError('');
                        }}
                        placeholder="e.g. Alex Morgan"
                        className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-zinc-300 block mb-1">
                        Direct Email Address <span className="text-yellow-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (inputError) setInputError('');
                        }}
                        placeholder="alex@trader.com"
                        className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition"
                      />
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="pt-3 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handlePrevQuestion}
                      className="px-5 py-3.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 font-semibold text-xs hover:text-white hover:bg-zinc-800 transition-colors flex items-center gap-1.5 cursor-pointer min-h-[48px]"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      disabled={isEvaluating}
                      onClick={() => handleNextQuestion()}
                      className="flex-1 py-4 rounded-full bg-yellow-400 text-zinc-950 font-black text-sm sm:text-base hover:bg-yellow-300 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-yellow-400/25 cursor-pointer min-h-[48px]"
                    >
                      {isEvaluating ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                          <span>Evaluating Profile Against Cohort Standards...</span>
                        </span>
                      ) : (
                        <>
                          <span>Submit Assessment & View Desk Approval</span>
                          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* ========================================================
              STEP 2: DESK APPROVAL & SEAT ALLOCATION
             ======================================================== */}
          {step === 'review' && (
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
              
              <div className="text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>
                
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
                  Assessment Status: Candidate Approved
                </span>

                <h2 className="text-2xl sm:text-3xl font-instrument tracking-tight text-white">
                  Desk Allocation Confirmed for {traderName || 'Trader'}
                </h2>

                <p className="text-xs sm:text-sm text-zinc-300 max-w-lg mx-auto leading-relaxed">
                  Go ahead to make your payment to secure your spot
                </p>
              </div>

              {/* Assessment Summary Card */}
              <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 text-xs">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <span className="text-zinc-400">Desk Reservation:</span>
                  <span className="text-yellow-400 font-bold">(Held for 15:00 min)</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <span className="text-zinc-400">Applicant:</span>
                  <span className="text-white font-semibold">{traderName} ({email})</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <span className="text-zinc-400">Core Objective:</span>
                  <span className="text-white font-semibold max-w-[200px] text-right truncate" title={primaryOutcome}>{primaryOutcome || 'N/A'}</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <span className="text-zinc-400">Process Commitment:</span>
                  <span className="text-white font-semibold">{processCommitment || 'N/A'}</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <span className="text-zinc-400">Tuition Commitment:</span>
                  <span className="text-white font-semibold">{investmentCommitment || 'N/A'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">personal Mentor Allocation:</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    Private Weekly Desk Audits Included
                  </span>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="p-4 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 flex items-start gap-3 text-xs text-zinc-300">
                <Sparkles className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-white block font-bold">Guaranteed Price Lock: $1,500</strong>
                  <span>Your approved status locks in the one-time $1,500 tuition. Zero recurring monthly fees, zero future upsells, and permanent access to all strategy updates.</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => setStep('checkout')}
                  className="w-full py-4 rounded-full bg-yellow-400 text-zinc-950 font-black text-sm sm:text-base hover:bg-yellow-300 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-yellow-400/25 cursor-pointer min-h-[48px]"
                >
                  <span>Proceed to Checkout — $1,500 Tuition Locked</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
                
                <button
                  onClick={() => {
                    setStep('questions');
                    setQuestionIndex(1);
                  }}
                  className="w-full py-2.5 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Modify Assessment Answers</span>
                </button>
              </div>

            </div>
          )}

          {/* ========================================================
              STEP 3: SECURE CHECKOUT ($1,500 SINGLE PROGRAM)
             ======================================================== */}
          {step === 'checkout' && (
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
              
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div>
                  <h2 className="text-xl sm:text-2xl font-instrument tracking-tight text-white">
                    Secure Enrollment Checkout
                  </h2>
                  <p className="text-xs text-zinc-400">
                    Finalize your seat for profitable trading program
                  </p>
                </div>
                <button
                  onClick={() => setStep('review')}
                  className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              </div>

              {/* Order Summary Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900 border border-yellow-400/40 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white text-sm block">Profitable Trading mentorship cohort</span>
                    <span className="text-zinc-400">Cohort • Strict Desk Allocation</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-white">$1,500.00</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs font-bold text-white">
                  <span>Total Due Today</span>
                  <span className="text-yellow-400 text-base font-black">$1,500.00 USD</span>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-300 block">
                  Select Payment Method:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank_naira')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-2 text-xs font-bold transition cursor-pointer ${
                      paymentMethod === 'bank_naira'
                        ? 'bg-yellow-400 text-zinc-950 border-yellow-400 shadow-md'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Building className="w-5 h-5" />
                    <span className="text-center">Bank Transfer (Naira)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank_usd')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-2 text-xs font-bold transition cursor-pointer ${
                      paymentMethod === 'bank_usd'
                        ? 'bg-yellow-400 text-zinc-950 border-yellow-400 shadow-md'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Building className="w-5 h-5" />
                    <span className="text-center">Bank Transfer (USD)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('crypto')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-2 text-xs font-bold transition cursor-pointer ${
                      paymentMethod === 'crypto'
                        ? 'bg-yellow-400 text-zinc-950 border-yellow-400 shadow-md'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Coins className="w-5 h-5" />
                    <span className="text-center">Crypto (USDT)</span>
                  </button>
                </div>
              </div>

              {/* Checkout Form */}
              <form onSubmit={handlePaymentSubmit} className="space-y-4">
                {paymentMethod === 'bank_naira' ? (
                  <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 text-xs">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Bank Name:</span>
                      <span className="text-white font-bold">Guaranty Trust Bank (GTB)</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Account Name:</span>
                      <span className="text-white font-bold">PTHub Trading</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Account Number:</span>
                      <span className="text-white font-bold text-sm tracking-wider">0123456789</span>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-zinc-400">Amount to Transfer:</span>
                      <span className="text-yellow-400 font-bold text-sm">₦958,400</span>
                    </div>
                    <p className="text-[11px] text-zinc-500 pt-2 text-center">
                      Please use your name as the transfer description. Click "Complete Enrollment" after sending.
                    </p>
                  </div>
                ) : paymentMethod === 'bank_usd' ? (
                  <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 text-xs">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Bank Name:</span>
                      <span className="text-white font-bold">JPMorgan Chase</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Account Name:</span>
                      <span className="text-white font-bold">PTHub Trading LLC</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Routing Number:</span>
                      <span className="text-white font-bold text-sm tracking-wider">021000021</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Account Number:</span>
                      <span className="text-white font-bold text-sm tracking-wider">9876543210</span>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-zinc-400">Amount to Transfer:</span>
                      <span className="text-yellow-400 font-bold text-sm">$1,500.00 USD</span>
                    </div>
                    <p className="text-[11px] text-zinc-500 pt-2 text-center">
                      Please use your name as the wire reference. Click "Complete Enrollment" after initiating wire.
                    </p>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 text-xs">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Network:</span>
                      <span className="text-yellow-400 font-bold">USDT (TRC20)</span>
                    </div>
                    <div className="flex items-center justify-between pt-1 pb-1">
                      <span className="text-zinc-400">Amount:</span>
                      <span className="text-white font-bold text-sm">1,500.00 USDT</span>
                    </div>
                    <div className="p-3 bg-zinc-950 rounded-xl font-mono text-[11px] text-zinc-300 break-all border border-zinc-800 text-center">
                      TXZYAbcDefGhIjKlMnOpQrStUvWxYz1234
                    </div>
                    <p className="text-[11px] text-zinc-500 pt-2 text-center">
                      Send exactly 1,500 USDT on the Tron (TRC20) network. Click "Complete Enrollment" after sending.
                    </p>
                  </div>
                )}

                {/* Security Badges */}
                <div className="flex items-center justify-center gap-4 text-[11px] text-zinc-500 pt-1">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-zinc-400" />
                    <span>256-Bit SSL Encrypted</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Authorized PTHub Merchant</span>
                  </span>
                </div>

                {/* Pay Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 rounded-full bg-yellow-400 text-zinc-950 font-black text-sm sm:text-base hover:bg-yellow-300 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-yellow-400/25 cursor-pointer min-h-[48px]"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                      <span>Processing...</span>
                    </span>
                  ) : (
                    <>
                      <span>I Have Made the Payment</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </>
                  )}
                </button>
              </form>

            </div>
          )}

          {/* ========================================================
              STEP 4: ENROLLMENT CONFIRMED / SUCCESS
             ======================================================== */}
          {step === 'confirmed' && (
            <div className="py-8 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-yellow-400 text-zinc-950 flex items-center justify-center mx-auto shadow-2xl shadow-yellow-400/40">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
                  Transfer Initiated • Action Required
                </span>
                <h3 className="text-2xl sm:text-3xl font-instrument font-bold text-white">
                  Confirmed, {traderName || 'Trader'}!
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Your seat for the <strong className="text-yellow-400">Profitable Trading mentorship cohort</strong> has been reserved. You must now submit your proof of payment to complete your enrollment.
                </p>
              </div>

              {/* Onboarding Checklist Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900 border border-zinc-800 max-w-md mx-auto text-left space-y-3 text-xs">
                <span className="font-bold text-white block border-b border-zinc-800 pb-2">
                  Next Steps to Follow:
                </span>
                <div className="space-y-2 text-zinc-300">
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center shrink-0 text-[11px] font-bold mt-0.5">1</div>
                    <span>An email has been sent to <strong>{email}</strong>. Please check your inbox and click the <strong>"Send Proof"</strong> button to submit your transfer receipt.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center shrink-0 text-[11px] font-bold mt-0.5">2</div>
                    <span>Once our team verifies your receipt, you will receive your <strong>Private Telegram Desk & Discord</strong> invite links.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center shrink-0 text-[11px] font-bold mt-0.5">3</div>
                    <span>You'll get access to the video vault & be able to book your <strong>Week 1 private trade journal audit</strong>.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-yellow-400 text-zinc-950 font-bold text-xs hover:bg-yellow-300 transition-all cursor-pointer shadow-lg shadow-yellow-400/20"
                >
                  Return to Desk Overview
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
