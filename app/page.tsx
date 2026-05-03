"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sender...");

    const { error } = await supabase
      .from("sverresgata_leads")
      .insert([{ name, email }]);

    if (error) {
      console.error(error);
      setStatus("Noe gikk galt. Prøv igjen.");
      return;
    }

    setName("");
    setEmail("");
    setStatus("Takk! Vi tar kontakt snart.");
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 shadow-sm backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <img
            src="/images/logo.png"
            alt="Sverresgate Kontorfellesskap"
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? "h-16" : "h-20 invert"
            }`}
          />

          <a
            href="/kontakt"
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              scrolled
                ? "bg-stone-900 text-white"
                : "border border-white/60 text-white"
            }`}
          >
            Kontakt
          </a>
        </div>
      </header>

      <section className="relative h-[80vh] w-full pt-24">
        <img
          src="/images/bygg.jpg"
          alt="Sverresgate kontorfellesskap"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        <div className="relative z-10 flex h-full items-center px-6">
          <div className="mx-auto max-w-5xl text-white">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/80">
              Kontor i Namsos sentrum
            </p>

            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Sverresgate Kontorfellesskap
            </h1>

            <p className="mt-6 max-w-2xl text-xl text-white/90 md:text-2xl">
              Et enkelt og profesjonelt sted å jobbe – klart til bruk.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
  <a
    href="#kontakt"
    className="rounded-full bg-white text-black px-7 py-3 font-medium text-center"
  >
    Ta kontakt
  </a>

  <a
  href="#pris"
  className="rounded-full border border-white px-7 py-3 font-medium text-center hover:bg-white hover:text-black transition backdrop-blur"
>
  Se priser
</a>
</div>
          </div>
        </div>
      </section>

      <section id="hva-du-far" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
            Hva du får
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Eget kontor",
                text: "Fast og privat kontorplass – klart til bruk fra dag én.",
              },
              {
                title: "Møterom",
                text: "Tilgang til møterom når du trenger det.",
              },
              {
                title: "Alt inkludert",
                text: "Internett, strøm og renhold av fellesarealer.",
              },
              {
                title: "Felles kjøkken",
                text: "Pauseområde med kjøkken og sitteplasser.",
              },
              {
                title: "Sentralt i Namsos",
                text: "Kort vei til butikker, kaféer og alt sentrum har å tilby.",
              },
              {
                title: "Rolig arbeidsmiljø",
                text: "Lite og oversiktlig kontorfellesskap.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-stone-200 p-6 transition hover:shadow-sm"
              >
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lokaler" className="bg-stone-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-stone-500">
            Lokaler
          </p>

          <h2 className="mb-10 text-3xl font-semibold md:text-4xl">
            Hva du kan forvente
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { src: "/images/kontor.jpg", alt: "Kontorplass" },
              { src: "/images/moterom.jpg", alt: "Møterom" },
              { src: "/images/fellesareal.jpg", alt: "Fellesareal" },
              { src: "/images/kjokken.jpg", alt: "Kjøkken" },
              { src: "/images/hero.jpg", alt: "Arbeidsområde" },
              { src: "/images/bygg.jpg", alt: "Bygg" },
            ].map((image) => (
              <div
                key={image.src}
                className="h-72 overflow-hidden rounded-2xl bg-stone-200"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-stone-400">
            Introtilbud
          </p>

          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Prøv kontoret før du bestemmer deg
          </h2>

          <p className="max-w-2xl text-lg text-stone-300">
            Vi tilbyr gratis prøveuke, og rabatt de første månedene.
          </p>
        </div>
      </section>

      <section id="pris" className="px-6 py-20 scroll-mt-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-stone-500">
            Pris og fleksibilitet
          </p>

          <h2 className="mb-10 text-3xl font-semibold md:text-4xl">
            Velg avtalen som passer deg
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-semibold">Standard</h3>
              <p className="mb-6 text-stone-600">
                Lavere pris med bindingstid
              </p>
              <p className="text-3xl font-semibold">Fra 2 900 kr / mnd</p>
              <p className="mt-4 text-stone-600">
                Inkluderer kontor, internett, strøm, møterom og renhold av
                fellesarealer.
              </p>
            </div>

            <div className="rounded-3xl bg-stone-900 p-8 text-white shadow-sm">
              <h3 className="mb-3 text-2xl font-semibold">Fleksibelt</h3>
              <p className="mb-6 text-stone-300">
                Kortere binding og mer fleksibilitet
              </p>
              <p className="text-3xl font-semibold">Pris etter avtale</p>
              <p className="mt-4 text-stone-300">
                Samme innhold, men med kortere binding og mer fleksibel avtale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="lokasjon" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
            Lokasjon
          </p>

          <p className="mb-10 max-w-2xl text-lg text-stone-700">
            Sverresgate ligger sentralt med kort vei til butikker, kaféer og
            parkering.
          </p>

          <div className="overflow-hidden rounded-3xl border border-stone-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1719.679520933437!2d11.491081277387423!3d64.46788118965402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4672e62d40be9d73%3A0xd009ed9d8571e8df!2sSverres%20gate%2023%2C%207800%20Namsos!5e0!3m2!1sno!2sno!4v1777631571186!5m2!1sno!2sno"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section id="kontakt" className="bg-stone-50 px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              👋 Interessert i kontorplass?
            </h2>

            <p className="mb-8 text-lg text-stone-600">
              Legg igjen navn og e-post, så tar vi kontakt for en uforpliktende
              prat eller visning.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-4 md:grid-cols-[1fr_1fr_auto]"
          >
            <input
              type="text"
              name="name"
              placeholder="Navn"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-full border border-stone-300 px-5 py-3 outline-none focus:border-stone-900"
            />

            <input
              type="email"
              name="email"
              placeholder="E-post"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full border border-stone-300 px-5 py-3 outline-none focus:border-stone-900"
            />

            <button
              type="submit"
              className="rounded-full bg-stone-900 px-8 py-3 font-medium text-white"
            >
              Send forespørsel
            </button>
          </form>

          {status && <p className="mt-4 text-sm text-stone-600">{status}</p>}

          <p className="mt-4 text-sm text-stone-500">
            Du binder deg ikke til noe – vi tar bare kontakt med mer
            informasjon.
          </p>
        </div>
      </section>

      <footer className="bg-stone-900 text-white px-6 py-20">
  <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">

    {/* LOGO */}
    <div>
      <img
        src="/images/logo.png"
        alt="Sverresgate Kontorfellesskap"
        className="h-16 mb-6 invert"
      />

      <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
        Et enkelt og profesjonelt kontorfellesskap midt i Namsos sentrum.
      </p>
    </div>

    {/* KONTAKT */}
    <div>
      <p className="uppercase text-xs tracking-[0.25em] text-stone-500 mb-4">
        Kontakt
      </p>

      <div className="space-y-2 text-sm">
        <p className="text-stone-400">Anders Hamstad</p>

        <a
          href="mailto:andershamstad@gmail.com"
          className="block text-stone-400 hover:text-white"
        >
          andershamstad@gmail.com
        </a>

        <a
          href="tel:+4795007434"
          className="block text-stone-400 hover:text-white"
        >
          +47 95 00 74 34
        </a>

        <p className="text-stone-400">
          Sverres gate 23, 7800 Namsos
        </p>
      </div>
    </div>

    {/* CTA */}
    <div className="flex flex-col justify-between">
      <div>
        <p className="uppercase text-xs tracking-[0.25em] text-stone-500 mb-4">
          Interessert i kontorplass?
        </p>

        <p className="text-stone-400 text-sm mb-6 max-w-xs">
          Ta kontakt for en uforpliktende prat eller avtale visning.
        </p>
      </div>

      <a
        href="/kontakt"
        className="inline-block rounded-full bg-white text-black px-6 py-3 text-sm font-medium w-fit"
      >
        Ta kontakt
      </a>
    </div>
  </div>

  {/* BUNN */}
  <div className="mt-16 border-t border-stone-800 pt-6 text-sm text-stone-500 flex flex-col md:flex-row justify-between">
    <p>© {new Date().getFullYear()} Sverresgate Kontorfellesskap</p>
    <p>Alle rettigheter reservert</p>
  </div>
</footer>

    </main>
  );
}