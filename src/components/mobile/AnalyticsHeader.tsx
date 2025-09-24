import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Filter, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const AnalyticsHeader: React.FC = () => {
  return (
    <motion.div 
      className="px-4 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-mobile-text-primary">Analytics</h1>
          <p className="text-mobile-text-secondary text-sm">Financial insights & reports</p>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-mobile-lg"
        >
          <Download className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="flex space-x-2">
        <Card className="flex-1 p-3 border-mobile-border-light">
          <Button
            variant="ghost"
            className="w-full justify-start text-mobile-text-secondary hover:text-mobile-text-primary"
          >
            <Calendar className="h-4 w-4 mr-2" />
            This Month
          </Button>
        </Card>
        
        <Card className="p-3 border-mobile-border-light">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
          >
            <Filter className="h-4 w-4" />
          </Button>
        </Card>
      </div>
    </motion.div>
  );
};