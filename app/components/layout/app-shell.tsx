import React from "react";
import  Sidebar  from "./sidebar";
import  Navbar  from "./navbar";

export default function AppShell({children, }: {children: React.ReactNode;}){

  return (
<section className="grid h-dvh grid-cols-[minmax(250px,20%)] grid-rows-[minmax(10dvh,auto)_minmax(0,1fr)] overflow-hidden">
  <aside className="col-start-1 row-start-1 row-span-2 min-h-0 overflow-y-auto">
    <Sidebar />
  </aside>

  <header className="col-start-2 row-start-1 col-span-3 min-w-0">
    <Navbar />
  </header>

  <main className="col-start-2 col-span-3 row-start-2 min-h-0 overflow-y-auto p-6">
    {children}
  </main>
</section>

  );
}