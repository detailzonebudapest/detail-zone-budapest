import React from "react";
import { motion } from "framer-motion";
import {
  Car,
  Sparkles,
  Shield,
  Star,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Clock,
  Droplets,
  Gem,
  ArrowRight,
  Instagram,
} from "lucide-react";

export default function DetailZoneBudapest() {
  const services = [
    {
      icon: <Droplets className="w-7 h-7" />,
      title: "Külső prémium tisztítás",
      text: "Kíméletes kézi előmosás, samponos mosás, felnik és külső felületek alapos tisztítása prémium termékekkel.",
    },
    {
      icon: <Car className="w-7 h-7" />,
      title: "Beltéri mélytisztítás",
      text: "Kárpit, bőr, műanyag elemek, szőnyegek és nehezen elérhető részek részletorientált tisztítása.",
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Polírozás",
      text: "Fényezésfrissítés és karcfinomítás több lépcsőben, hogy az autó visszanyerje mély fényét és prémium megjelenését.",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Kerámia védelem",
      text: "Tartós védelem a fényezésnek, látványos vízlepergetéssel, könnyebb tisztíthatósággal és exkluzív fényhatással.",
    },
  ];

  const packages = [
    {
      name: "Essential Detail",
      description: "Gyors, látványos felfrissítés kívül-belül.",
      items: ["Külső kézi mosás", "Felni tisztítás", "Belső porszívózás", "Műanyag felületek áttörlése"],
    },
    {
      name: "Premium Detail",
      description: "Alaposabb tisztítás igényes autótulajdonosoknak.",
      items: ["Külső-belső mélytisztítás", "Kárpit vagy bőr ápolás", "Fényezésfrissítés", "Prémium wax/védelem"],
      featured: true,
    },
    {
      name: "Signature Detail",
      description: "High-end kezelés maximális odafigyeléssel.",
      items: ["Több lépcsős polírozás", "Kerámia bevonat előkészítés", "Beltér részletes tisztítás", "Egyedi állapotfelmérés"],
    },
  ];

  const process = [
    "Kapcsolatfelvétel és igények egyeztetése",
    "Autó állapotának felmérése",
    "Személyre szabott ajánlat",
    "Precíz kivitelezés és átadás",
  ];

  const benefits = [
    "Részletorientált, prémium szemlélet",
    "Minőségi autóápolási termékek",
    "Személyre szabott szolgáltatás",
    "Igényes, modern brandélmény",
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white scroll-smooth">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%),linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,1))]" />
        <div className="relative max-w-7xl mx-auto px-6 py-8">
          <nav className="flex items-center justify-between gap-6">
            <a href="#top" className="text-lg md:text-2xl font-black tracking-[0.22em] uppercase">
              Detail Zone
            </a>
            <div className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
              <a href="#services" className="hover:text-white transition">Szolgáltatások</a>
              <a href="#packages" className="hover:text-white transition">Csomagok</a>
              <a href="#contact" className="hover:text-white transition">Kapcsolat</a>
            </div>
            <a href="#contact" className="inline-flex px-5 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition">
              Időpontfoglalás
            </a>
          </nav>

          <div id="top" className="grid lg:grid-cols-2 gap-12 items-center py-24 md:py-32">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-sm text-neutral-200 mb-6">
                <Star className="w-4 h-4" /> High-end detailing studio Budapest
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
                Detail Zone <span className="text-neutral-400">Budapest</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-neutral-300 leading-relaxed max-w-xl">
                Prémium autókozmetikai stúdió Budapesten azoknak, akik nem érik be az átlagossal. Külső-belső autóápolás, polírozás és védelem kompromisszumok nélkül.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="group px-7 py-4 rounded-full bg-white text-black font-bold text-center hover:bg-neutral-200 transition inline-flex items-center justify-center gap-2">
                  Kérek ajánlatot <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </a>
                <a href="#services" className="px-7 py-4 rounded-full border border-white/20 text-white font-bold text-center hover:bg-white/10 transition">
                  Szolgáltatások megtekintése
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
              <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-neutral-800 via-neutral-950 to-black border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(255,255,255,0.12),transparent)]" />
                <div className="relative text-center px-8">
                  <Gem className="w-24 h-24 mx-auto text-white/80 mb-6" />
                  <p className="text-3xl font-black tracking-wide">Luxury Finish</p>
                  <p className="text-neutral-400 mt-2">Exterior • Interior • Protection</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-4 md:-left-6 bg-white text-black rounded-3xl p-6 shadow-xl max-w-xs">
                <p className="text-3xl font-black">100%</p>
                <p className="text-sm font-semibold text-neutral-700">odafigyelés minden részletre</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-12">
          <p className="uppercase tracking-[0.3em] text-neutral-500 text-sm font-bold">Szolgáltatások</p>
          <h2 className="text-4xl md:text-5xl font-black mt-3">Prémium autóápolás, részletekre szabva.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="p-7 rounded-[2rem] bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] transition">
              <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white text-black py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-neutral-500 text-sm font-bold">Rólunk</p>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6">Nem autómosó. Detailing élmény.</h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              A Detail Zone Budapest egy prémium autókozmetikai stúdió, ahol a részletek valóban számítanak. Célunk, hogy minden járműből kihozzuk a maximális esztétikai megjelenést professzionális munkával, minőségi anyagokkal és kompromisszummentes precizitással.
            </p>
          </div>
          <div className="grid gap-4">
            {benefits.map((item) => (
              <div key={item} className="flex items-center gap-4 p-5 rounded-2xl bg-neutral-100">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-12">
          <p className="uppercase tracking-[0.3em] text-neutral-500 text-sm font-bold">Csomagok</p>
          <h2 className="text-4xl md:text-5xl font-black mt-3">Válassz kiindulási csomagot.</h2>
          <p className="text-neutral-400 mt-4 text-lg">Az árak és pontos tartalom az autó állapotától, méretétől és az igényelt szolgáltatásoktól függően személyre szabottan kerülnek meghatározásra.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {packages.map((pack) => (
            <div key={pack.name} className={`rounded-[2rem] p-8 border ${pack.featured ? "bg-white text-black border-white" : "bg-white/[0.04] border-white/10"}`}>
              {pack.featured && <div className="inline-flex mb-5 px-4 py-2 rounded-full bg-black text-white text-sm font-bold">Ajánlott</div>}
              <h3 className="text-2xl font-black">{pack.name}</h3>
              <p className={pack.featured ? "text-neutral-700 mt-3" : "text-neutral-400 mt-3"}>{pack.description}</p>
              <div className="mt-7 space-y-4">
                {pack.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className={`mt-8 inline-flex w-full justify-center rounded-full px-6 py-4 font-bold transition ${pack.featured ? "bg-black text-white hover:bg-neutral-800" : "bg-white text-black hover:bg-neutral-200"}`}>
                Ajánlatot kérek
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-[2rem] bg-white/[0.04] border border-white/10 p-8 md:p-12">
          <div className="max-w-2xl mb-10">
            <p className="uppercase tracking-[0.3em] text-neutral-500 text-sm font-bold">Folyamat</p>
            <h2 className="text-4xl md:text-5xl font-black mt-3">Így dolgozunk.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {process.map((step, index) => (
              <div key={step} className="p-6 rounded-3xl bg-black/30 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-black mb-5">{index + 1}</div>
                <p className="font-semibold leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-[2rem] bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10 p-8 md:p-14 grid lg:grid-cols-2 gap-10">
          <div>
            <p className="uppercase tracking-[0.3em] text-neutral-500 text-sm font-bold">Kapcsolat</p>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5">Kérj ajánlatot autódra.</h2>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Írj nekünk, és segítünk kiválasztani az autód állapotához és igényeidhez legjobban illő detailing csomagot.
            </p>
            <div className="mt-8 flex items-center gap-3 text-neutral-300">
              <Clock className="w-5 h-5" />
              <span>Időpont egyeztetés alapján</span>
            </div>
          </div>
          <div className="space-y-4">
            <a href="tel:+36300000000" className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <Phone className="w-6 h-6" />
              <span>+36 30 000 0000</span>
            </a>
            <a href="mailto:detailzonebudapest@gmail.com" className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <Mail className="w-6 h-6" />
              <span>detailzonebudapest@gmail.com</span>
            </a>
            <a href="https://instagram.com/detailzonebudapest" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <Instagram className="w-6 h-6" />
              <span>@detailzonebudapest</span>
            </a>
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
              <MapPin className="w-6 h-6" />
              <span>Budapest</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-neutral-500 text-sm">
          <p>© 2026 Detail Zone Budapest. Minden jog fenntartva.</p>
          <p>Prémium autókozmetika Budapesten.</p>
        </div>
      </footer>
    </div>
  );
}
