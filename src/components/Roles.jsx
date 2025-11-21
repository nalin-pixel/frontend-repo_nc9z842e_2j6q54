export default function Roles() {
  return (
    <section id="roles" className="relative py-12 sm:py-16 md:py-24 bg-[#FAF8F6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <a href="#" className="group rounded-3xl border border-stone-200 bg-white p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
            <div className="text-xs text-stone-500">Χρήστες</div>
            <h3 className="mt-2 text-2xl font-semibold text-stone-900">Είμαι Φοιτητής</h3>
            <p className="mt-2 text-stone-600">Δημιουργήστε προφίλ, ανακαλύψτε ευκαιρίες και συνδεθείτε με κορυφαίες εταιρείες.</p>
            <div className="mt-6 inline-flex items-center gap-2 text-stone-900 font-medium">
              Ξεκινήστε δωρεάν <span aria-hidden>→</span>
            </div>
          </a>
          <a href="#" className="group rounded-3xl border border-stone-200 bg-white p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
            <div className="text-xs text-stone-500">Χρήστες</div>
            <h3 className="mt-2 text-2xl font-semibold text-stone-900">Είμαι Εργοδότης</h3>
            <p className="mt-2 text-stone-600">Δημοσιεύστε θέσεις πρακτικής και προσελκύστε ταλέντα με τις δεξιότητες που χρειάζεστε.</p>
            <div className="mt-6 inline-flex items-center gap-2 text-stone-900 font-medium">
              Δημιουργία αγγελίας <span aria-hidden>→</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
