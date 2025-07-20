import Image from "next/image";

export default function AwarenessPage() {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32 mb-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">
        Awareness Activities
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="mb-4 text-gray-700">
          Awareness activities were conducted at Gastroenterology Department,
          King George&apos;s Medical University. World IBS Awareness Day is
          observed on 19th April every year to create awareness about IBS. The
          bilingual posters were created and booklet distribution was done in
          the month of April. IBS Patients were personally contacted to increase
          awareness and manage their symptoms.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          World IBS Awareness Day
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Raising Awareness:</strong> The day focuses on increasing
            understanding of IBS, its symptoms, and its impact on
            individuals&apos; lives.
          </li>
          <li>
            <strong>Reducing Stigma:</strong> Acknowledging that IBS is a real
            and manageable condition helps reduce the stigma and shame often
            associated with it.
          </li>
          <li>
            <strong>Supporting Patients:</strong> World IBS Day encourages
            people to connect with others experiencing IBS, share experiences,
            and find support networks.
          </li>
          <li>
            <strong>Promoting Education:</strong> The day also serves as an
            opportunity for healthcare professionals and advocates to share
            information about IBS management and treatment options.
          </li>
        </ul>
        <div className="flex flex-col items-center gap-4 mt-12 mb-6">
          <div className="w-full flex items-center justify-center rounded p-2 mb-2">
            <Image
              src="/awareness-1.jpg"
              alt="Awareness of IBS by Shraddha Saroj"
              width={550}
              height={160}
              className="rounded"
            />
          </div>
          <div className="grid grid-cols-4 gap-4 w-full">
            <div className="flex items-center justify-center rounded p-2">
              <Image
                src="/awareness-2.jpg"
                alt="Awareness of IBS by Shraddha Saroj"
                width={240}
                height={300}
                className="rounded"
              />
            </div>
            <div className="flex items-center justify-center rounded p-2">
              <Image
                src="/awareness-3.jpg"
                alt="Awareness of IBS by Shraddha Saroj"
                width={240}
                height={300}
                className="rounded"
              />
            </div>
            <div className="flex items-center justify-center rounded p-2">
              <Image
                src="/awareness-4.jpg"
                alt="Awareness of IBS by Shraddha Saroj"
                width={240}
                height={300}
                className="rounded"
              />
            </div>
            <div className="flex items-center justify-center rounded p-2">
              <Image
                src="/awareness-5.jpg"
                alt="Awareness of IBS by Shraddha Saroj"
                width={240}
                height={300}
                className="rounded"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 w-full mt-4">
            <div className="flex items-center justify-center rounded p-2">
              <Image
                src="/poster-1.png"
                alt="IBS Awareness Poster 1"
                width={350}
                height={160}
                className="rounded"
              />
            </div>
            <div className="flex items-center justify-center rounded p-2">
              <Image
                src="/poster-2.png"
                alt="IBS Awareness Poster 2"
                width={350}
                height={160}
                className="rounded"
              />
            </div>
            <div className="flex items-center justify-center rounded p-2">
              <Image
                src="/poster-3.png"
                alt="IBS Awareness Poster 3"
                width={350}
                height={160}
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
