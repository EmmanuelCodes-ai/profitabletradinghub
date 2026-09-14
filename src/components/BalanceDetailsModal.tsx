import React, { useState } from 'react';
import { X, Copy, Check, Download, ArrowDownLeft, ArrowUpRight, ShieldCheck, Building } from 'lucide-react';
import { CurrencyConfig, Transaction } from '../types';

interface BalanceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: CurrencyConfig;
  balanceUSD: number;
  transactions: Transaction[];
  onOpenTopUp: () => void;
  onOpenTransfer: () => void;
}

export const BalanceDetailsModal: React.FC<BalanceDetailsModalProps> = ({
  isOpen,
  onClose,
  currency,
  balanceUSD,
  transactions,
  onOpenTopUp,
  onOpenTransfer
}) => {
  const [copied, setCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentVal = balanceUSD * currency.rateToUSD;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-zinc-950 text-white border border-zinc-800 rounded-3xl p-5 sm:p-7 shadow-2xl shadow-black/90 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Balance Overview Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-zinc-400 font-medium">Consolidated Treasury Holding</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {currency.symbol} {currentVal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-yellow-400 font-semibold mt-0.5 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct Federal Reserve & Tier-1 Safeguarded</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenTopUp();
              }}
              className="px-4 py-2 rounded-full bg-yellow-400 text-zinc-950 text-xs font-bold hover:bg-yellow-300 cursor-pointer"
            >
              + Top Up
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenTransfer();
              }}
              className="px-4 py-2 rounded-full bg-zinc-800 text-white text-xs font-bold hover:bg-zinc-700 cursor-pointer"
            >
              ↗ Send Transfer
            </button>
          </div>
        </div>

        {/* Virtual Account Coordinates */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
            <Building className="w-4 h-4 text-zinc-300" />
            <span>Virtual Account Coordinates ({currency.code})</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-xl p-3 flex items-center justify-between">
              <div>
                <div className="text-zinc-500 text-[10px]">Beneficiary Name</div>
                <div className="font-semibold text-white">PTHub Global Treasury LLC</div>
              </div>
              <button
                onClick={() => handleCopy('PTHub Global Treasury LLC', 'name')}
                className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 cursor-pointer"
              >
                {copied === 'name' ? <Check className="w-4 h-4 text-yellow-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-xl p-3 flex items-center justify-between">
              <div>
                <div className="text-zinc-500 text-[10px]">IBAN / Account Number</div>
                <div className="font-mono font-semibold text-white">US94POTR0882194827104</div>
              </div>
              <button
                onClick={() => handleCopy('US94POTR0882194827104', 'iban')}
                className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 cursor-pointer"
              >
                {copied === 'iban' ? <Check className="w-4 h-4 text-yellow-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-xl p-3 flex items-center justify-between">
              <div>
                <div className="text-zinc-500 text-[10px]">Routing / ABA / Sort Code</div>
                <div className="font-mono font-semibold text-white">021000021</div>
              </div>
              <button
                onClick={() => handleCopy('021000021', 'aba')}
                className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 cursor-pointer"
              >
                {copied === 'aba' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-xl p-3 flex items-center justify-between">
              <div>
                <div className="text-zinc-500 text-[10px]">SWIFT / BIC</div>
                <div className="font-mono font-semibold text-white">POTRUS33XXX</div>
              </div>
              <button
                onClick={() => handleCopy('POTRUS33XXX', 'swift')}
                className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 cursor-pointer"
              >
                {copied === 'swift' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Ledger & Recent Settlements */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Recent Inflow & Settlement Activity
            </h3>
            <button
              onClick={() => {
                alert('Exporting statement in CSV & PDF format...');
              }}
              className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Statement</span>
            </button>
          </div>

          <div className="space-y-2">
            {transactions.map((tx) => {
              const convertedTx = tx.amountUSD * currency.rateToUSD;
              return (
                <div
                  key={tx.id}
                  className="bg-zinc-900/50 border border-zinc-800/60 rounded-xl p-3 flex items-center justify-between hover:bg-zinc-900 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      tx.type === 'inflow' ? 'bg-yellow-400/15 text-yellow-400' : 'bg-rose-500/10 text-rose-400'
                    }`}>
                      {tx.type === 'inflow' ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{tx.title}</div>
                      <div className="text-xs text-zinc-500">{tx.counterparty} • {tx.date}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className={`text-sm font-bold ${
                      tx.type === 'inflow' ? 'text-yellow-400' : 'text-zinc-200'
                    }`}>
                      {tx.type === 'inflow' ? '+' : '-'}{currency.symbol}{convertedTx.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div className="text-[10px] text-zinc-500 uppercase">{tx.status}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
