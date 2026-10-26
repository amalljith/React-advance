
const departments = [
  {
    id: 1,
    name: "Cardiology",
    description:
      "The Cardiology Department specializes in diagnosing and treating diseases related to the heart and blood vessels. It manages conditions such as heart attacks, hypertension (high blood pressure), heart failure, and irregular heartbeats using advanced medical equipment.",
  },
  {
    id: 2,
    name: "Neurology",
    description:
      "The Neurology Department deals with disorders of the brain, spinal cord, and nervous system. It treats conditions like stroke, epilepsy, Parkinson's disease, headaches, and nerve injuries. Doctors use specialized tests to diagnose neurological problems.",
  },
  {
    id: 3,
    name: "Orthopedics",
    description:
      "The Orthopedics Department focuses on the treatment of bones, joints, muscles, ligaments, and fractures. It provides care for injuries caused by accidents, sports injuries, arthritis, and bone deformities. This department also performs surgeries like joint replacement.",
  },
  {
    id: 4,
    name: "Pediatrics",
    description:
      "The Pediatrics Department provides medical care for infants, children, and teenagers. It handles vaccinations, growth monitoring, childhood illnesses, and developmental disorders. Pediatricians ensure the healthy growth and development of children.",
  },
  {
    id: 5,
    name: "Radiology",
    description:
      "The Radiology Department uses medical imaging technologies such as X-rays, CT scans, MRI scans, and ultrasound to diagnose diseases and injuries. Radiologists analyze images and provide reports to doctors for accurate diagnosis and treatment planning.",
  },
  {
    id: 6,
    name: "Dermatology",
    description:
      "The Dermatology Department treats skin, hair, and nail conditions such as acne, infections, allergies, eczema, and skin diseases. Dermatologists also provide cosmetic treatments and skin care advice.",
  },
  {
    id: 7,
    name: "ENT",
    description:
      "The ENT Department specializes in diagnosing and treating conditions affecting the ear, nose, and throat. It provides care for hearing loss, ear infections, sinus problems, allergies, tonsillitis, and voice disorders.",
  },
];

// Reusable Department Card
function DepartmentCard({ department }) {
  return (
    <article
      className="rounded-3xl border-t-[6px] border-teal-500
      bg-white p-7 shadow-xl
      transition-all duration-300
      hover:-translate-y-2 hover:shadow-2xl
      sm:p-8"
    >
      <h2 className="mb-5 text-3xl font-medium text-teal-700 sm:text-4xl">
        {department.name}
      </h2>

      <p className="text-base leading-8 text-slate-800 sm:text-lg">
        {department.description}
      </p>
    </article>
  );
}

export default function Departments() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-10 lg:py-16">

      {/* Page Heading */}
      <section className="mb-12">
        <h1 className="mb-5 text-4xl font-medium text-teal-700 sm:text-5xl">
          Hospital Departments
        </h1>

        <p className="text-base leading-8 text-slate-800 sm:text-lg">
          Explore our medical departments and the services
          available for patients.
        </p>
      </section>

      {/* Departments Grid */}
      <section className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">

        {departments.map((department) => (
          <DepartmentCard
            key={department.id}
            department={department}
          />
        ))}

      </section>
    </main>
  );
}
