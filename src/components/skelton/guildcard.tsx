import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Skeleton } from '@nextui-org/skeleton';

export function GuildCardSkeleton() {
  return (
    <Card>
      <CardHeader className='p-2 pb-0'>
        <Skeleton className='w-64 h-36 rounded-lg' />
      </CardHeader>
      <CardBody className='p-2 py-3'>
        <Skeleton className='w-1/2 h-10 mx-auto rounded-lg' />
      </CardBody>
    </Card>
  );
}