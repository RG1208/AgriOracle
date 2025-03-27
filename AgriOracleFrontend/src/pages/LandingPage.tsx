import { Star, User } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <div className="h-[600px] md:h-[550px] lg:h-[620px] bg-cover bg-center relative" style={{backgroundImage: "url('/Images/coverpage.png')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container mx-auto h-full flex items-center relative z-10 px-10">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">HARVESTING THE POWER OF AI</h1>
            <p className="text-xl">Smart insights for a bountiful future</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="container mx-auto px-6 py-10 bg-[#EAFCE0]">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["AI-Powered Insights","Easy-to-Use Platform","Real-time Analysis","Sustainable Solutions","Reliable Results","Farmer-Centric"].map((feature, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-lg transition-all hover:shadow-2xl">
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-[#EAFCE0] py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">What People Say?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Rachit", rating: 5, review: "AgriOracle has completely changed the way I analyze market trends. The insights are precise and very useful!" },
              { name: "Premjeet", rating: 4, review: "The platform is user-friendly and provides accurate predictions. Highly recommended for farmers looking to maximize their yield!" },
              { name: "Akshit", rating: 5, review: "The AI-powered insights are a game changer. Now, I make informed decisions backed by real data." }
            ].map((user, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-lg transition-all hover:shadow-2xl">
                <div className="flex items-center mb-4">
                  <User className="w-12 h-12 rounded-full bg-gray-200 p-2" />
                  <div className="ml-4">
                    <h4 className="font-semibold">{user.name}</h4>
                    <div className="flex">{[...Array(user.rating)].map((_, i) => (<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />))}</div>
                  </div>
                </div>
                <p className="text-gray-600">{user.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
