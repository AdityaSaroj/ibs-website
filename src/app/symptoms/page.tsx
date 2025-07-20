import Image from "next/image";

export default function SymptomsPage() {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">Symptoms of IBS</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Abdominal pain or discomfort</li>
          <li>Bloating and gas</li>
          <li>Diarrhea, constipation, or both</li>
          <li>Changes in stool appearance</li>
          <li>Urgency or incomplete evacuation</li>
          <li>Mucus in stool</li>
        </ul>
        <p className="mt-6 text-gray-700">
          Symptoms of IBS can vary in intensity and may fluctuate over time.
          Some individuals experience mild symptoms, while others may have
          severe and persistent discomfort. IBS does not cause permanent damage
          to the intestines, but it can significantly affect quality of life.
          Triggers for symptoms may include stress, certain foods, hormonal
          changes, and infections. If you experience these symptoms regularly,
          consult a healthcare professional for proper diagnosis and management.
        </p>
        <div className="flex items-center justify-center mt-12 mb-6">
          <Image
            src="/symptoms-of-ibs.jpg"
            alt="Symptoms of IBS"
            width={500}
            height={250}
            className="rounded"
          />
        </div>
      </div>
    </main>
  );
}
