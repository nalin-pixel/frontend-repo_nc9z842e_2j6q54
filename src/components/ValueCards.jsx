import { Sparkles, MessageSquare, Timer, ShieldCheck } from 'lucide-react'

const values = [
  {
    title: 'Έξυπνο Σύστημα Αντιστοίχισης',
    desc: 'Αλγόριθμοι που ταιριάζουν τους κατάλληλους φοιτητές με τις σωστές θέσεις πρακτικής.',
    icon: Sparkles,
  },
  {
    title: 'Άμεση Επικοινωνία',
    desc: 'Ενσωματωμένα εργαλεία συνομιλίας για γρήγορη συνεννόηση μεταξύ φοιτητών και εργοδοτών.',
    icon: MessageSquare,
  },
  {
    title: 'Γρήγορη Διαδικασία',
    desc: 'Απλοποιημένα βήματα αίτησης και αξιολόγησης για άμεση πρόσληψη.',
    icon: Timer,
  },
  {
    title: 'Ασφάλεια & Εμπιστοσύνη',
    desc: 'Προστασία δεδομένων και επαληθευμένα προφίλ για ασφαλείς συνεργασίες.',
    icon: ShieldCheck,
  },
]

export default function ValueCards() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#F5F3F0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 md:mb-16 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight">Γιατί GrowGrad</h2>
          <a href="#" className="hidden sm:inline-flex text-sm text-stone-700 hover:text-stone-900">Περισσότερα</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {values.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-3xl border border-stone-200 bg-white p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-0.5">
              <div className="h-11 w-11 rounded-2xl bg-stone-900 text-white inline-flex items-center justify-center shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-stone-900 font-medium text-lg">{title}</h3>
              <p className="mt-2 text-stone-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
