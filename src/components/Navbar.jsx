import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Αρχική', href: '#' },
    { label: 'Σχετικά με εμάς', href: '#about' },
    { label: 'Επικοινωνία', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-stone-200/60 bg-white/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-stone-200 to-stone-100 shadow-inner border border-white"></div>
              <span className="text-stone-900 font-semibold tracking-tight">GrowGrad</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-stone-700 hover:text-stone-900 transition-colors text-sm">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#roles" className="px-4 py-2 text-sm rounded-full border border-stone-300 text-stone-800 hover:border-stone-400 transition-colors">Είμαι Φοιτητής</a>
              <a href="#roles" className="px-4 py-2 text-sm rounded-full bg-stone-900 text-white hover:bg-stone-800 transition-colors">Είμαι Εργοδότης</a>
            </div>

            <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-stone-300 bg-white/70">
              <Menu className="h-5 w-5 text-stone-700" />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-stone-200">
              <div className="px-4 py-3 space-y-3">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="block text-stone-700">
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-3 pt-2">
                  <a href="#roles" className="flex-1 px-4 py-2 text-sm rounded-xl border border-stone-300 text-stone-800">Είμαι Φοιτητής</a>
                  <a href="#roles" className="flex-1 px-4 py-2 text-sm rounded-xl bg-stone-900 text-white">Είμαι Εργοδότης</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
