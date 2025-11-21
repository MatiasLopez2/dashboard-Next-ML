import { Suspense } from 'react';
import { InvoiceSkeleton } from '@/app/ui/skeletons';
import CustomersTable from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import { fetchFilteredCustomers2 } from '@/app/lib/data';

async function Page( ) {
  const customers = await fetchFilteredCustomers2();

  return (
    <div className="w-full">
      <Suspense fallback={<InvoiceSkeleton />}>
        <CustomersTable customers={customers} />
      </Suspense>
    </div>
  );
}
export default Page;