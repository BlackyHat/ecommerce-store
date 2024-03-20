import { cn } from '@/utils'

import { IconButtonProps } from './types'

export const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
}) => (
  <button
    onClick={onClick}
    className={cn(
      'rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition',
      className
    )}
  >
    {icon}
  </button>
)
