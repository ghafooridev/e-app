import { Button, Badge } from '@/components/ui';

import { MonitorSmartphone, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header
      className='fixed w-full flex bg-white shadow-md justify-between px-20 h-20 z-40'
    >
      <div className="flex items-center gap-3">
        <MonitorSmartphone />
        <span className="text-2xl font-bold text-gray-800">Digital Shop</span>
      </div>

      <div className="flex items-center gap-6">
        <Button asChild>
          <Link href='/login'>Sign In</Link>
        </Button>
        <div className="relative">
          <Badge className="absolute bottom-3 left-3  rounded-full w-5 h-5 flex items-center justify-center">4</Badge>
          <ShoppingCart size={20} className="relative" />
        </div>
      </div>
    </header>
  );
};

export default Header;
