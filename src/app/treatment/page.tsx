export default function TreatmentPage() {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">
        Treatment & Lifestyle Modification
      </h1>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Pharmacological Treatment
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Antispasmodics for abdominal pain</li>
            <li>Laxatives for constipation</li>
            <li>Antidiarrheals for diarrhea</li>
            <li>Probiotics</li>
            <li>Other medications as prescribed</li>
          </ul>
          <p className="mt-6 text-gray-700">
            Medication is prescribed based on the type and severity of IBS.
            Always consult your doctor before starting or changing any
            medication. Some medicines may have side effects or interact with
            other treatments.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Lifestyle Modification
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Stress management (yoga, meditation)</li>
            <li>Regular physical activity</li>
            <li>Good sleep hygiene</li>
            <li>Support groups or counseling</li>
          </ul>
          <p className="mt-6 text-gray-700">
            Lifestyle changes can greatly improve IBS symptoms. Managing stress,
            staying active, and maintaining a healthy sleep schedule are key
            components of long-term management.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dietary Modification</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Consume
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Fresh fruits and vegetables</li>
              <li>Whole grains (oats, brown rice)</li>
              <li>Lean proteins</li>
              <li>Plenty of water</li>
              <li>Probiotic-rich foods (curd, yogurt)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-red-700">Avoid</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Fried and fatty foods</li>
              <li>Spicy foods</li>
              <li>Carbonated drinks</li>
              <li>Alcohol</li>
              <li>Processed foods</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-700">
              Reduce
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Caffeine</li>
              <li>Dairy (if intolerant)</li>
              <li>Artificial sweeteners</li>
              <li>High-FODMAP foods</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-gray-700">
          Dietary changes should be personalized. Keeping a food diary and
          working with a dietitian can help identify triggers and create a
          balanced meal plan. Gradual changes are often more effective than
          drastic restrictions.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Physical Activity</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Yoga and stretching exercises</li>
          <li>Walking, jogging, or cycling</li>
          <li>Outdoor games and sports</li>
          <li>Regular movement throughout the day</li>
        </ul>
        <p className="mt-6 text-gray-700">
          Regular exercise helps regulate bowel function and reduces stress.
          Choose activities you enjoy and aim for consistency rather than
          intensity.
        </p>
      </div>
    </main>
  );
}
