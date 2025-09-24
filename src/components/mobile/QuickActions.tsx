import React from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Send, 
  Plus, 
  Smartphone,
  ArrowUpRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const quickActions = [
  {
    id: 'transfer',
    label: 'Transfer',
    icon: Send,
    color: 'mobile-gradient-primary',
    textColor: 'text-white'
  },
  {
    id: 'topup',
    label: 'Top Up',
    icon: Plus,
    color: 'bg-mobile-success',
    textColor: 'text-white'
  },
  {
    id: 'bills',
    label: 'Bills',
    icon: CreditCard,
    color: 'bg-mobile-warning',
    textColor: 'text-white'
  },
  {
    id: 'mobile',
    label: 'Mobile',
    icon: Smartphone,
    color: 'bg-mobile-accent',
    textColor: 'text-white'
  }
];

export const QuickActions: React.FC = () => {
  return (
    <div className="px-4 py-6">
      <motion.h2 
        className="text-lg font-semibold text-mobile-text-primary mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        Quick Actions
      </motion.h2>
      
      <div className="grid grid-cols-4 gap-3">
        {quickActions.map((action, index) => (
          <motion.div
            key={action.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="p-4 border-0 mobile-shadow-float hover:mobile-shadow-lg transition-all duration-200">
              <div className="flex flex-col items-center space-y-2">
                <div className={`${action.color} p-3 rounded-mobile-lg`}>
                  <action.icon className={`h-6 w-6 ${action.textColor}`} />
                </div>
                <span className="text-xs font-medium text-mobile-text-secondary text-center">
                  {action.label}
                </span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};