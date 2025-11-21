import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-12 sm:pb-16 md:pb-24 bg-[#FAF8F6]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_20%_10%,rgba(0,0,0,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_90%_20%,rgba(0,0,0,0.04),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-white/80 px-3 py-1 text-xs text-stone-600 shadow-sm">
              Premium πλατφόρμα πρακτικής άσκησης
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-stone-900 tracking-tight">
              Συνδέουμε Φοιτητές και Εργοδότες με Έξυπνο Τρόπο
            </h1>
            <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
              Το GrowGrad προσφέρει στοχευμένη αντιστοίχιση, άμεση επικοινωνία και ομαλή διαδικασία πρόσληψης — σε ένα καθαρό, σύγχρονο περιβάλλον.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#roles" className="px-5 py-3 rounded-full bg-stone-900 text-white text-sm shadow-sm hover:bg-stone-800 transition-colors">Ξεκινήστε τώρα</a>
              <a href="#about" className="px-5 py-3 rounded-full border border-stone-300 text-stone-800 text-sm hover:border-stone-400 transition-colors">Μάθετε περισσότερα</a>
            </div>
            <div className="mt-6 text-xs text-stone-500">Εμπνευσμένο από μινιμαλιστική, υψηλής αισθητικής σχεδίαση</div>
          </div>

          <div className="lg:col-span-7 relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden border border-stone-200/70 bg-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#FAF8F6] via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </div>
    </section>
  )
}
