import { useScroll, animated, useSpring } from "react-spring";
import ScrollVideo from "../components/ScrollVideo";
import blackLogo from "../assets/images/cbc-black-logo.png";
import yesDay from "../assets/images/cbc-yes-day-cover.jpg";

export default function Home() {
  // Use useScroll to get the scrollY position
  const { scrollYProgress } = useScroll();

  // Create springs for elements
  const logoSpring = useSpring({
    opacity: scrollYProgress.to([0.01, 0.02], [0, 1]), // Logo fades in early in the scroll
    transform: scrollYProgress
      .to([0.01, 0.02], [50, 0])
      .to((y) => `translateY(${y}px)`),
  });

  const headingSpring = useSpring({
    opacity: scrollYProgress.to([0.03, 0.04], [0, 1]), // Heading fades in a bit later
    transform: scrollYProgress
      .to([0.03, 0.04], [50, 0])
      .to((y) => `translateY(${y}px)`),
  });

  const ctaSpring = useSpring({
    opacity: scrollYProgress.to([0.1, 0.11], [0, 1]), // CTA fades in last
    transform: scrollYProgress
      .to([0.1, 0.11], [50, 0])
      .to((y) => `translateY(${y}px)`),
  });

  return (
    <main className="relative overflow-hidden">
      {/* Scroll Video Background */}
      <ScrollVideo
        video="./src/assets/intro.mp4"
        scrollYProgress={scrollYProgress}
      />

      {/* Logo */}
      <animated.img
        style={logoSpring}
        className="max-w-2xl mx-auto mt-20"
        src={blackLogo}
        alt="Logo"
      />

      {/* Heading */}
      <animated.h1
        style={headingSpring}
        className="text-9xl text-center text-[#febc12] mt-20"
      >
        Welcome to our website
      </animated.h1>

      {/* Call-to-Action Section */}
      <animated.div
        style={ctaSpring}
        className="ml-auto mr-5 w-2/3 py-10 flex justify-center items-center gap-10 bg-[#c14627] shadow-xl mt-20"
      >
        <a className="w-1/2 pl-10 text-6xl text-white cursor-pointer hover:text-gray-300">
          Buy the latest single
        </a>
        <img className="max-w-sm" src={yesDay} alt="Yes Day Cover" />
      </animated.div>

      {/* Spacer to allow scrolling */}
      <div style={{ height: "200vh" }}></div>
    </main>
  );
}
