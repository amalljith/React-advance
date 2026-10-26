
export default function About() {
  const values = [
    {
      title: "Our Mission",
      description:
        "To provide accessible, ethical, and high-quality medical care that improves the health and well-being of our patients and community.",
    },
    {
      title: "Our Vision",
      description:
        "To be a trusted healthcare destination known for clinical excellence, compassion, and innovation in patient care.",
    },
    {
      title: "Our Promise",
      description:
        "We listen carefully, treat responsibly, and support every patient with respect, transparency, and dedication at each step.",
    },
  ];

  const stats = [
    {
      number: "25+",
      label: "Qualified Specialists",
    },
    {
      number: "10+",
      label: "Medical Departments",
    },
    {
      number: "24/7",
      label: "Emergency Support",
    },
  ];

  return (
    <main className="bg-slate-50 px-4 py-12 sm:px-6 lg:py-16">

      {/* HERO SECTION */}
      <section className="mx-auto max-w-7xl rounded-4xl bg-linear-to-r from-white to-teal-50 px-6 py-10 shadow-xl sm:px-10 lg:px-12 lg:py-14">

        <div className="grid items-center gap-10 lg:grid-cols-[1.7fr_1fr]">

          {/* Left Content */}
          <div>
            <span className="inline-block rounded-full bg-teal-100 px-5 py-2 text-sm font-semibold text-teal-700 sm:text-base">
              About MediCare
            </span>

            <h1 className="mt-7 text-4xl leading-tight font-semibold text-slate-900 sm:text-5xl lg:text-6xl">
              Healing With Compassion,
              Skill, And Modern Care
            </h1>

            <p className="mt-7 text-base leading-8 text-slate-700 sm:text-lg">
              MediCare Hospital is dedicated to delivering
              trusted healthcare through experienced
              specialists, advanced medical support, and a
              patient-first environment for every family.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="rounded-3xl border-t-6 border-teal-500 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9">

            <h2 className="mb-6 text-2xl font-semibold text-teal-700 sm:text-3xl">
              Why Patients Choose Us
            </h2>

            <ul className="list-disc space-y-5 pl-6 text-base leading-7 text-slate-800 sm:text-lg">
              <li>
                Experienced doctors across multiple specialties
              </li>

              <li>
                Modern diagnostic and treatment facilities
              </li>

              <li>
                Friendly staff and patient-centered service
              </li>

              <li>
                Reliable emergency and follow-up care
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* MISSION, VISION, PROMISE */}
      <section className="mx-auto mt-12 grid max-w-7xl gap-7 md:grid-cols-3">

        {values.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <h2 className="mb-6 text-3xl font-medium text-teal-700">
              {item.title}
            </h2>

            <p className="text-base leading-8 text-slate-800 sm:text-lg">
              {item.description}
            </p>
          </div>
        ))}

      </section>

      {/* ABOUT DETAILS AND STATS */}
      <section className="mx-auto mt-12 max-w-7xl rounded-4xl bg-white px-6 py-12 shadow-xl sm:px-10 lg:px-12">

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">

          {/* Left Content */}
          <div className="flex flex-col justify-between gap-10">

            <h2 className="text-3xl font-medium leading-tight text-teal-700 sm:text-4xl">
              Built Around People,
              Not Just Treatment
            </h2>

            <p className="text-base leading-8 text-slate-800 sm:text-lg">
              Our hospital combines medical expertise with
              a warm and supportive atmosphere. From general
              consultations to specialized treatments, we
              focus on making healthcare safe, understandable,
              and reassuring for patients of all ages.
            </p>

            <p className="text-base leading-8 text-slate-800 sm:text-lg">
              Every department works together to ensure a
              smooth care journey, helping patients feel
              confident from their first visit to recovery
              and follow-up.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-col gap-6">

            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border-t-5 border-teal-500 bg-white px-6 py-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-4xl font-bold text-slate-900 sm:text-5xl">
                  {stat.number}
                </h3>

                <p className="mt-4 text-base text-slate-800 sm:text-lg">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}
