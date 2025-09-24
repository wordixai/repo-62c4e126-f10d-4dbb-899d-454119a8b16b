import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  Coffee, 
  Car, 
  ShoppingBag,
  Wifi,
  MoreHorizontal
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const transactions = [
  {
    id: '1',
    type: 'expense',
    title: 'Starbucks Coffee',
    category: 'Food & Drinks',
    amount: -8.50,
    time: '10:30 AM',
    icon: Coffee,
    color: 'bg-amber-100 text-amber-600'
  },
  {
    id: '2', 
    type: 'income',
    title: 'Salary Deposit',
    category: 'Income',
    amount: 3200.00,
    time: '09:00 AM',
    icon: ArrowDownLeft,
    color: 'bg-green-100 text-green-600'
  },
  {
    id: '3',
    type: 'expense',
    title: 'Uber Ride',
    category: 'Transportation',
    amount: -15.25,
    time: 'Yesterday',
    icon: Car,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: '4',
    type: 'expense',
    title: 'Amazon Purchase',
    category: 'Shopping',
    amount: -89.99,
    time: 'Yesterday',
    icon: ShoppingBag,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: '5',
    type: 'expense',
    title: 'Internet Bill',
    category: 'Bills',
    amount: -45.00,
    time: '2 days ago',
    icon: Wifi,
    color: 'bg-orange-100 text-orange-600'
  }
];

export const TransactionList: React.FC = () => {
  return (
    <div className="px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <motion.h2 
          className="text-lg font-semibold text-mobile-text-primary"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Recent Transactions
        </motion.h2>
        <Button variant="ghost" size="sm" className="text-mobile-primary">
          View All
        </Button>
      </div>
      
      <Card className="border-mobile-border-light mobile-shadow-sm">
        <div className="divide-y divide-mobile-border-light">
          {transactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              className="p-4 flex items-center justify-between hover:bg-mobile-bg-secondary/50 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <div className="flex items-center space-x-3">
                <Avatar className={`h-12 w-12 ${transaction.color}`}>
                  <AvatarFallback className={transaction.color}>
                    <transaction.icon className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <h4 className="font-medium text-mobile-text-primary text-sm">
                    {transaction.title}
                  </h4>
                  <p className="text-mobile-text-muted text-xs">
                    {transaction.category} • {transaction.time}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="text-right">
                  <p className={`font-semibold text-sm ${
                    transaction.type === 'income' 
                      ? 'text-mobile-success' 
                      : 'text-mobile-text-primary'
                  }`}>
                    {transaction.type === 'income' ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                  </p>
                </div>
                
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
};