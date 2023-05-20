import { Parisienne, Roboto } from 'next/font/google';
import Link from 'next/link';
import { SiInstagram, SiFacebook, SiTwitter } from 'react-icons/si';

const parisienne = Parisienne({
  weight: '400',
  style: 'normal',
});

const roboto = Roboto({
  weight: '400',
  style: 'normal',
});

export const MainFooter = () => {
  return (
    <footer
      className={
        roboto.className + ' footer mt-16 bg-neutral p-10 text-neutral-content'
      }
    >
      <div>
        <Link href="/admin" className="items-center justify-center ">
          <h1 className={`${parisienne.className} w-full text-center text-3xl`}>
            Wedding
          </h1>
          <h1 className={`${parisienne.className} w-full text-center text-3xl`}>
            Luque Alcerro
          </h1>
        </Link>
      </div>
      <div>
        <span className="footer-title">Bessy&apos;s Social</span>
        <div className="grid grid-flow-col gap-4 place-self-center">
          <a
            href="https://instagram.com/bessy.16?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <SiInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100011252797447&mibextid=LQQJ4d"
            target="_blank"
            rel="noreferrer"
          >
            <SiFacebook />
          </a>
          <a
            href="https://twitter.com/bessito04"
            target="_blank"
            rel="noreferrer"
          >
            <SiTwitter />
          </a>
        </div>
      </div>
      <div>
        <span className="footer-title">Darwin&apos;s Social</span>
        <div className="grid grid-flow-col gap-4 place-self-center">
          <a
            href="https://instagram.com/darwin.vlm?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <SiInstagram />
          </a>
          <a
            href="https://www.facebook.com/darwin.luque1?mibextid=LQQJ4d"
            target="_blank"
            rel="noreferrer"
          >
            <SiFacebook />
          </a>
          <a
            href="https://twitter.com/dluque_98"
            target="_blank"
            rel="noreferrer"
          >
            <SiTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};
