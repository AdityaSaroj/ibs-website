import Image from "next/image";

export default function TypesPage() {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">Types of IBS</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="text-lg text-gray-700 mb-4">
          IBS is classified based on predominant bowel habits:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>IBS-C (Constipation predominant):</strong> Hard or lumpy
            stools most of the time.
          </li>
          <li>
            <strong>IBS-D (Diarrhea predominant):</strong> Loose or watery
            stools most of the time.
          </li>
          <li>
            <strong>IBS-M (Mixed):</strong> Both constipation and diarrhea.
          </li>
          <li>
            <strong>IBS-U (Unclassified):</strong> Symptoms do not fit the above
            types.
          </li>
        </ul>
        <p className="mt-6 text-gray-700">
          Identifying the type of IBS is important for tailoring treatment and
          management strategies. Some patients may switch between types over
          time. Discussing your symptoms with a healthcare provider can help
          determine the best approach for your individual needs.
        </p>
        <div className="flex items-center justify-center mt-12 mb-6">
          <Image
            src="/types-of-ibs.png"
            alt="Types of IBS"
            width={500}
            height={250}
            className="rounded"
          />
        </div>
      </div>
    </main>
  );
}
