import Button from "../components/UI/Button";
import { assets } from "../assets/assets";
import Skill from "./UI/Skill";

function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-[80vh] w-full relative flex flex-col items-center px-4">
        {/* Shape top-right */}
        <img
          className="absolute right-[-360px] top-[10%] w-[250px] sm:w-[350px] md:w-[400px] z-0"
          src={assets.shape1}
          alt="shape1"
        />

        {/* Faded background */}
        <div className="absolute inset-0 bg-primary opacity-10 z-0" />

        {/* Content */}
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10 py-12">
          {/* Left Text Column */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left items-center md:items-start">
            <h2 className="font-semibold text-2xl sm:text-3xl text-black leading-snug">
              Crafting <span className="text-primary">modern websites</span> and{" "}
              <span className="text-primary">custom applications</span> that
              grow your business.
            </h2>
            <p className="text-primary-text my-6 text-base max-w-[90%] md:max-w-full">
              At <strong>Technewman</strong>, we build powerful, user-focused
              digital experiences that help businesses thrive online. Whether
              it's a sleek website or a full-scale mobile app, we deliver
              scalable solutions tailored to your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Button className="px-8">Our Work</Button>
              <Button variant="secondary" className="px-8">
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src={assets.hero}
              alt="hero"
              className="w-full max-w-[500px] mx-auto"
            />
          </div>
        </div>

        {/* Shape bottom-left */}
        <img
          className="absolute left-[-600px] top-[10%] w-[300px] sm:w-[500px] md:w-[650px] z-0"
          src={assets.shape2}
          alt="shape2"
        />
      </div>

      {/* Services Section */}
      <div className="w-full max-w-[1100px] p-6 mx-auto flex flex-wrap justify-center gap-6 sm:gap-4">
        <Skill
          background="EFEAFF"
          image={assets.websvg}
          title="Web Development"
          description="Responsive and fast websites built for performance."
        />
        <Skill
          background="ECFFDA"
          image={assets.seosvg}
          title="SEO Optimization"
          description="Boost your visibility and rank higher on search engines."
        />
        <Skill
          background="DAE6FF"
          image={assets.vrsvg}
          title="AR/VR Experiences"
          description="Next-gen immersive solutions for forward-thinking brands."
        />
        <Skill
          background="FFE5DA"
          image={assets.mobilesvg}
          title="Mobile Applications"
          description="High-performance apps for iOS and Android platforms."
        />
      </div>

      <hr className="text-[#C7C7C7] mt-4" />
    </div>
  );
}

export default Hero;
