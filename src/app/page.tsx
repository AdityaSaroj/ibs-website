import Image from "next/image";
import Link from "next/link";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ title, children, className = "" }: SectionProps) => (
  <section className={`py-8 ${className}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">{title}</h2>
      {children}
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 rounded-xl mb-8">
        <div className="container mx-auto px-12 flex flex-col md:flex-row items-center gap-8">
          <div className="max-w-3xl flex-1">
            <h1 className="text-5xl font-bold">
              Irritable Bowel Syndrome Awareness
            </h1>
            <span className="text-3xl font-semibold">by Shraddha Saroj</span>
          </div>
          <Image
            src="/ibs.png"
            alt="IBS Awareness"
            width={500}
            height={250}
            className="bg-gray-200 rounded-xl flex items-center justify-center"
          />
        </div>
      </section>

      <Section title="What is IBS?">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <p className="text-lg text-gray-700">
              Irritable Bowel Syndrome (IBS) is a common digestive disorder
              affecting the large intestine, causing abdominal pain, bloating,
              and changes in bowel habits. It is a functional disorder, meaning
              symptoms occur without visible disease or damage in the digestive
              tract.
            </p>
          </div>
        </div>
      </Section>

      <div className="grid md:grid-cols-2 gap-8">
        <Section title="Common Causes of IBS">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Gut-brain axis dysfunction</li>
            <li>Stress and psychological factors</li>
            <li>Previous gastrointestinal infections</li>
            <li>Food sensitivities</li>
            <li>Genetic predisposition</li>
          </ul>
        </Section>
        <Section title="Types of IBS">
          <p className="text-gray-700 mb-4">
            IBS is classified based on predominant bowel habits:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>IBS-C:</strong> Constipation predominant
            </li>
            <li>
              <strong>IBS-D:</strong> Diarrhea predominant
            </li>
            <li>
              <strong>IBS-M:</strong> Mixed (constipation and diarrhea)
            </li>
            <li>
              <strong>IBS-U:</strong> Unclassified
            </li>
          </ul>
          <Link
            href="/types"
            className="inline-block mt-4 text-blue-700 font-semibold hover:bg-blue-100 hover:text-blue-900"
          >
            Learn more about Types of IBS
          </Link>
        </Section>
      </div>

      <Section title="Diagnosis of IBS - Rome IV Criteria">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-blue-700">
            Rome IV Criteria
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Recurrent abdominal pain, on average, at least 1 day per week in
              the last 3 months
            </li>
            <li>
              Associated with two or more of the following:
              <ul className="list-disc list-inside ml-6">
                <li>Related to defecation</li>
                <li>Change in frequency of stool</li>
                <li>Change in form (appearance) of stool</li>
              </ul>
            </li>
            <li>Symptom onset at least 6 months before diagnosis</li>
          </ul>
          <p className="mt-4 text-gray-600">
            Rome IV is an internationally accepted criteria for diagnosing IBS,
            helping to distinguish it from other gastrointestinal disorders.
          </p>
        </div>
      </Section>

      <Section title="Why IBS Awareness is Needed in India?">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            Irritable Bowel Syndrome (IBS) affects an estimated 10-20% of the
            global population. In India, studies suggest that the prevalence of
            IBS ranges from 4% to 7%, but the actual number may be much higher
            due to underreporting and lack of awareness. Many patients in India
            treat symptoms like constipation and diarrhea as normal, relying on
            home remedies and avoiding medical consultation. This leads to
            chronic discomfort and missed opportunities for proper diagnosis and
            management.
          </p>
          <p className="text-gray-700 mb-4">
            Cultural stigma, limited access to healthcare, and low awareness
            contribute to the underdiagnosis of IBS in India. People often do
            not recognize IBS as a medical condition and may not seek help until
            symptoms become severe. Raising awareness is crucial to encourage
            early recognition, reduce stigma, and improve quality of life for
            those affected.
          </p>
          <p className="text-gray-700">
            Research and awareness campaigns are essential to educate the
            public, support patients, and promote better management of IBS. This
            website is a small part of a larger effort to increase understanding
            and empower individuals to seek appropriate care.
          </p>
        </div>
      </Section>
    </main>
  );
}
