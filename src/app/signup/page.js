import Footer from "../../components/Footer";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#f7f7fb] text-zinc-900">
      <main className="relative overflow-hidden pb-16 pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-[#ff7a2f]/10 blur-3xl" />
          <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-[#ffe1d2]/70 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#fff4ee] blur-3xl" />
        </div>
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_22px_50px_rgba(15,23,42,0.16)] sm:p-8">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
                Create your CampusMart account
              </h1>
              <p className="text-sm text-zinc-500">
                Join your campus marketplace in minutes.
              </p>
            </div>
            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700" htmlFor="firstName">
                    First name
                  </label>
                  <input
                    id="firstName"
                    className="h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-700 outline-none transition focus:border-[#ff7a2f] focus:ring-2 focus:ring-[#ff7a2f]/30"
                    placeholder="Amina"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700" htmlFor="lastName">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    className="h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-700 outline-none transition focus:border-[#ff7a2f] focus:ring-2 focus:ring-[#ff7a2f]/30"
                    placeholder="Rahman"
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700" htmlFor="signupEmail">
                  University email
                </label>
                <input
                  id="signupEmail"
                  className="h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-700 outline-none transition focus:border-[#ff7a2f] focus:ring-2 focus:ring-[#ff7a2f]/30"
                  placeholder="you@university.edu"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700" htmlFor="campus">
                  Campus
                </label>
                <input
                  id="campus"
                  className="h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-700 outline-none transition focus:border-[#ff7a2f] focus:ring-2 focus:ring-[#ff7a2f]/30"
                  placeholder="North South University"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700" htmlFor="signupPassword">
                  Password
                </label>
                <input
                  id="signupPassword"
                  className="h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-700 outline-none transition focus:border-[#ff7a2f] focus:ring-2 focus:ring-[#ff7a2f]/30"
                  placeholder="Create a strong password"
                  type="password"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700" htmlFor="confirmPassword">
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  className="h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-700 outline-none transition focus:border-[#ff7a2f] focus:ring-2 focus:ring-[#ff7a2f]/30"
                  placeholder="Re-enter password"
                  type="password"
                />
              </div>
              <label className="flex items-start gap-3 text-xs text-zinc-500">
                <input
                  className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-[#ff7a2f] focus:ring-[#ff7a2f]"
                  type="checkbox"
                />
                I agree to the CampusMart terms and student community guidelines.
              </label>
              <button
                className="h-11 w-full rounded-full bg-gradient-to-r from-[#ff8a3d] to-[#ff6a00] text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.2)] transition hover:brightness-110"
                type="submit"
              >
                Create account
              </button>
            </form>
            <p className="mt-6 text-center text-xs text-zinc-500">
              Already have an account?{" "}
              <a className="font-semibold text-[#ff7a2f] hover:text-[#ff6a00]" href="/login">
                Sign in
              </a>
            </p>
          </section>
          <section className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ff7a2f]/30 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff7a2f] shadow-sm">
              Get Started
            </span>
            <h2 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
              Everything you need for your campus marketplace
            </h2>
            <p className="max-w-xl text-sm text-zinc-600 sm:text-base">
              Build your profile, list items faster, and connect with trusted peers across
              your university.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Quick listings",
                  description: "Post items with photos in under a minute.",
                },
                {
                  title: "Verified profiles",
                  description: "University email keeps the community safe.",
                },
                {
                  title: "Smart offers",
                  description: "Negotiate and close deals with confidence.",
                },
                {
                  title: "Campus insights",
                  description: "See trending items on your campus.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_14px_28px_rgba(15,23,42,0.1)]"
                >
                  <h3 className="text-sm font-semibold text-zinc-900">{item.title}</h3>
                  <p className="mt-2 text-xs text-zinc-500">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
