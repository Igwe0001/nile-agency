import Button from "./UI/Button";

function Newsletter() {
  return (
    <section className="w-full px-4 py-20 bg-background-2">
      <div className="max-w-[1100px] w-full mx-auto flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl py-6 font-semibold text-center">
          Stay in the loop — get the latest from Technewman.
        </h1>

        {/* Form */}
        <form
          className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl justify-center mt-4"
          action="#"
          aria-label="Subscribe to newsletter"
        >
          <input
            className="w-full bg-white rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-primary text-sm"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <Button type="submit" variant="black" className="w-full sm:w-auto">
            SUBSCRIBE
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
