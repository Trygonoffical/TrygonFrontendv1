'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  HomeIcon, 
  Squares2X2Icon, 
  BriefcaseIcon, 
  ChatBubbleLeftRightIcon,
  PhoneIcon 
} from '@heroicons/react/24/outline';
import { 
  HomeIcon as HomeIconSolid, 
  Squares2X2Icon as Squares2X2IconSolid, 
  BriefcaseIcon as BriefcaseIconSolid, 
  ChatBubbleLeftRightIcon as ChatBubbleLeftRightIconSolid,
  PhoneIcon as PhoneIconSolid
} from '@heroicons/react/24/solid';

const MobileBottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    { 
      name: 'Home', 
      href: '/', 
      icon: HomeIcon, 
      activeIcon: HomeIconSolid 
    },
    { 
      name: 'Services', 
      href: '/services', 
      icon: Squares2X2Icon, 
      activeIcon: Squares2X2IconSolid 
    },
    { 
      name: 'Portfolio', 
      href: '/portfolio', 
      icon: BriefcaseIcon, 
      activeIcon: BriefcaseIconSolid 
    },
    { 
      name: 'Contact', 
      href: '/contact', 
      icon: PhoneIcon, 
      activeIcon: PhoneIconSolid 
    },
  ];

  return (
    <div className="lg:hidden fixed bottom-6 left-4 right-4 z-50">
      <div className="glass backdrop-blur-xl bg-gray-900/80 rounded-2xl border border-white/10 shadow-2xl shadow-black/50 px-6 py-4">
        <nav className="flex justify-between items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = isActive ? item.activeIcon : item.icon;

            return (
              <Link 
                key={item.name} 
                href={item.href}
                className="relative group flex flex-col items-center justify-center w-12"
              >
                {isActive && (
                  <motion.div
                    layoutId="navBlob"
                    className="absolute -top-12 w-10 h-10 rounded-full bg-blue-500/20 blur-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <div className={`
                  relative z-10 transition-all duration-300
                  ${isActive ? 'text-blue-400 -translate-y-1' : 'text-gray-400 hover:text-gray-200'}
                `}>
                  <Icon className="w-6 h-6" />
                </div>
                
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-3 text-[10px] font-medium text-blue-400"
                  >
                    {item.name}
                  </motion.span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MobileBottomNav;
