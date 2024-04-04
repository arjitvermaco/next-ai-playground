"use client";
import AppHeader from "@/components/dashboard/shared/AppHeader";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full">
      <AppHeader />

      <div className="py-10 px-2">
        <main>
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  );
}
