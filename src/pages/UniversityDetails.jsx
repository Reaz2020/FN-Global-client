// pages/UniversityDetails.jsx
import { Link, useParams } from "react-router-dom";

const universityIndex = {
  "university-of-bradford": {
    name: "University of Bradford",
    country: "United Kingdom",
    flag: "🇬🇧",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=60",
    about:
      "University of Bradford is known for applied research and strong links with industry. It offers a range of programs designed to support employability and real-world skills.",
  },
  "university-of-east-london": {
    name: "University of East London (UEL)",
    country: "United Kingdom",
    flag: "🇬🇧",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=60",
    about:
      "UEL offers practical, career-focused degrees and a supportive student environment. Great for students looking for hands-on learning and strong career preparation.",
  },
  "anglia-ruskin-university": {
    name: "Anglia Ruskin University",
    country: "United Kingdom",
    flag: "🇬🇧",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=60",
    about:
      "Anglia Ruskin is a modern university with popular programs in business, health, and technology, offering strong student support and practical learning.",
  },
  "university-of-portsmouth": {
    name: "University of Portsmouth",
    country: "United Kingdom",
    flag: "🇬🇧",
    image:
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1400&q=60",
    about:
      "Portsmouth is known for strong facilities and student experience. It offers a wide range of programs with modern labs, teaching quality, and career services.",
  },
  "stockholm-university": {
    name: "Stockholm University",
    country: "Sweden",
    flag: "🇸🇪",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=60",
    about:
      "Stockholm University is a major research university in Sweden’s capital, offering strong programs across science, humanities, social sciences, and more.",
  },
  "university-of-skovde": {
    name: "University of Skövde",
    country: "Sweden",
    flag: "🇸🇪",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=60",
    about:
      "University of Skövde is known for biosciences, informatics, AI, and game development, with a friendly campus and practical, industry-relevant programs.",
  },
  "linkoping-university": {
    name: "Linköping University",
    country: "Sweden",
    flag: "🇸🇪",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=60",
    about:
      "Linköping University is strong in engineering and innovation, with a reputation for modern teaching and research-driven programs.",
  },
  "malardalen-university": {
    name: "Mälardalen University (MDU)",
    country: "Sweden",
    flag: "🇸🇪",
    image:
      "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1400&q=60",
    about:
      "Mälardalen University has strong links to industry and a practical approach to education, offering programs designed around employability and real projects.",
  },
  "university-of-toronto": {
    name: "University of Toronto",
    country: "Canada",
    flag: "🇨🇦",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=60",
    about:
      "University of Toronto is one of the world’s top research universities with diverse programs and strong global recognition.",
  },
  "university-of-british-columbia": {
    name: "University of British Columbia (UBC)",
    country: "Canada",
    flag: "🇨🇦",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1400&q=60",
    about:
      "UBC is a leading public research university, known for high-quality education, research output, and strong international student community.",
  },
};

export default function UniversityDetails() {
  const { slug } = useParams();
  const uni = universityIndex[slug];

  if (!uni) {
    return (
      <div className="p-6 md:p-10">
        <h2 className="text-2xl font-bold">University not found</h2>
        <p className="text-gray-600 mt-2">
          Please go back and choose a university from the list.
        </p>
        <Link to="/" className="inline-block mt-4 text-blue-700 font-semibold">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      <Link to="/" className="text-blue-700 font-semibold">
        ← Back
      </Link>

      <div className="mt-6 overflow-hidden rounded-2xl border bg-white shadow-sm">
        <div className="h-56 md:h-72 bg-gray-200">
          <img
            src={uni.image}
            alt={uni.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{uni.flag}</span>
            <p className="text-sm text-gray-600">{uni.country}</p>
          </div>

          <h1 className="text-3xl font-bold mt-2">{uni.name}</h1>

          <p className="mt-4 text-gray-700 leading-relaxed">{uni.about}</p>

          <div className="mt-6 rounded-xl bg-gray-50 p-4">
            <h3 className="font-semibold text-gray-900">Next steps</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li>Check entry requirements</li>
              <li>Review tuition fees and scholarships</li>
              <li>Prepare documents (CV, SOP, transcripts)</li>
              <li>Apply and track your application</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}