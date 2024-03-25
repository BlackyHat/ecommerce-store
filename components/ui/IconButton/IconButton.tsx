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
      'flex items-center justify-center rounded-full border bg-white p-2 shadow-md transition hover:scale-110',
      className,
    )}
  >
    {icon}
  </button>
)
