'use client';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const router = useRouter();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push('/new-car')}
        variant="outline"
        // className="flex items-center rounded-full bg-white border-solid border-2 border-black px-4 py-2"
      >
        <PlusCircle
          // size={20}

          className="text-black h-4 w-4"
        />
        <span className="ml-2 text-sm font-medium text-black ">
          Sell your car
        </span>
      </Button>
      <Button
        onClick={() => router.push('/sign-in')}
        size="icon"
        // className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <LogIn
          // size={20}
          className="bg-black h-4 w-4"
          color="white"
        />
      </Button>
    </div>
  );
};

export default NavbarActions;
