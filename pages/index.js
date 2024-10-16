import Head from "next/head";
import Image from "next/image";

// Carregando fontes usando CSS-in-JS (via JavaScript e inline styles)
const geistSans = {
  fontFamily: "'Geist Sans', sans-serif",
  fontWeight: "100 900",
  src: `url('/fonts/GeistVF.woff') format('woff')`
};

const geistMono = {
  fontFamily: "'Geist Mono', monospace",
  fontWeight: "100 900",
  src: `url('/fonts/GeistMonoVF.woff') format('woff')`
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Linkando fontes diretamente no <Head> */}
        <style jsx global>{`
          @font-face {
            font-family: 'Geist Sans';
            src: url('/fonts/GeistVF.woff') format('woff');
            font-weight: 100 900;
          }
          @font-face {
            font-family: 'Geist Mono';
            src: url('/fonts/GeistMonoVF.woff') format('woff');
            font-weight: 100 900;
          }
        `}</style>
      </Head>
      <div>
        <main>
          <Image
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol>
            <li>
              Get started by editing <code>pages/index.js</code>.
            </li>
            <li>Save and see your changes instantly.</li>
            <li>Teste de prettier</li>
            <li>mais um teste</li>
            <li>Teste de prettier</li>
            <li>maais um teste</li>
            <li>Teste de prettier</li>
            <li>maais um teste</li>
            <li>Teste de prettier</li>
            <li>maais um teste</li>
          </ol>

          <div>
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://nextjs.org/icons/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </main>
        <footer>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </>
  );
}
