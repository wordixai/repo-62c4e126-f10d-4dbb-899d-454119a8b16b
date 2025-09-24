import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const BalanceCard: React.FC = () => {
  const [showBalance, setShowBalance] = useState(true);
  const balance = 12548.76;
  const growth = 8.5;

  return (
    <motion.div 
      className="px-4 py-2"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1, duration: 0.4 }}
    >
      <Card className="mobile-gradient-primary border-0 mobile-shadow-lg p-6 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-white/80 text-sm font-medium">Total Balance</p>
            <div className="flex items-center space-x-3 mt-1">
              <motion.h3 
                className="text-2xl font-bold"
                key={showBalance ? 'visible' : 'hidden'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {showBalance ? `$${balance.toLocaleString()}` : '••••••'}
              </motion.h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowBalance(!showBalance)}
                className="h-8 w-8 text-white/80 hover:text-white hover:bg-white/20"
              >
                {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          
          <motion.div 
            className="bg-white/20 rounded-mobile-lg p-2"
            whileTap={{ scale: 0.95 }}
          >
            <TrendingUp className="h-5 w-5" />
          </motion.div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-mobile-success/20 text-mobile-success px-2 py-1 rounded-mobile-sm text-xs font-medium flex items-center space-x-1">
              <TrendingUp className="h-3 w-3" />
              <span>+{growth}%</span>
            </div>
            <span className="text-white/80 text-sm">vs last month</span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-white/80 hover:text-white hover:bg-white/20 text-xs"
          >
            View Details
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};