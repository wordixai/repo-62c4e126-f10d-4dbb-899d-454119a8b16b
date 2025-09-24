import React from 'react';
import { motion } from 'framer-motion';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid 
} from 'recharts';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const categoryData = [
  { name: 'Food & Drinks', value: 35, amount: 890, color: '#f59e0b' },
  { name: 'Transportation', value: 25, amount: 640, color: '#3b82f6' },
  { name: 'Shopping', value: 20, amount: 510, color: '#8b5cf6' },
  { name: 'Bills', value: 15, amount: 380, color: '#ef4444' },
  { name: 'Entertainment', value: 5, amount: 130, color: '#10b981' }
];

const weeklyData = [
  { day: 'Mon', amount: 120 },
  { day: 'Tue', amount: 89 },
  { day: 'Wed', amount: 156 },
  { day: 'Thu', amount: 78 },
  { day: 'Fri', amount: 234 },
  { day: 'Sat', amount: 189 },
  { day: 'Sun', amount: 145 }
];

const monthlyData = [
  { month: 'Jan', income: 3200, expense: 2450 },
  { month: 'Feb', income: 3200, expense: 2680 },
  { month: 'Mar', income: 3400, expense: 2890 },
  { month: 'Apr', income: 3200, expense: 2340 },
  { month: 'May', income: 3600, expense: 2780 },
  { month: 'Jun', income: 3200, expense: 2550 }
];

export const SpendingChart: React.FC = () => {
  return (
    <div className="px-4 py-2">
      <motion.h2 
        className="text-lg font-semibold text-mobile-text-primary mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        Spending Analysis
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="border-mobile-border-light mobile-shadow-sm">
          <Tabs defaultValue="categories" className="w-full">
            <TabsList className="grid w-full grid-cols-3 m-2">
              <TabsTrigger value="categories" className="text-xs">Categories</TabsTrigger>
              <TabsTrigger value="weekly" className="text-xs">Weekly</TabsTrigger>
              <TabsTrigger value="trends" className="text-xs">Trends</TabsTrigger>
            </TabsList>
            
            <TabsContent value="categories" className="p-4 pt-0">
              <div className="h-48 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="space-y-2">
                {categoryData.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm text-mobile-text-secondary">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-mobile-text-primary">
                        ${item.amount}
                      </p>
                      <p className="text-xs text-mobile-text-muted">{item.value}%</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="weekly" className="p-4 pt-0">
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="day" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#9ca3af' }}
                    />
                    <YAxis hide />
                    <Line 
                      type="monotone" 
                      dataKey="amount" 
                      stroke="hsl(var(--mobile-primary))"
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--mobile-primary))', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: 'hsl(var(--mobile-primary))', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-mobile-text-primary">$1,011</p>
                  <p className="text-sm text-mobile-text-secondary">This Week</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-mobile-success">-12%</p>
                  <p className="text-sm text-mobile-text-secondary">vs Last Week</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="trends" className="p-4 pt-0">
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#9ca3af' }}
                    />
                    <YAxis hide />
                    <Line 
                      type="monotone" 
                      dataKey="income" 
                      stroke="hsl(var(--mobile-success))"
                      strokeWidth={2}
                      name="Income"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="expense" 
                      stroke="hsl(var(--mobile-error))"
                      strokeWidth={2}
                      name="Expense"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex justify-around mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-mobile-success" />
                  <span className="text-sm text-mobile-text-secondary">Income</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-mobile-error" />
                  <span className="text-sm text-mobile-text-secondary">Expense</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </motion.div>
    </div>
  );
};