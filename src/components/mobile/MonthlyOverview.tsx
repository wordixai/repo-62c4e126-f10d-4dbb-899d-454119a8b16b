import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  DollarSign,
  Calendar
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { format } from 'date-fns';

const monthlyStats = [
  {
    title: 'Total Income',
    amount: 3200,
    change: 5.2,
    trend: 'up',
    icon: ArrowDownLeft,
    color: 'text-mobile-success',
    bgColor: 'bg-mobile-success/10'
  },
  {
    title: 'Total Expenses',
    amount: 2550,
    change: -8.1,
    trend: 'down',
    icon: ArrowUpRight,
    color: 'text-mobile-error',
    bgColor: 'bg-mobile-error/10'
  },
  {
    title: 'Net Savings',
    amount: 650,
    change: 12.3,
    trend: 'up',
    icon: DollarSign,
    color: 'text-mobile-primary',
    bgColor: 'bg-mobile-primary/10'
  }
];

export const MonthlyOverview: React.FC = () => {
  const currentMonth = format(new Date(), 'MMMM yyyy');
  
  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <motion.h3 
          className="text-lg font-semibold text-mobile-text-primary"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          Monthly Overview
        </motion.h3>
        
        <div className="flex items-center space-x-1 text-mobile-text-secondary">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">{currentMonth}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-3">
        {monthlyStats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index + 0.1 }}
          >
            <Card className="p-4 border-mobile-border-light mobile-shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`${stat.bgColor} p-2 rounded-mobile-lg`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div>
                    <h4 className="font-medium text-mobile-text-primary text-sm">
                      {stat.title}
                    </h4>
                    <p className="text-2xl font-bold text-mobile-text-primary">
                      ${stat.amount.toLocaleString()}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`flex items-center space-x-1 ${
                    stat.trend === 'up' ? 'text-mobile-success' : 'text-mobile-error'
                  }`}>
                    <ArrowUpRight className={`h-3 w-3 ${
                      stat.trend === 'down' ? 'rotate-180' : ''
                    }`} />
                    <span className="text-sm font-medium">
                      {Math.abs(stat.change)}%
                    </span>
                  </div>
                  <p className="text-xs text-mobile-text-muted">vs last month</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};