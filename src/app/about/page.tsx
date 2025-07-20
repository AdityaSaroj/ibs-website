import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32 mb-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">
        About the Researcher
      </h1>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-6">
            <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Image
                src="/shraddha.jpeg"
                alt="Shraddha Saroj"
                width={192}
                height={192}
                className="rounded-full"
              />
            </div>
            <h3 className="text-2xl font-semibold">Shraddha Saroj</h3>
            <p className="text-gray-600">Ph.D. Research Scholar</p>
            <p className="text-gray-600">Banaras Hindu University</p>
          </div>
          <div className="text-gray-600 mb-6">
            <p className="mb-4">
              Shraddha Saroj is a Ph.D. Research Scholar at Banaras Hindu
              University, dedicated to improving understanding and management of
              IBS through patient education and awareness programs. Her research
              focuses on developing effective strategies for patient education
              and support, with a special emphasis on practical resources for
              patients and families. She has collaborated with leading
              gastroenterologists and has actively participated in national and
              international conferences on digestive health.
            </p>
            <p className="mb-4">
              Her work includes designing bilingual educational materials,
              organizing awareness campaigns, and conducting direct patient
              outreach to empower individuals living with IBS. Shraddha is
              passionate about reducing stigma, promoting early diagnosis, and
              supporting holistic management of IBS.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
