<<<<<<< HEAD
import { Loader2Icon } from 'lucide-react'
=======
import { Loader as Loader2Icon } from 'lucide-react'
>>>>>>> 1337abdd1407078c225f6278b612a686a0f63a9c

import { cn } from '@/lib/utils'

function Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      {...props}
    />
  )
}

export { Spinner }
