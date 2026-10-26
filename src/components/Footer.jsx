
export default function Footer() {
  const quickLinks = [
    "Home",
    "About",
    "Booking",
    "Contact Us",
  ];

  return (
    <footer className="bg-slate-900 text-white">

      {/* Footer Main Content */}
      <div className="grid gap-10 px-6 py-14 sm:px-10 lg:grid-cols-3 lg:gap-14 lg:py-20">

        {/* Hospital Info */}
        <div>
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">
            MediCare Hospital
          </h2>

          <p className="max-w-md leading-8 text-slate-300">
            Compassionate healthcare with experienced doctors,
            modern facilities, and patient-first service
            for every family.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">
            Quick Links
          </h2>

          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-block text-slate-300 transition-all duration-300 hover:translate-x-2 hover:text-teal-400"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">
            Contact
          </h2>

          <div className="space-y-5 text-slate-300">
            <p>
              Email:{" "}
              <a
                href="mailto:support@medicare.com"
                className="break-all transition-colors hover:text-teal-400"
              >
                support@medicare.com
              </a>
            </p>

            <p>
              Phone:{" "}
              <a
                href="tel:+919876543210"
                className="transition-colors hover:text-teal-400"
              >
                +91 XXXXX XXXXX
              </a>
            </p>

            <p>Location: Calicut, India</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-slate-300 sm:text-base">
        © 2026 MediCare Hospital. All rights reserved.
      </div>

    </footer>
  );
}
