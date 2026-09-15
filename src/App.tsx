import React, { useState, useEffect } from 'react';
import { PotreeHero } from './components/PotreeHero';
import { CoursePurposeSection } from './components/CoursePurposeSection';
import { LearningSolutionsSection } from './components/LearningSolutionsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FooterSection } from './components/FooterSection';
import { EnrollmentSection } from './components/EnrollmentSection';
import { AboutUsPage } from './components/AboutUsPage';
import { ContactUsPage } from './components/ContactUsPage';
import { TopUpModal } from './components/TopUpModal';
import { TransferModal } from './components/TransferModal';
import { BalanceDetailsModal } from './components/BalanceDetailsModal';
import { BecomeClientModal } from './components/BecomeClientModal';
import { RegisterModal } from './components/RegisterModal';
import { NavModals } from './components/NavModals';
import { CurrencyCode, ModalType, ActiveNavTab, Transaction } from './types';
import { INITIAL_BALANCE_USD, CURRENCIES, RECENT_TRANSACTIONS } from './data';

// Map URL hashes to nav tab names
function getTabFromHash(): ActiveNavTab {
  const hash = window.location.hash;
  if (hash === '#about-us') return 'About Us';
  if (hash === '#contact-us') return 'Contact Us';
  return 'Home';
}

function getHashFromTab(tab: ActiveNavTab): string {
  if (tab === 'About Us') return '#about-us';
  if (tab === 'Contact Us') return '#contact-us';
  return '';
}

export default function App() {
  const [balanceUSD, setBalanceUSD] = useState<number>(INITIAL_BALANCE_USD);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>('USD');
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [activeNavTab, setActiveNavTab] = useState<ActiveNavTab>(getTabFromHash);
  const [transactions, setTransactions] = useState<Transaction[]>(RECENT_TRANSACTIONS);

  // Keep URL hash in sync whenever the active tab changes
  useEffect(() => {
    const hash = getHashFromTab(activeNavTab);
    window.history.replaceState(null, '', hash || window.location.pathname);
  }, [activeNavTab]);

  // Handle browser back/forward navigation
  useEffect(() => {
    const onHashChange = () => setActiveNavTab(getTabFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Handle adding funds via Top Up
  const handleAddFunds = (amountUSD: number) => {
    setBalanceUSD((prev) => prev + amountUSD);
    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      type: 'inflow',
      title: 'Direct Treasury Liquidity Deposit',
      counterparty: 'Primary Clearing Reserve',
      amountUSD,
      date: 'Just now',
      category: 'Instant Top Up',
      status: 'completed'
    };
    setTransactions((prev) => [newTx, ...prev]);
  };

  // Handle sending funds via Transfer
  const handleSendTransfer = (amountUSD: number, recipient: string, memo: string) => {
    setBalanceUSD((prev) => Math.max(0, prev - amountUSD));
    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      type: 'outflow',
      title: memo || 'Treasury Transfer',
      counterparty: recipient,
      amountUSD,
      date: 'Just now',
      category: 'External Disbursement',
      status: 'completed'
    };
    setTransactions((prev) => [newTx, ...prev]);
  };

  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen w-full bg-zinc-950 font-sans text-white">
      {/* Dynamic View: Dedicated About Us Page, Contact Us Page, or Home Landing */}
      {activeNavTab === 'About Us' ? (
        <AboutUsPage 
          activeNavTab={activeNavTab}
          onSelectNavTab={setActiveNavTab}
          onOpenModal={setActiveModal}
        />
      ) : activeNavTab === 'Contact Us' ? (
        <ContactUsPage 
          activeNavTab={activeNavTab}
          onSelectNavTab={setActiveNavTab}
          onOpenModal={setActiveModal}
        />
      ) : (
        <>
          {/* Primary Hero Section replicating the design */}
          <PotreeHero
            balanceUSD={balanceUSD}
            selectedCurrency={selectedCurrency}
            onSelectCurrency={setSelectedCurrency}
            onOpenModal={setActiveModal}
            activeNavTab={activeNavTab}
            onSelectNavTab={setActiveNavTab}
          />

          {/* Dedicated Upcoming Cohort, Live Timer & $1,500 Single Program Section (Placed high for immediate conversion & sales) */}
          <EnrollmentSection onOpenModal={setActiveModal} />

          {/* Course Purpose & Value Proposition Section */}
          <CoursePurposeSection 
             onOpenModal={setActiveModal} 
             onSelectNavTab={setActiveNavTab}
          />
          <LearningSolutionsSection />
          <TestimonialsSection />
        </>
      )}

      {/* Global Footer */}
      <FooterSection 
        onSelectNavTab={setActiveNavTab}
        onOpenModal={setActiveModal}
      />

      {/* Interactive Top Up Modal */}
      <TopUpModal
        isOpen={activeModal === 'top_up'}
        onClose={closeModal}
        currency={CURRENCIES[selectedCurrency]}
        onAddFunds={handleAddFunds}
      />

      {/* Interactive Transfer Modal */}
      <TransferModal
        isOpen={activeModal === 'transfer'}
        onClose={closeModal}
        currency={CURRENCIES[selectedCurrency]}
        currentBalanceUSD={balanceUSD}
        onSendTransfer={handleSendTransfer}
      />

      {/* Balance Details & Statement Modal */}
      <BalanceDetailsModal
        isOpen={activeModal === 'statement'}
        onClose={closeModal}
        currency={CURRENCIES[selectedCurrency]}
        balanceUSD={balanceUSD}
        transactions={transactions}
        onOpenTopUp={() => setActiveModal('top_up')}
        onOpenTransfer={() => setActiveModal('transfer')}
      />

      {/* Become a Client Onboarding Modal */}
      <BecomeClientModal
        isOpen={activeModal === 'become_client'}
        onClose={closeModal}
      />

      {/* Register Account Modal */}
      <RegisterModal
        isOpen={activeModal === 'register'}
        onClose={closeModal}
        onOpenClient={() => setActiveModal('become_client')}
      />

      {/* Navigation Modals (About, Features, Pricing, Article) */}
      <NavModals
        activeModal={activeModal}
        onClose={closeModal}
        onOpenClient={() => setActiveModal('become_client')}
      />
    </div>
  );
}
