import { Skeleton } from '@/components/ui/skeleton';
import { Shell } from './formats';

export default function Loading() {
  return (
    <Shell>
      <div className='grid items-start gap-1'>
        <Skeleton className='h-9 w-[200px]'/>
        <Skeleton className='h-6 w-[300px]'/>
      </div>
      <Skeleton className='w-full h-[200px]'/>
      <Skeleton className='w-full h-[250px]'/>
    </Shell>
  )
}