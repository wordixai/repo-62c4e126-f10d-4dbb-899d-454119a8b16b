import React from 'react';
import { motion } from 'framer-motion';
import { AnalyticsHeader } from '@/components/mobile/AnalyticsHeader';
import { MonthlyOverview } from '@/components/mobile/MonthlyOverview';
import { SpendingChart } from '@/components/mobile/SpendingChart';
import { InsightsCards } from '@/components/mobile/InsightsCards';
import { BottomNavigation } from '@/components/mobile/BottomNavigation';

const Analytics = () => {
  return (
    <div className="min-h-screen bg-mobile-bg-primary">
      <motion.div 
        className="max-w-md mx-auto bg-mobile-bg-primary min-h-screen relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <AnalyticsHeader />
        
        {/* Main Content */}
        <main className="pb-20">
          {/* Monthly Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <MonthlyOverview />
          </motion.section>
          
          {/* Charts */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <SpendingChart />
          </motion.section>
          
          {/* Insights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <InsightsCards />
          </motion.section>
        </main>
        
        {/* Bottom Navigation */}
        <BottomNavigation activeTab="analytics" />
      </motion.div>
    </div>
  );
};

export default Analytics;