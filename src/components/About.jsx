export default function About() {
  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-24 bg-[#F5F3F0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
              <img src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHVkZW50cyUyMGNvbGxhYm9yYXRpbmd8ZW58MHwwfHx8MTc2MzcyNDU1Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Students collaborating" className="w-full h-[320px] sm:h-[420px] object-cover" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900 tracking-tight">Σχετικά με το GrowGrad</h2>
            <p className="mt-4 text-stone-700 leading-relaxed">
              Η αποστολή μας είναι να γεφυρώσουμε το χάσμα μεταξύ ακαδημαϊκής γνώσης και επαγγελματικής εμπειρίας. Προσφέρουμε ένα φιλικό και αποτελεσματικό οικοσύστημα για φοιτητές και εργοδότες.
            </p>
            <ul className="mt-6 space-y-3 text-stone-700">
              <li className="flex gap-3"><span className="text-stone-900">•</span> Επικεντρωνόμαστε στην ποιότητα και τη διαφάνεια.</li>
              <li className="flex gap-3"><span className="text-stone-900">•</span> Παρέχουμε εργαλεία που εξοικονομούν χρόνο και ενέργεια.</li>
              <li className="flex gap-3"><span className="text-stone-900">•</span> Προάγουμε ουσιαστικές συνεργασίες.</li>
            </ul>
            <div className="mt-8">
              <a href="#contact" className="px-5 py-3 rounded-full border border-stone-300 text-stone-900 hover:border-stone-400">Επικοινωνήστε μαζί μας</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
