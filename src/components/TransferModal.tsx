import React, { useState } from 'react';
import { X, ArrowUpRight, CheckCircle2, ShieldCheck, UserCheck } from 'lucide-react';
import { CurrencyConfig } from '../types';

interface TransferModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: CurrencyConfig;
  currentBalanceUSD: number;
  onSendTransfer: (amountUSD: number, recipient: string, memo: string) => void;
}

export const TransferModal: React.FC<TransferModalProps> = ({
  isOpen,
  onClose,
  currency,
  currentBalanceUSD,
  onSendTransfer
}) => {
  const [recipient, setRecipient] = useState('Acme Global Logistics Ltd');
  const [iban, setIban] = useState('US89POTR0192837482910');
  const [amount, setAmount] = useState('15000');
  const [memo, setMemo] = useState('Invoice #2026-89B Settlement');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const currentAvailableInCurrency = currentBalanceUSD * currency.rateToUSD;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(amount);
    if (isNaN(val) || val <= 0) {
      setError('Please enter a valid transfer amount');
      return;
    }

    const valUSD = val / currency.rateToUSD;
    if (valUSD > currentBalanceUSD) {
      setError('Insufficient funds in your corporate treasury balance');
      return;
    }

    setError('');
    setSuccess(true);
    setTimeout(() => {
      onSendTransfer(valUSD, recipient, memo);
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
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/15 text-yellow-400 border border-yellow-400/30 text-xs font-semibold mb-2">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>Cross-Border Settlement</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Send Instant Payout
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Zero-delay disbursement to global vendors, contractors, or bank accounts.
          </p>
        </div>

        {success ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-yellow-400 text-zinc-950 flex items-center justify-center mx-auto shadow-lg shadow-yellow-400/30">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-bold text-white">Transfer Dispatched!</h3>
            <p className="text-xs text-zinc-400">
              Sent {currency.symbol}{parseFloat(amount).toLocaleString()} to {recipient}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs p-3 rounded-xl">
                {error}
              </div>
            )}

            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1">
                Recipient / Entity Name
              </label>
              <div className="relative">
                <UserCheck className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                  required
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="Company or Supplier Name"
                  className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1">
                Account Number / IBAN / Swift BIC
              </label>
              <input
                type="text"
                required
                value={iban}
                onChange={(e) => setIban(e.target.value)}
                placeholder="IBAN, Routing Number or SWIFT"
                className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl px-4 py-2.5 text-sm text-white font-mono placeholder-zinc-500 focus:outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-zinc-300">
                  Transfer Amount ({currency.code})
                </label>
                <span className="text-[11px] text-zinc-400">
                  Available: {currency.symbol}{currentAvailableInCurrency.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-zinc-400">
                  {currency.symbol}
                </span>
                <input
                  type="number"
                  min="1"
                  step="any"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl pl-9 pr-4 py-2.5 text-lg font-bold text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1">
                Payment Memo / Reference
              </label>
              <input
                type="text"
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                placeholder="e.g. Invoice settlement or Contractor payment"
                className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl px-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400"
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-800/60">
              <ShieldCheck className="w-4 h-4 text-yellow-400 shrink-0" />
              <span>Real-time sanction screening & ISO 20022 compliant routing.</span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-yellow-400 text-zinc-950 font-bold text-sm sm:text-base hover:bg-yellow-300 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-yellow-400/20 cursor-pointer"
            >
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              <span>Disburse {currency.symbol}{amount || '0'} Now</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
