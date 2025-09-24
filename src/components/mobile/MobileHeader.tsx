import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Search, Menu } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface MobileHeaderProps {
  onMenuClick?: () => void;
  title?: string;
  showSearch?: boolean;
  showNotifications?: boolean;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  onMenuClick,
  title = "Dashboard",
  showSearch = true,
  showNotifications = true
}) => {
  return (
    <motion.header 
      className="sticky top-0 z-50 mobile-glass border-b border-mobile-border-light px-4 py-3"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="h-10 w-10 rounded-mobile-lg"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-lg font-semibold text-mobile-text-primary">{title}</h1>
            <p className="text-sm text-mobile-text-secondary">Good morning!</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {showSearch && (
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-mobile-lg"
            >
              <Search className="h-5 w-5" />
            </Button>
          )}
          
          {showNotifications && (
            <motion.div 
              className="relative"
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-mobile-lg"
              >
                <Bell className="h-5 w-5" />
              </Button>
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-mobile-error rounded-full border-2 border-white" />
            </motion.div>
          )}
          
          <Avatar className="h-10 w-10 border-2 border-mobile-border-light">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
            <AvatarFallback className="mobile-gradient-primary text-white font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </motion.header>
  );
};