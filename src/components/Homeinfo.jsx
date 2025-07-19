import { assets } from "../assets/assets";
import Button from "./UI/Button";

function Homeinfo() {
  return (
    <section className="w-full px-4">
      <div className="w-full max-w-[1100px] mx-auto py-10">
        {/* Intro */}
        <div className="mx-auto p-4 text-center">
          <h1 className="text-title-1 text-2xl sm:text-3xl font-semibold py-4">
            Digital products that look good, load fast, and grow your business.
          </h1>
          <p className="text-paragrapg-2 px-2 sm:px-6">
            Technewman designs and develops conversion-ready websites and custom
            applications for startups, agencies, and scaling brands.
          </p>
        </div>

        {/* Section 1 */}
        <div className="flex flex-col-reverse md:flex-row mt-20 md:mt-40 items-center gap-10">
          <div className="flex-1">
            <div className="flex gap-3 items-center mb-4">
              <img
                className="p-3 rounded-full bg-[#08D3BB]"
                src={assets.smile}
                alt="icon"
              />
              <div>
                <h3 className="font-semibold">Mobile-first. User-first.</h3>
                <p className="text-paragrapg-2 text-sm">
                  Intuitive experiences on every device.
                </p>
              </div>
            </div>
            <h1 className="text-xl md:text-2xl font-semibold my-6">
              <span className="text-primary">Mobile apps</span> your customers
              actually use.
            </h1>
            <p className="text-paragraph-3 text-sm">
              Technewman builds performant cross-platform mobile applications
              that feel native, load quickly, and integrate with the tools you
              already use. Launch on iOS, Android, or the web with one codebase.
            </p>
          </div>
          <div className="flex-1">
            <img src={assets.mobilephone} alt="mobile app" className="w-full" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row mt-16 md:mt-24 items-center gap-10">
          <div className="flex-1">
            <img
              src={assets.websitemockup}
              alt="website mockup"
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <div className="flex gap-3 items-center mb-4">
              <img
                className="p-3 rounded-full bg-primary"
                src={assets.smile}
                alt="icon"
              />
              <div>
                <h3 className="font-semibold">Websites that work.</h3>
                <p className="text-paragrapg-2 text-sm">
                  Optimized for speed, SEO & conversion.
                </p>
              </div>
            </div>
            <h1 className="text-xl md:text-2xl font-semibold my-6">
              <span className="text-primary">Web development</span> built for
              growth.
            </h1>
            <p className="text-paragraph-3 text-sm">
              From landing pages to full CMS builds, Technewman delivers clean,
              responsive code and thoughtful UX. We engineer sites that are easy
              to manage, search-friendly, and ready to scale with your traffic.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row mt-16 md:mt-24 items-center gap-10">
          <div className="flex-1 order-2 md:order-1">
            <div className="flex gap-3 items-center mb-4">
              <img
                className="p-3 rounded-full bg-[#9208D3]"
                src={assets.smile}
                alt="icon"
              />
              <div>
                <h3 className="font-semibold">Ongoing partnership.</h3>
                <p className="text-paragrapg-2 text-sm">
                  Support, updates & optimization.
                </p>
              </div>
            </div>
            <h1 className="text-xl md:text-2xl font-semibold my-6">
              <span className="text-primary">We grow with you.</span> Let’s keep
              improving.
            </h1>
            <p className="text-paragraph-3 text-sm">
              Launch is just the start. Technewman provides maintenance, feature
              updates, performance tuning, analytics, and technical support so
              your product keeps delivering results.
            </p>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <img
              src={assets.person1}
              alt="client collaboration"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Two Callout Boxes */}
      <div className="w-full px-3 mt-16">
        <div className="w-full max-w-[1100px] mx-auto flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="p-6 w-full md:w-[355px] text-center rounded-md bg-background-1">
            <h1 className="text-xl md:text-2xl text-title-1 my-4">
              Need a website redesign?
            </h1>
            <p className="text-paragraph-3 text-sm my-4">
              Technewman can refresh your existing site with a modern UI,
              improved performance, and better conversions—without starting from
              scratch.
            </p>
            <Button>View more</Button>
          </div>
          <div className="p-6 w-full md:w-[355px] text-center rounded-md bg-primary">
            <h1 className="text-xl md:text-2xl text-white my-4">
              Starting a new project?
            </h1>
            <p className="text-white text-sm my-4">
              Let’s design and build your next digital product—from strategy and
              prototypes to launch and long-term support. Talk to Technewman
              today.
            </p>
            <Button variant="secondary">View more</Button>
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className="w-full my-10 p-6 flex flex-col items-center">
        <h1 className="text-xl md:text-2xl font-semibold text-center">
          You’re in good company
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-6 w-full">
          <img
            src={assets.beneoshop}
            alt="Beneoshop"
            className="h-10 object-contain"
          />
          <img
            src={assets.caspio}
            alt="Caspio"
            className="h-10 object-contain"
          />
          <img
            src={assets.hypergrid}
            alt="Hypergrid"
            className="h-10 object-contain"
          />
          <img
            src={assets.leotrippi}
            alt="Leotrippi"
            className="h-10 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Homeinfo;
