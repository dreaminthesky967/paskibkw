import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import slide1 from "@/assets/paskib-slide-1.jpg";
import slide2 from "@/assets/paskib-slide-2.jpg";
import slide3 from "@/assets/paskib-slide-3.jpg";
import slide4 from "@/assets/paskib-slide-4.jpg";
import slide5 from "@/assets/paskib-slide-5.jpg";
import slide6 from "@/assets/paskib-slide-6.jpg";
import slide7 from "@/assets/paskib-slide-7.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paskib KW — Satu Langkah, Satu Cerita" },
      { name: "description", content: "Cerita, semangat, dan kenangan barisan Paskib KW dalam satu ruang digital." },
      { property: "og:title", content: "Paskib KW — Satu Langkah, Satu Cerita" },
      { property: "og:description", content: "Cerita, semangat, dan kenangan barisan Paskib KW dalam satu ruang digital." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const slides = [
  { image: slide1, label: "Satu langkah", title: "Bukan sekadar barisan." },
  { image: slide2, label: "Satu keluarga", title: "Tumbuh lewat tawa." },
  { image: slide3, label: "Satu irama", title: "Bergerak tanpa ragu." },
  { image: slide4, label: "Satu amanah", title: "Merah putih di hati." },
  { image: slide5, label: "Satu tujuan", title: "Berdiri dengan bangga." },
  { image: slide6, label: "Satu jejak", title: "Disiplin dalam langkah." },
  { image: slide7, label: "Satu cerita", title: "Kita, sampai nanti." },
];

const quotes = [
  { name: "Nadia", role: "Pemimpin Pasukan", initials: "NA", quote: "Lelahnya latihan akan hilang. Bangganya akan tinggal lebih lama dari yang kita kira." },
  { name: "Raka", role: "Pengibar Bendera", initials: "RA", quote: "Kalau langkah kita sama, jalan sesulit apa pun terasa mungkin untuk dilewati." },
  { name: "Salsa", role: "Pembawa Baki", initials: "SA", quote: "Jangan takut salah langkah. Dari sanalah kita belajar berdiri lebih tegak." },
  { name: "Dimas", role: "Komandan Pleton", initials: "DI", quote: "Disiplin bukan hukuman. Ia adalah cara kita menghargai mimpi dan teman seperjuangan." },
  { name: "Alya", role: "Anggota Pasukan", initials: "AL", quote: "Kita datang sebagai orang asing, lalu pulang membawa keluarga baru." },
  { name: "Bagas", role: "Pelatih", initials: "BA", quote: "Hebat bukan tentang siapa paling depan, tetapi siapa yang tetap menjaga barisan." },
];

function Index() {
  const [slide, setSlide] = useState(0);
  const [openQuote, setOpenQuote] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSlide = slides[slide] ?? slides[0];

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((value) => (value + 1) % slides.length), 5500);
    return () => window.clearInterval(timer);
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 text-hero-foreground sm:px-10">
        <button className="brand-mark" onClick={() => goTo("beranda")} aria-label="Kembali ke beranda">PK<span>•</span>W</button>
        <nav className="hidden items-center gap-9 rounded-full border border-hero-foreground/20 bg-hero/20 px-7 py-3 text-sm font-medium backdrop-blur-xl md:flex" aria-label="Navigasi utama">
          <button onClick={() => goTo("beranda")}>Beranda</button>
          <button onClick={() => goTo("cerita")}>Cerita</button>
          <button onClick={() => goTo("suara")}>Suara Kita</button>
          <button onClick={() => goTo("galeri")}>Galeri</button>
        </nav>
        <button className="grid size-11 place-items-center rounded-full border border-hero-foreground/25 bg-hero/20 backdrop-blur-xl md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Buka menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        {menuOpen && <nav className="absolute left-5 right-5 top-20 grid gap-1 rounded-2xl bg-foreground p-3 text-background shadow-2xl md:hidden">
          {([['beranda','Beranda'],['cerita','Cerita'],['suara','Suara Kita'],['galeri','Galeri']] as const).map(([id,label]) => <button key={id} onClick={() => goTo(id)} className="rounded-xl px-4 py-3 text-left">{label}</button>)}
        </nav>}
      </header>

      <section id="beranda" className="relative h-[92svh] min-h-[620px] bg-hero text-hero-foreground">
        {slides.map((item, index) => (
          <img key={item.image} src={item.image} alt={item.title} width={1400} height={900} loading={index === 0 ? "eager" : "lazy"} className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ${slide === index ? "opacity-100" : "opacity-0"}`} />
        ))}
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-end px-5 pb-16 sm:px-10 sm:pb-20 lg:px-16">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-hero-foreground/75">Paskib KW • Angkatan 2026</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.94] sm:text-7xl lg:text-[7.6rem]">{activeSlide?.title}</h1>
          <div className="mt-9 flex items-end justify-between gap-6">
            <p className="max-w-md text-base leading-relaxed text-hero-foreground/75 sm:text-lg">Tujuh potret. Ribuan cerita. Tentang langkah yang dipaksa kompak, lalu hati yang ikut menjadi dekat.</p>
            <button onClick={() => goTo("cerita")} className="hidden size-14 place-items-center rounded-full border border-hero-foreground/40 transition-transform hover:translate-y-1 sm:grid" aria-label="Lihat cerita"><ArrowDown /></button>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <button onClick={() => setSlide((slide + 6) % 7)} className="hero-control" aria-label="Foto sebelumnya"><ChevronLeft size={20} /></button>
            <div className="flex flex-1 items-center gap-2">{slides.map((_, index) => <button key={index} onClick={() => setSlide(index)} className={`h-1 rounded-full transition-all ${slide === index ? "w-12 bg-hero-foreground" : "w-5 bg-hero-foreground/35"}`} aria-label={`Foto ${index + 1}`} />)}</div>
            <button onClick={() => setSlide((slide + 1) % 7)} className="hero-control" aria-label="Foto selanjutnya"><ChevronRight size={20} /></button>
          </div>
        </div>
      </section>

      <section id="cerita" className="relative min-h-[820px] bg-chat px-5 py-28 text-chat-foreground sm:px-10 lg:py-36">
        <div className="mx-auto max-w-6xl text-center">
          <p className="section-kicker">Yang selalu kami bilang</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">Kalimat kecil yang hidup di tengah barisan.</h2>
          <div className="relative mx-auto mt-20 h-[460px] max-w-5xl sm:h-[500px]">
            {["Siap, gerak!", "Jangan kendor.", "Ulang dari awal!", "Satu komando.", "Panas? Biasa.", "Kita bisa!", "Kiri... kiri...", "Fokus, kawan."].map((text, index) => (
              <div key={text} className={`chat-bubble bubble-${index + 1}`}>{text}</div>
            ))}
            <div className="absolute left-1/2 top-1/2 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-chat-accent text-center text-sm font-bold uppercase tracking-widest text-chat-accent-foreground shadow-xl sm:size-36">Paskib<br/>KW</div>
          </div>
        </div>
      </section>

      <section id="suara" className="bg-quote px-5 py-28 text-quote-foreground sm:px-10 lg:py-36">
        <div className="mx-auto max-w-6xl">
          <p className="section-kicker text-quote-muted">Suara dari barisan</p>
          <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">Kata-kata yang kami bawa pulang.</h2>
            <p className="max-w-xs text-sm leading-relaxed text-quote-muted">Ketuk satu nama untuk membuka pesannya.</p>
          </div>
          <div className="quote-shelf" role="tablist" aria-label="Kutipan dari barisan">
            {quotes.map((item, index) => {
              const active = openQuote === index;
              return <button key={item.name} onClick={() => setOpenQuote(index)} className={`quote-book ${active ? "quote-book-active" : ""}`} role="tab" aria-selected={active} aria-label={`${item.name}, ${item.role}`}>
                <span className="quote-spine">
                  <span className="quote-avatar">{item.initials}</span>
                  <span className="quote-spine-name">{item.name}</span>
                  <span className="quote-spine-role">{item.role}</span>
                </span>
                <span className="quote-cover">
                  <span className="quote-cover-header">
                    <span className="quote-avatar">{item.initials}</span>
                    <span className="text-left"><strong className="block text-lg">{item.name}</strong><small className="text-quote-muted">{item.role}</small></span>
                  </span>
                  <span className="quote-cover-quote">“{item.quote}”</span>
                </span>
              </button>;
            })}
          </div>
        </div>
      </section>

      <section id="galeri" className="bg-background px-5 py-28 sm:px-10 lg:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-5"><div><p className="section-kicker">Potongan waktu</p><h2 className="mt-5 text-4xl font-semibold sm:text-6xl">Galeri singkat.</h2></div><span className="hidden text-sm text-muted-foreground sm:block">Geser untuk melihat lebih banyak →</span></div>
          <div className="gallery-strip mt-14">
            {[slide2, slide6, slide3, slide4, slide5, slide7].map((image, index) => <figure key={image} className={`gallery-item gallery-item-${index + 1}`}><img src={image} alt={`Momen Paskib KW ${index + 1}`} width={1400} height={900} loading="lazy" /><figcaption>0{index + 1} / MOMEN</figcaption></figure>)}
          </div>
        </div>
      </section>

      <footer className="bg-foreground px-5 py-16 text-background sm:px-10"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 sm:flex-row sm:items-end"><div><div className="brand-mark text-3xl">PK<span>•</span>W</div><p className="mt-3 text-sm text-background/60">Satu langkah. Satu irama. Satu cerita.</p></div><p className="text-xs uppercase tracking-[0.22em] text-background/45">Dibuat untuk dikenang • 2026</p></div></footer>
    </main>
  );
}