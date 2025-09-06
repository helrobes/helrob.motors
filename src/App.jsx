import { useState } from "react";
import { motion } from "framer-motion";

// ------------------------------------------------------------
// HELROB MOTORS – Minimal, timeless landing page
// Stack: React + TailwindCSS + Framer Motion
// ------------------------------------------------------------

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=1600&auto=format&fit=crop",
    alt: "Mercedes coupé clásico en blanco y negro",
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
    alt: "Detalle de volante y tablero",
  },
  {
    src: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1600&auto=format&fit=crop",
    alt: "Línea lateral – diseño atemporal",
  },
  {
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop",
    alt: "Superficie y reflejos en carrocería",
  },
  {
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop",
    alt: "Detalle delantero deportivo",
  },
  {
    src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1600&auto=format&fit=crop",
    alt: "Interior de cuero minimalista",
  },
];

const INVENTORY = [
  {
    id: 1,
    title: "Mercedes-Benz E350 Coupé (C207)",
    year: 2012,
    km: "128.000 km",
    price: "17.900 €",
    img: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=1600&auto=format&fit=crop",
    tags: ["Mantenimiento al día", "V6", "Historia completa"],
  },
  {
    id: 2,
    title: "BMW 530d Touring",
    year: 2016,
    km: "145.000 km",
    price: "16.500 €",
    img: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1600&auto=format&fit=crop",
    tags: ["Libro de revisiones", "Automático", "Euro 6"],
  },
  {
    id: 3,
    title: "Audi A5 Sportback",
    year: 2018,
    km: "98.000 km",
    price: "23.900 €",
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1600&auto=format&fit=crop",
    tags: ["S-Line", "2 llaves", "Un solo propietario"],
  },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800/60 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="tracking-[0.3em] text-sm font-semibold text-white">HELROB MOTORS</a>
        <button
          className="text-white/80 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <span className="inline-block h-5 w-6 border-t-2 border-white/80" />
        </button>
        <nav className={`md:flex md:items-center md:gap-8 ${open ? "block" : "hidden"} md:block`}>
          <a href="#inventario" className="text-sm text-white/80 hover:text-white">Inventario</a>
          <a href="#por-que" className="text-sm text-white/80 hover:text-white">Por qué HELROB</a>
          <a href="#compra" className="text-sm text-white/80 hover:text-white">Compra tu coche</a>
          <a href="#importacion" className="text-sm text-white/80 hover:text-white">Importación</a>
          <a href="#contacto" className="text-sm text-white/80 hover:text-white">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-black text-white">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.06),transparent_40%)]" />
      </div>
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-4xl font-light tracking-tight md:text-6xl"
        >
          Coches fiables.
          <span className="block font-extralight text-white/70">Diseño eterno.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mb-10 max-w-2xl text-base text-white/70 md:text-lg"
        >
          Compraventa curada con rigor técnico. Seleccionamos unidades con
          historial transparente, mantenimiento documentado y estética que
          resiste al tiempo.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#inventario" className="rounded-2xl border border-white px-5 py-3 text-sm font-medium hover:bg-white hover:text-black">Ver inventario</a>
          <a href="#contacto" className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90">Vender mi coche</a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid w-full grid-cols-2 gap-2 md:grid-cols-6"
        >
          {IMAGES.map((img, i) => (
            <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-neutral-800">
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="border-y border-neutral-800 bg-black py-8 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-6 px-6 md:grid-cols-5">
        {["Historial verificado", "Peritación independiente", "Garantía europea", "Entrega a domicilio", "Importación desde Europa y Dubái"].map((t, i) => (
          <div key={i} className="text-center text-sm text-white/70 md:text-base">{t}</div>
        ))}
      </div>
    </section>
  );
}

function InventoryCard({ car }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={car.img} alt={car.title} className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-white">{car.title}</h3>
          <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">{car.year}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-white/60">
          <span>{car.km}</span>
          <span className="text-white/30">•</span>
          <span className="font-medium text-white">{car.price}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {car.tags.map((tag, i) => (
            <span key={i} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60">{tag}</span>
          ))}
        </div>
        <div className="pt-2">
          <a href="#contacto" className="inline-block rounded-xl border border-white/20 px-4 py-2 text-sm text-white hover:bg-white hover:text-black">Reservar</a>
        </div>
      </div>
    </div>
  );
}

function Inventory() {
  return (
    <section id="inventario" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-light md:text-3xl">Inventario seleccionado</h2>
            <p className="text-sm text-white/60">Unidades escogidas por su fiabilidad y diseño atemporal.</p>
          </div>
          <a href="#contacto" className="hidden rounded-xl border border-white/20 px-4 py-2 text-sm text-white/80 hover:text-white md:inline-block">Solicitar búsqueda a medida</a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {INVENTORY.map((car) => (
            <InventoryCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="por-que" className="border-t border-neutral-800 bg-black py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-light md:text-3xl">Timeless design, zero drama</h2>
          <p className="mb-6 text-white/70">
            En HELROB MOTORS evitamos complicaciones: inspeccionamos cada coche con un checklist
            de más de 120 puntos, verificamos el historial y certificamos el estado mecánico.
            Además, si buscas un coche específico podemos localizarlo e importarlo desde cualquier
            país de Europa o desde Dubái.
          </p>
          <ul className="space-y-3 text-white/70">
            <li>• Informe de estado y lectura OBD.</li>
            <li>• Libro de mantenimiento verificado y kilometraje contrastado.</li>
            <li>• Restauración estética ligera, respetando la originalidad.</li>
            <li>• Entrega con garantía y transferencia incluida.</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {IMAGES.slice(0, 4).map((img, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-neutral-800">
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover grayscale" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Importacion() {
  return (
    <section id="importacion" className="border-t border-neutral-800 bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-6 text-2xl font-light md:text-3xl">Importación internacional</h2>
        <p className="mb-10 max-w-2xl text-white/70">
          ¿Buscas un coche específico que no encuentras en España? En HELROB MOTORS nos encargamos de la búsqueda y <span className="text-white">importación desde cualquier país de Europa o Dubái</span>. Gestionamos todo el proceso: selección de unidades, informes técnicos, transporte, matriculación y entrega lista para circular.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              img: "https://images.unsplash.com/photo-1605559424843-1c7be4b8e8cb?q=80&w=1600&auto=format&fit=crop",
              title: "Porsche 911 Carrera – Importado de Alemania",
            },
            {
              img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1600&auto=format&fit=crop",
              title: "Range Rover Vogue – Importado de Dubái",
            },
            {
              img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1600&auto=format&fit=crop",
              title: "Mercedes GLE 350 – Importado de Bélgica",
            },
          ].map((c, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
              <img src={c.img} alt={c.title} className="h-56 w-full object-cover grayscale" />
              <div className="p-4 text-sm text-white/70">{c.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="compra" className="border-t border-neutral-800 bg-black py-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8 md:p-12">
          <h3 className="mb-3 text-2xl font-light md:text-3xl">¿No ves tu coche ideal?</h3>
          <p className="mb-6 text-white/70">
            Hacemos <span className="text-white">búsqueda a medida</span>: dinos el modelo, presupuesto y uso.
            Te proponemos 3–5 unidades filtradas, con informes y vídeo.
            También gestionamos <span className="text-white">importación desde cualquier país de Europa o Dubái</span>.
          </p>
          <a href="#contacto" className="inline-block rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90">Pedir búsqueda</a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="border-t border-neutral-800 bg-black py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-2xl font-light md:text-3xl">Contacto</h3>
          <p className="mb-6 text-white/70">Cuéntanos qué buscas o si quieres vender tu coche.</p>
          <div className="space-y-2 text-white/80">
            <p><span className="text-white/40">Email:</span> ventas@helrobmotors.com</p>
            <p><span className="text-white/40">Tel:</span> +34 600 000 000</p>
            <p><span className="text-white/40">Dirección:</span> C. Salvador 60, Torrent 46900</p>
            <p><span className="text-white/40">Horario:</span> L–V 9:30–14:00 / 16:00–19:00</p>
            <div className="pt-3 text-white/50 text-sm">Instagram: @helrob.motors</div>
          </div>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input className="rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-white/40" placeholder="Nombre" />
            <input type="email" className="rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-white/40" placeholder="Email" />
          </div>
          <input className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-white/40" placeholder="Teléfono" />
          <textarea rows={5} className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-white/40" placeholder="Qué coche buscas, presupuesto y plazo" />
          <button className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90">Enviar consulta</button>
          <p className="text-xs text-white/40">Al enviar, aceptas nuestra política de privacidad.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="text-xs text-white/50">© {new Date().getFullYear()} HELROB MOTORS. Todos los derechos reservados.</div>
        <div className="flex items-center gap-4 text-xs text-white/50">
          <a href="#" className="hover:text-white">Aviso legal</a>
          <span className="text-white/20">•</span>
          <a href="#" className="hover:text-white">Privacidad</a>
          <span className="text-white/20">•</span>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black font-[ui-sans-serif,system-ui,Helvetica,Arial]">
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Inventory />
        <WhyUs />
        <CTA />
        <Importacion />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
