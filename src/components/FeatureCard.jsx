const FeatureCard = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
      <h2 className="text-3xl font-bold text-amber-600">{value}</h2>
      <p className="mt-2 text-gray-600">{title}</p>
    </div>
  );
};

export default FeatureCard;