import { Suspense } from 'react';
import { InvoiceSkeleton } from '@/app/ui/skeletons';
import CustomersTable from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import { fetchFilteredCustomers } from '@/app/lib/data';
 
export default async function Page({ searchParams }: { searchParams?: { query?: string } }) {
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <Suspense fallback={<InvoiceSkeleton />}>
        <CustomersTable customers={customers} />
      </Suspense>
    </div>
  );
}
