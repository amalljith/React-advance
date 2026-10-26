
import { useState } from "react";

const doctors = [
  { id: 1, name: "Dr. Rahul Sharma", department: "Cardiology" },
  { id: 2, name: "Dr. Priya Menon", department: "Neurology" },
  { id: 3, name: "Dr. Arjun Nair", department: "Orthopedics" },
  { id: 4, name: "Dr. Sneha Thomas", department: "Dermatology" },
];

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    doctor: "",
    date: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      setMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!formData.doctor || !formData.date) {
      setMessage("Please select a doctor and booking date.");
      return;
    }

    // Frontend demo only — no API request yet
    alert("Booking form validated successfully!");

    console.log("Booking Details:", formData);

    setFormData({
      name: "",
      phone: "",
      email: "",
      doctor: "",
      date: "",
    });
  };

  const inputStyle =
    "w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition-all duration-300 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20";

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6">
      <section className="mx-auto max-w-4xl rounded-3xl bg-white px-6 py-10 shadow-xl sm:px-10 lg:px-12">

        {/* Heading */}
        <h1 className="mb-5 text-3xl font-semibold text-teal-700 sm:text-4xl">
          Book an Appointment
        </h1>

        <p className="mb-10 text-base text-slate-700 sm:text-lg">
          Fill in your details and choose a doctor to request an appointment.
        </p>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-7">

          {/* Patient Name */}
          <div>
            <label
              htmlFor="patientName"
              className="mb-3 block font-semibold text-slate-900"
            >
              Patient Name
            </label>

            <input
              id="patientName"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputStyle}
              placeholder="Enter patient name"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="mb-3 block font-semibold text-slate-900"
            >
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputStyle}
              placeholder="Enter 10-digit phone number"
              maxLength={10}
              inputMode="numeric"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-3 block font-semibold text-slate-900"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputStyle}
              placeholder="Enter email address"
              required
            />
          </div>

          {/* Doctor */}
          <div>
            <label
              htmlFor="doctor"
              className="mb-3 block font-semibold text-slate-900"
            >
              Select Doctor
            </label>

            <select
              id="doctor"
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className={inputStyle}
              required
            >
              <option value="">Choose a doctor</option>

              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name} - {doctor.department}
                </option>
              ))}
            </select>
          </div>

          {/* Booking Date */}
          <div>
            <label
              htmlFor="date"
              className="mb-3 block font-semibold text-slate-900"
            >
              Booking Date
            </label>

            <input
              id="date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toLocaleDateString("en-CA")}
              className={inputStyle}
              required
            />
          </div>

          {/* Error Message */}
          {message && (
            <p role="alert" className="text-sm font-medium text-red-600">
              {message}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer rounded-full bg-linear-to-r from-teal-700 to-teal-500 px-6 py-4 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
          >
            Submit Booking
          </button>
        </form>
      </section>
    </main>
  );
}
