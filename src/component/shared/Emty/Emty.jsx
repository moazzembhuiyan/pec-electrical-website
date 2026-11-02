import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';
import { EqualApproximately } from 'lucide-react';
export function EmptyOutline({ title }) {
  return (
    <Empty className="border border-dashed !p-20">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <EqualApproximately />
        </EmptyMedia>
        <EmptyTitle>{title} Empty</EmptyTitle>
        <EmptyDescription>You don&apos;t have any {title} yet.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
