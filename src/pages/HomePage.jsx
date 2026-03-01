// pages/HomePage.jsx
import { Link } from "react-router-dom";

const countries = [
  {
    country: "United Kingdom",
    code: "UK",
    flag: "🇬🇧",
    universities: [
      {
        slug: "university-of-bradford",
        name: "University of Bradford",
        description:
          "Known for strong applied research and industry-focused programs.",
        image:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=60",
      },
      {
        slug: "university-of-east-london",
        name: "University of East London (UEL)",
        description:
          "Career-oriented degrees with a strong focus on practical learning.",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=60",
      },
      {
        slug: "anglia-ruskin-university",
        name: "Anglia Ruskin University",
        description:
          "A modern university with popular courses in business, health, and tech.",
        image:
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=60",
      },
      {
        slug: "university-of-portsmouth",
        name: "University of Portsmouth",
        description:
          "Strong student support and excellent facilities for study and innovation.",
        image:
          "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1200&q=60",
      },
    ],
  },
  {
    country: "Sweden",
    code: "SE",
    flag: "🇸🇪",
    universities: [
      {
        slug: "stockholm-university",
        name: "Stockholm University",
        description:
          "A leading university in research and education located in Sweden’s capital.",
        image:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=60",
      },
      {
        slug: "university-of-skovde",
        name: "University of Skövde",
        description:
          "Known for programs in bioscience, AI, game development, and informatics.",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=60",
      },
      {
        slug: "linkoping-university",
        name: "Linköping University",
        description:
          "Strong engineering and technology programs with a focus on innovation.",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=60",
      },
      {
        slug: "malardalen-university",
        name: "Mälardalen University (MDU)",
        description:
          "Industry-connected university with practical programs and research ties.",
        image:
          "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1200&q=60",
      },
    ],
  },
  {
    country: "Canada",
    code: "CA",
    flag: "🇨🇦",
    universities: [
      {
        slug: "university-of-toronto",
        name: "University of Toronto",
        description:
          "Top-ranked university with world-class research and diverse programs.",
        image:
          "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=60",
      },
      {
        slug: "university-of-british-columbia",
        name: "University of British Columbia (UBC)",
        description:
          "A leading public research university with a strong global reputation.",
        image:
          "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=60",
      },
    ],
  },
];

function UniCard({ uni }) {
  return (
    <Link
      to={`/universities/${uni.slug}`}
      className="group relative block overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-md transition"
    >
      {/* Click me badge */}
      <div className="absolute top-3 right-3 z-10">
        <span className="text-xs font-semibold bg-black/70 text-white px-3 py-1 rounded-full">
          Click me…
        </span>
      </div>

      {/* Image */}
      <div className="h-44 w-full overflow-hidden bg-gray-200">
        <img
          src={uni.image}
          alt={uni.name}
          className="h-full w-full object-cover group-hover:scale-105 transition"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900">{uni.name}</h3>
        <p className="mt-2 text-sm text-gray-600">{uni.description}</p>

        <div className="mt-4 text-sm font-semibold text-blue-700">
          Read more →
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className="p-6 md:p-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Welcome to FN Global</h2>
        <p className="text-gray-600">
          Explore universities by country. Click a university to learn more.
        </p>
      </div>

      <div className="space-y-10">
        {countries.map((c) => (
          <section key={c.code} className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{c.flag}</span>
              <h3 className="text-2xl font-bold text-gray-900">{c.country}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.universities.map((uni) => (
                <UniCard key={uni.slug} uni={uni} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}