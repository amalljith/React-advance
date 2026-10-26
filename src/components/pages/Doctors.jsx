
import doctor1 from "../../assets/doctors/doctor1.jpg";
import doctor2 from "../../assets/doctors/doctor2.jpg";
import doctor3 from "../../assets/doctors/doctor3.jpg";
import doctor4 from "../../assets/doctors/doctor4.jpg";
import doctor5 from "../../assets/doctors/doctor5.jpg";
import doctor6 from "../../assets/doctors/doctor6.jpg";

const doctors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    specialization: "Cardiologist", 
    department: "Cardiology",
    image: doctor1,
  },
  {
    id: 2,
    name: "Dr. Meera Joseph",
    specialization: "Child Health and Vaccination Specialist",
    department: "Pediatrics",
    image: doctor2,
  },
  {
    id: 3,
    name: "Dr. Manoj Varma",
    specialization: "Dermatologist",
    department: "Dermatology",
    image: doctor3,
  },
  {
    id: 4,
    name: "Dr. Priya Nair",
    specialization: "Ear and Hearing Specialist",
    department: "ENT",
    image: doctor4,
  },
  {
    id: 5,
    name: "Dr. Shalini Gupta",
    specialization: "Diagnostic Imaging Specialist",
    department: "Radiology",
    image: doctor5,
  },
  {
    id: 6,
    name: "Dr. Neha Reddy",
    specialization: "Stroke and Brain Disorders Specialist",
    department: "Neurology",
    image: doctor6,
  },
];

function DoctorCard({ doctor }) {
  return (
    <article className="group overflow-hidden rounded-3xl border-t-6 border-teal-500 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Doctor Image */}
      <div className="overflow-hidden rounded-2xl bg-slate-100">
        <img
          src={doctor.image}
          alt={doctor.name}
          loading="lazy"
          className="h-64 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 sm:h-72"
        />
      </div>

      {/* Doctor Details */}
      <div className="mt-6">
        <h2 className="mb-5 text-2xl font-medium text-teal-700 sm:text-3xl">
          {doctor.name}
        </h2>

        <div className="space-y-4 text-base leading-7 text-slate-800 sm:text-lg">
          <p>
            <span className="font-semibold text-slate-900">
              Specialization:
            </span>{" "}
            {doctor.specialization}
          </p>

          <p>
            <span className="font-semibold text-slate-900">
              Department:
            </span>{" "}
            {doctor.department}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Doctors() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-10">

      {/* Page Heading */}
      <section className="mb-10">
        <h1 className="mb-5 text-4xl font-medium text-teal-700 sm:text-5xl">
          Our Doctors
        </h1>

        <p className="text-base leading-8 text-slate-800 sm:text-lg">
          Meet our specialists across departments and explore
          their areas of expertise.
        </p>
      </section>

      {/* Doctors Grid */}
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </section>

    </main>
  );
}
