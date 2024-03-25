import * as React from 'react'
import { XCircle } from 'lucide-react'

import { Button } from '@/components/ui'

import { cn } from '@/utils'

import { InputProps } from './types'

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, onRemove, type, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pr-6 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
        {onRemove && props.value && (
          <Button
            className="absolute right-0 top-1/2 -translate-y-1/2"
            variant="ghost"
            size="icon"
            onClick={onRemove}
          >
            <XCircle className="size-4 stroke-red-600" />
          </Button>
        )}
      </div>
    )
  },
)
Input.displayName = 'Input'
