import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MobileHeader } from '@/components/mobile/MobileHeader';
import { BalanceCard } from '@/components/mobile/BalanceCard';
import { QuickActions } from '@/components/mobile/QuickActions';
import { TransactionList } from '@/components/mobile/TransactionList';
import { BottomNavigation } from '@/components/mobile/BottomNavigation';
import Analytics from './Analytics';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  if (activeTab === 'analytics') {
    return <Analytics />;
  }

  return (
    <div className="min-h-screen bg-mobile-bg-primary">
      <motion.div 
        className="max-w-md mx-auto bg-mobile-bg-primary min-h-screen relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <MobileHeader 
          title="Dashboard"
          onMenuClick={() => console.log('Menu clicked')}
        />
        
        {/* Main Content */}
        <main className="pb-20">
          {/* Balance Section */}
          <motion.section 
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <BalanceCard />
          </motion.section>
          
          {/* Quick Actions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <QuickActions />
          </motion.section>
          
          {/* Transactions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <TransactionList />
          </motion.section>
        </main>
        
        {/* Bottom Navigation */}
        <BottomNavigation 
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </motion.div>
    </div>
  );
};

export default Index;