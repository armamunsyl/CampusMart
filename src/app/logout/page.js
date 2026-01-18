"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "../../components/Footer";
import { logout } from "../../utils/auth";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    const runLogout = async () => {
      try {
        await logout();
      } catch (error) {
        // Ignore logout failures for mock flow.
      } finally {
        router.replace("/login");
      }
    };

    runLogout();
  }, [router]);

  return (
    <div className="min-h-screen bg-[#f7f7fb]">
      <main className="mx-auto flex w-full max-w-4xl flex-1 items-center justify-center px-6 pb-16 pt-24">
        <div className="rounded-2xl border border-zinc-200 bg-white px-6 py-4 text-sm font-semibold text-zinc-600 shadow-sm">
          Signing you out...
        </div>
      </main>
      <Footer />
    </div>
  );
}
