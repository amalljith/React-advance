
import { Link } from "react-router";

const contactDetails = [
  {
    id: 1,
    title: "Hospital Address",
    content: [
      {
        text: "123 Health Avenue, Anna Nagar, Chennai, India",
      },
    ],
  },
  {
    id: 2,
    title: "Call Us",
    content: [
      {
        text: "+91 98765 43210",
        href: "tel:+919876543210",
      },
      {
        text: "+91 91234 56789",
        href: "tel:+919123456789",
      },
    ],
  },
  {
    id: 3,
    title: "Email Support",
    content: [
      {
        text: "support@medicare.com",
        href: "mailto:support@medicare.com",
      },
      {
        text: "appointments@medicare.com",
        href: "mailto:appointments@medicare.com",
      },
    ],
  },
  {
    id: 4,
    title: "Working Hours",
    content: [
      {
        text: "Monday - Saturday: 8:00 AM to 8:00 PM",
      },
      {
        text: "Emergency Services: Open 24/7",
      },
    ],
  },
];

// Reusable Contact Card
function ContactCard({ detail }) {
  return (
    <article
      className="rounded-3xl border-t-[6px] border-teal-500
      bg-white p-7 shadow-xl
      transition-all duration-300
      hover:-translate-y-2 hover:shadow-2xl
      sm:p-8"
    >
      <h2 className="mb-6 text-2xl font-medium text-teal-700 sm:text-3xl">
        {detail.title}
      </h2>

      <div className="space-y-5 text-base leading-8 text-slate-900 sm:text-lg">
        {detail.content.map((item, index) =>
          item.href ? (
            <p key={index}>
              <a
                href={item.href}
                className="wrap-break-word transition-colors hover:text-teal-600"
              >
                {item.text}
              </a>
            </p>
          ) : (
            <p key={index}>{item.text}</p>
          )
        )}
      </div>
    </article>
  );
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-10">

      {/* Page Heading */}
      <section className="mx-auto mb-14 max-w-5xl text-center">
        <span
          className="inline-block rounded-full bg-teal-100
          px-5 py-2 font-semibold text-teal-700"
        >
          Contact Us
        </span>

        <h1 className="mt-7 text-4xl font-medium leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
          We're Here To Help You Anytime
        </h1>

        <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-slate-800 sm:text-lg">
          Reach out to MediCare Hospital for appointments,
          department inquiries, emergency guidance,
          and general support.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-7 sm:grid-cols-2 xl:grid-cols-4">
        {contactDetails.map((detail) => (
          <ContactCard key={detail.id} detail={detail} />
        ))}
      </section>

      {/* Quick Appointment Banner */}
      <section className="mx-auto mt-16 max-w-7xl">
        <div
          className="flex flex-col items-start justify-between gap-8
          rounded-3xl bg-linear-to-r from-teal-700 to-teal-500
          px-7 py-10 text-white shadow-xl
          sm:px-10 lg:flex-row lg:items-center lg:px-12 lg:py-12"
        >
          {/* Banner Content */}
          <div>
            <h2 className="mb-5 text-3xl font-semibold sm:text-4xl">
              Need a quick appointment?
            </h2>

            <p className="max-w-3xl text-base leading-8 text-teal-50 sm:text-lg">
              Visit our booking page to request a consultation
              with your preferred doctor.
            </p>
          </div>

          {/* Booking Button */}
          <Link
            to="/booking"
            className="inline-flex shrink-0 items-center justify-center
            rounded-full bg-white px-8 py-4
            font-semibold text-teal-700
            transition-all duration-300
            hover:-translate-y-1 hover:bg-teal-50
            hover:shadow-xl"
          >
            Book Appointment
          </Link>
        </div>
      </section>

    </main>
  );
}
