import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonCarCard() {
  return (
    <div className="flex flex-col !space-y-3">
      <Skeleton className="h-60 w-full rounded-xl" />
      <div className="!space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="flex flex-row gap-x-5">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}
