import { cn } from '@/utils'
import { HeadingProps } from './types'

export const Heading: React.FC<HeadingProps> = ({
  title,
  description,
  className,
  descClassName,
}) => {
  return (
    <div>
      <h2
        className={cn(
          'text-xl sm:text-3xl font-bold tracking-tight',
          className
        )}
      >
        {title}
      </h2>

      <p
        className={cn(
          'text-xs sm:text-small text-muted-foreground',
          descClassName
        )}
      >
        {description}
      </p>
    </div>
  )
}
