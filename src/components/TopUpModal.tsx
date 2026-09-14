import React, { useState } from 'react';
import { X, Plus, CheckCircle2, ArrowRight, ShieldCheck, Building2, CreditCard, Zap } from 'lucide-react';
import { CurrencyConfig } from '../types';

interface TopUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: CurrencyConfig;
  onAddFunds: (amountUSD: number) => void;
}

export const TopUpModal: React.FC<TopUpModalProps> = ({
  isOpen,
  onClose,
  currency,
  onAddFunds
}) => {
  const [amount, setAmount] = useState('25000');
  const [method, setMethod] = useState<'wire' | 'ach' | 'card'>('wire');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const quickAmounts = [5000, 10000, 25000, 50000, 100000];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(amount);
    if (isNaN(val) || val <= 0) return;

    // Convert to USD equivalent
    const amountUSD = val / currency.rateToUSD;
    setSuccess(true);
    setTimeout(() => {
      onAddFunds(amountUSD);
      setSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-zinc-950 text-white border border-zinc-800 rounded-3xl p-5 sm:p-8 shadow-2xl shadow-black/90 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-2">
            <Zap className="w-3.5 h-3.5" />
            <span>Instant Treasury Liquidity</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Top Up Treasury Balance
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Deposit funds directly into your multi-currency corporate account.
          </p>
        </div>

        {success ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-yellow-400 text-zinc-950 flex items-center justify-center mx-auto shadow-lg shadow-yellow-400/30">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-bold text-white">Deposit Successful!</h3>
            <p className="text-xs text-zinc-400">
              Added {currency.symbol}{parseFloat(amount).toLocaleString()} to your corporate balance.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Amount Field */}
            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                Deposit Amount ({currency.code})
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-zinc-400">
                  {currency.symbol}
                </span>
                <input
                  type="number"
                  min="100"
                  step="any"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700/80 rounded-2xl pl-10 pr-4 py-3.5 text-xl font-bold text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>

              {/* Quick Select Buttons */}
              <div className="flex flex-wrap gap-2 mt-2.5">
                {quickAmounts.map((q) => {
                  const converted = Math.round(q * currency.rateToUSD);
                  return (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setAmount(converted.toString())}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors cursor-pointer"
                    >
                      +{currency.symbol}{converted.toLocaleString()}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Funding Source Selector */}
            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-2">
                Deposit Channel
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setMethod('wire')}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    method === 'wire' 
                      ? 'bg-zinc-800/80 border-yellow-400 text-white shadow-sm' 
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Zap className="w-4 h-4 mb-1.5 text-yellow-400" />
                  <div className="text-xs font-bold leading-tight">Instant Wire</div>
                  <div className="text-[10px] opacity-70">FedNow / SEPA</div>
                </button>

                <button
                  type="button"
                  onClick={() => setMethod('ach')}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    method === 'ach' 
                      ? 'bg-zinc-800/80 border-yellow-400 text-white shadow-sm' 
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Building2 className="w-4 h-4 mb-1.5 text-white" />
                  <div className="text-xs font-bold leading-tight">Linked Bank</div>
                  <div className="text-[10px] opacity-70">ACH Direct</div>
                </button>

                <button
                  type="button"
                  onClick={() => setMethod('card')}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    method === 'card' 
                      ? 'bg-zinc-800/80 border-yellow-400 text-white shadow-sm' 
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <CreditCard className="w-4 h-4 mb-1.5 text-yellow-400" />
                  <div className="text-xs font-bold leading-tight">Corporate Card</div>
                  <div className="text-[10px] opacity-70">Visa / MC</div>
                </button>
              </div>
            </div>

            {/* Guarantee Note */}
            <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900/50 p-3 rounded-xl border border-zinc-800/60">
              <ShieldCheck className="w-4 h-4 text-yellow-400 shrink-0" />
              <span>Funds safeguarded in Tier-1 central reserve correspondent banks.</span>
            </div>

            {/* Action Submit */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-yellow-400 text-zinc-950 font-bold text-sm sm:text-base hover:bg-yellow-300 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-yellow-400/20 cursor-pointer"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Confirm & Top Up Balance</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
