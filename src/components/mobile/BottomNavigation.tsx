import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  BarChart3, 
  CreditCard, 
  Settings,
  User
} from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'cards', label: 'Cards', icon: CreditCard },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'settings', label: 'Settings', icon: Settings }
];

interface BottomNavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab = 'home',
  onTabChange = () => {}
}) => {
  return (
    <motion.nav 
      className="fixed bottom-0 left-0 right-0 mobile-glass border-t border-mobile-border-light p-2"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
    >
      <div className="flex justify-around">
        {navItems.map((item, index) => {
          const isActive = activeTab === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center space-y-1 p-2 rounded-mobile-lg transition-all duration-200 ${
                isActive 
                  ? 'bg-mobile-primary/10 text-mobile-primary' 
                  : 'text-mobile-text-muted hover:text-mobile-text-secondary'
              }`}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <item.icon className={`h-5 w-5 ${isActive ? 'text-mobile-primary' : ''}`} />
              <span className={`text-xs font-medium ${isActive ? 'text-mobile-primary' : ''}`}>
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  className="h-1 w-6 bg-mobile-primary rounded-full"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};