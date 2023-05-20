import { Parisienne } from 'next/font/google';
import Image from 'next/image';

const parisienne = Parisienne({
  weight: '400',
  style: 'normal',
});

export const MainHero = () => {
  return (
    <div className="hero bg-base-200 py-10 text-center">
      <div className="hero-content flex-col gap-16 lg:flex-row">
        <Image
          src="/images/IMG_3357.png"
          className="max-w-md rounded-lg shadow-2xl"
          alt="Hero Image"
          width={3024}
          height={4032}
        />
        <div>
          <h1 className="text-7xl font-bold" style={parisienne.style}>
            Bessy Alcerro
            <br />
            &
            <br />
            Darwin Alcerro
          </h1>
          <p className="py-6">
            Nos casamos! Unete a nuestra celebracion el
            <br />
            <span className="text-4xl font-bold">09 de marzo de 2024</span>
          </p>
          <button className="btn-secondary btn">RSVP</button>
        </div>
      </div>
    </div>
  );
};
