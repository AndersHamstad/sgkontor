"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabaseClient";

export default function Kontakt() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

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
      <header className="bg-white px-6 py-5 shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Sverresgate Kontorfellesskap"
              className="h-14 w-auto"
            />
          </Link>

          <Link
            href="/"
            className="rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white"
          >
            Til forsiden
          </Link>
        </div>
      </header>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          

          <h1 className="mb-6 text-4xl font-semibold md:text-6xl">
            👋 Interessert i kontorplass?
          </h1>

          <p className="mb-12 max-w-2xl text-lg text-stone-600">
            Legg igjen navn og e-post, så tar vi kontakt for en uforpliktende
            prat eller visning av lokalene.
          </p>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
              <h2 className="mb-6 text-2xl font-semibold">
                Send forespørsel
              </h2>

              <form onSubmit={handleSubmit} className="grid gap-4">
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
                  Send
                </button>
              </form>

              {status && (
                <p className="mt-4 text-sm text-stone-600">{status}</p>
              )}

              <p className="mt-4 text-sm text-stone-500">
                Du binder deg ikke til noe – vi tar bare kontakt med mer
                informasjon.
              </p>
            </div>

            <div className="rounded-3xl bg-stone-900 p-8 text-white shadow-sm md:p-10">
              <h2 className="mb-6 text-2xl font-semibold">
                Kontaktinfo
              </h2>

              <div className="space-y-4 text-stone-300">
                <p>
                  <span className="block text-sm uppercase tracking-[0.2em] text-stone-500">
                    Navn
                  </span>
                  Anders Hamstad
                </p>

                <p>
                  <span className="block text-sm uppercase tracking-[0.2em] text-stone-500">
                    E-post
                  </span>
                  <a
                    href="mailto:andershamstad@gmail.com"
                    className="hover:text-white"
                  >
                    andershamstad@gmail.com
                  </a>
                </p>

                <p>
                  <span className="block text-sm uppercase tracking-[0.2em] text-stone-500">
                    Telefon
                  </span>
                  <a href="tel:+4795007434" className="hover:text-white">
                    +47 95 00 74 34
                  </a>
                </p>

                <p>
                  <span className="block text-sm uppercase tracking-[0.2em] text-stone-500">
                    Adresse
                  </span>
                  Sverres gate 23, 7800 Namsos
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-stone-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1719.679520933437!2d11.491081277387423!3d64.46788118965402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4672e62d40be9d73%3A0xd009ed9d8571e8df!2sSverres%20gate%2023%2C%207800%20Namsos!5e0!3m2!1sno!2sno!4v1777631571186!5m2!1sno!2sno"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
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