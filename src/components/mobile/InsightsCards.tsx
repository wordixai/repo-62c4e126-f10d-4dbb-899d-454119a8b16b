import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  AlertCircle,
  PiggyBank,
  CreditCard
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const insights = [
  {
    id: 'savings',
    title: 'Savings Goal',
    description: 'Vacation Fund',
    value: '$2,450',
    target: '$5,000',
    progress: 49,
    icon: PiggyBank,
    color: 'text-mobile-success',
    bgColor: 'bg-mobile-success/10'
  },
  {
    id: 'budget',
    title: 'Monthly Budget',
    description: 'Food & Dining',
    value: '$340',
    target: '$500',
    progress: 68,
    icon: Target,
    color: 'text-mobile-warning',
    bgColor: 'bg-mobile-warning/10'
  },
  {
    id: 'credit',
    title: 'Credit Usage',
    description: 'Credit Card Limit',
    value: '$1,200',
    target: '$3,000',
    progress: 40,
    icon: CreditCard,
    color: 'text-mobile-primary',
    bgColor: 'bg-mobile-primary/10'
  }
];

const quickInsights = [
  {
    title: 'Highest Spending Day',
    value: 'Friday',
    description: 'Avg $234 per Friday',
    trend: 'up',
    change: '+15%',
    icon: TrendingUp,
    color: 'text-mobile-error'
  },
  {
    title: 'Best Saving Week',
    value: 'Last Week',
    description: 'Saved $180 more',
    trend: 'down',
    change: '-12%',
    icon: TrendingDown,
    color: 'text-mobile-success'
  },
  {
    title: 'Budget Alert',
    value: '3 Categories',
    description: 'Approaching limit',
    trend: 'alert',
    change: '85%',
    icon: AlertCircle,
    color: 'text-mobile-warning'
  }
];

export const InsightsCards: React.FC = () => {
  return (
    <div className="px-4 py-4 space-y-6">
      {/* Progress Goals */}
      <div>
        <motion.h3 
          className="text-lg font-semibold text-mobile-text-primary mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          Financial Goals
        </motion.h3>
        
        <div className="space-y-3">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="p-4 border-mobile-border-light mobile-shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`${insight.bgColor} p-2 rounded-mobile-lg`}>
                      <insight.icon className={`h-5 w-5 ${insight.color}`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-mobile-text-primary text-sm">
                        {insight.title}
                      </h4>
                      <p className="text-mobile-text-muted text-xs">
                        {insight.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-mobile-text-primary text-sm">
                      {insight.value}
                    </p>
                    <p className="text-mobile-text-muted text-xs">
                      of {insight.target}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-mobile-text-secondary">Progress</span>
                    <span className="text-xs font-medium text-mobile-text-primary">
                      {insight.progress}%
                    </span>
                  </div>
                  <Progress value={insight.progress} className="h-2" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Quick Insights */}
      <div>
        <motion.h3 
          className="text-lg font-semibold text-mobile-text-primary mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Smart Insights
        </motion.h3>
        
        <div className="grid grid-cols-1 gap-3">
          {quickInsights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.3 }}
            >
              <Card className="p-4 border-mobile-border-light mobile-shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <insight.icon className={`h-5 w-5 ${insight.color}`} />
                    <div>
                      <h4 className="font-medium text-mobile-text-primary text-sm">
                        {insight.title}
                      </h4>
                      <p className="text-mobile-text-muted text-xs">
                        {insight.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-semibold text-mobile-text-primary text-sm">
                      {insight.value}
                    </p>
                    <p className={`text-xs font-medium ${insight.color}`}>
                      {insight.change}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};