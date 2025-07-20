import Image from "next/image";

export default function AwarenessPage() {
  return (
    <main className="px-4 sm:px-8 md:px-16 xl:px-32 mb-8">
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
        <div className="flex flex-col items-center gap-12 mt-12 mb-6">
          {/* First row */}
          <div className="relative w-full hidden xl:flex items-center justify-center">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center">
                <Image
                  src="/awareness-6.jpeg"
                  alt="Awareness of IBS by Shraddha Saroj"
                  width={250}
                  height={250}
                  className="rounded-lg shadow-md"
                />
                <span className="mt-2 text-sm text-gray-600 text-center">
                  Attending International Nutricon 2023
                </span>
              </div>
            </div>
            <div className="relative z-10">
              <div className="flex flex-col items-center">
                <Image
                  src="/awareness-1.jpg"
                  alt="Awareness of IBS by Shraddha Saroj"
                  width={650}
                  height={650}
                  className="rounded-xl shadow-xl"
                />
                <span className="mt-2 text-sm text-gray-600 text-center">
                  Gastroenterology Department, KGMU
                </span>
              </div>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center">
                <Image
                  src="/awareness-4.jpg"
                  alt="Awareness of IBS by Shraddha Saroj"
                  width={250}
                  height={250}
                  className="rounded-lg shadow-md"
                />
                <span className="mt-2 text-sm text-gray-600 text-center">
                  Attending IBS Patients
                </span>
              </div>
            </div>
          </div>

          {/* First row - mobile */}
          <div className="flex flex-col items-center gap-8 xl:hidden">
            <div className="flex flex-col items-center">
              <Image
                src="/awareness-6.jpeg"
                alt="Awareness of IBS by Shraddha Saroj"
                width={200}
                height={200}
                className="rounded-lg shadow-md"
              />
              <span className="mt-2 text-sm text-gray-600 text-center">
                Attending International Nutricon 2023
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/awareness-1.jpg"
                alt="Awareness of IBS by Shraddha Saroj"
                width={400}
                height={400}
                className="rounded-xl shadow-xl"
              />
              <span className="mt-2 text-sm text-gray-600 text-center">
                Gastroenterology Department, KGMU
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/awareness-4.jpg"
                alt="Awareness of IBS by Shraddha Saroj"
                width={200}
                height={200}
                className="rounded-lg shadow-md"
              />
              <span className="mt-2 text-sm text-gray-600 text-center">
                Attending IBS Patients
              </span>
            </div>
          </div>

          {/* Second row */}
          <div className="relative w-full hidden xl:flex items-center justify-center">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center">
                <Image
                  src="/awareness-2.jpg"
                  alt="Awareness of IBS by Shraddha Saroj"
                  width={250}
                  height={250}
                  className="rounded-lg shadow-md"
                />
                <span className="mt-2 text-sm text-gray-600 text-center">
                  Weight Measurement
                </span>
              </div>
            </div>
            <div className="relative z-10">
              <Image
                src="/poster-1.png"
                alt="IBS Awareness Poster 1"
                width={650}
                height={650}
                className="rounded-xl shadow-xl"
              />
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center">
                <Image
                  src="/awareness-3.jpg"
                  alt="Awareness of IBS by Shraddha Saroj"
                  width={250}
                  height={250}
                  className="rounded-lg shadow-md"
                />
                <span className="mt-2 text-sm text-gray-600 text-center">
                  Height Measurement
                </span>
              </div>
            </div>
          </div>

          {/* Second row - mobile */}
          <div className="flex flex-col items-center gap-8 xl:hidden">
            <div className="flex flex-col items-center">
              <Image
                src="/awareness-2.jpg"
                alt="Awareness of IBS by Shraddha Saroj"
                width={200}
                height={200}
                className="rounded-lg shadow-md"
              />
              <span className="mt-2 text-sm text-gray-600 text-center">
                Weight Measurement
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/poster-1.png"
                alt="IBS Awareness Poster 1"
                width={400}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/awareness-3.jpg"
                alt="Awareness of IBS by Shraddha Saroj"
                width={200}
                height={200}
                className="rounded-lg shadow-md"
              />
              <span className="mt-2 text-sm text-gray-600 text-center">
                Height Measurement
              </span>
            </div>
          </div>

          {/* Third row - centered single image */}
          <div className="flex justify-center w-full">
            <div className="flex items-center justify-center">
              <Image
                src="/poster-2.png"
                alt="IBS Awareness Poster 2"
                width={650}
                height={650}
                className="hidden xl:block rounded-xl shadow-xl"
              />
              <Image
                src="/poster-2.png"
                alt="IBS Awareness Poster 2"
                width={400}
                height={400}
                className="xl:hidden rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
