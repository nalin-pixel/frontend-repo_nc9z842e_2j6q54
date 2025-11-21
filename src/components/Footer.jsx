export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-stone-200 bg-[#FAF8F6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="text-stone-900 font-semibold">GrowGrad</div>
            <p className="mt-3 text-stone-600 text-sm">Πλατφόρμα που ενώνει φοιτητές και εργοδότες με έμφαση στην ποιότητα και την εμπειρία.</p>
          </div>
          <div>
            <div className="text-stone-900 font-medium">Πλοήγηση</div>
            <ul className="mt-3 space-y-2 text-sm text-stone-600">
              <li><a href="#" className="hover:text-stone-900">Αρχική</a></li>
              <li><a href="#about" className="hover:text-stone-900">Σχετικά με εμάς</a></li>
              <li><a href="#contact" className="hover:text-stone-900">Επικοινωνία</a></li>
            </ul>
          </div>
          <div>
            <div className="text-stone-900 font-medium">Νομικά</div>
            <ul className="mt-3 space-y-2 text-sm text-stone-600">
              <li><a href="#" className="hover:text-stone-900">Όροι χρήσης</a></li>
              <li><a href="#" className="hover:text-stone-900">Πολιτική απορρήτου</a></li>
            </ul>
          </div>
          <div>
            <div className="text-stone-900 font-medium">Επικοινωνία</div>
            <p className="mt-3 text-stone-600 text-sm">info@growgrad.com</p>
            <div className="mt-4">
              <a href="#" className="px-4 py-2 rounded-full bg-stone-900 text-white text-sm">Εγγραφείτε</a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-stone-200 text-xs text-stone-500">© {new Date().getFullYear()} GrowGrad. All rights reserved.</div>
      </div>
    </footer>
  )
}
