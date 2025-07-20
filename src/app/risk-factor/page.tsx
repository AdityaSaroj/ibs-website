import Image from "next/image";

export default function RiskFactorPage() {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">
        Risk Factors for IBS
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Younger Age:</strong> IBS is more common in individuals
            under 50 years old.
          </li>
          <li>
            <strong>Female Gender:</strong> Women are at higher risk, possibly
            due to hormonal fluctuations.
          </li>
          <li>
            <strong>Family History:</strong> Having a family member with IBS
            increases risk, suggesting a genetic component.
          </li>
          <li>
            <strong>Poor Mental Health:</strong> Anxiety, depression, and other
            mental health conditions are linked to higher IBS risk.
          </li>
        </ul>
        <p className="mt-6 text-gray-700">
          Understanding risk factors can help in early recognition and
          management of IBS. If you have one or more of these risk factors and
          experience symptoms, consult a healthcare professional for guidance.
        </p>
        <div className="flex items-center justify-center mt-12 mb-6">
          <Image
            src="/risk-factors-of-ibs.jpg"
            alt="Risk Factors of IBS"
            width={500}
            height={250}
            className="rounded"
          />
        </div>
      </div>
    </main>
  );
}
