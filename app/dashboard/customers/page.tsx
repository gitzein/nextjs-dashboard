import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";
import { Suspense } from "react";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import Search from "@/app/ui/search";
import { lusitana } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>

      <Search placeholder="Search customers..." />
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <CustomersTable query={query} />
      </Suspense>
    </div>
  );
}
