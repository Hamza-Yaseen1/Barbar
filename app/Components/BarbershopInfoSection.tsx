type IFeature = {
  title: string
}

const features: IFeature[] = [
  { title: "Always welcoming environment" },
  { title: "Our masters focus on the quality" },
  { title: "We value both the time and the money of our clients" },
  { title: "We work only with high-quality, hypoallergenic premium products" },
  { title: "All surfaces and tools are cleaned, disinfected before and after using" },
]

const BarbershopInfoSection = () => {
  return (
    <section
      className="relative p-8 mt-28 bg-cover bg-center text-gray-900"
      style={{ backgroundImage: "url('/images/image 9.png')" }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="font-bold text-3xl mb-3 text-center">Why Choose Us</h1>
        <h2 className="text-lg text-center mb-8">
          In addition, here are 5 more reasons why men prefer Manhattan Barbershop N.Y.C:
        </h2>

        <ul className="space-y-4 list-disc list-inside">
          {features.map((item, i) => (
            <li key={i} className="text-base leading-relaxed">
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default BarbershopInfoSection
