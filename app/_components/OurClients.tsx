import Image from "next/image";

const clients = [
  {
    name: "Nørda",
    year: "2025",
    logo: "https://ik.imagekit.io/msmrd69gi/knos%20website/ckzgFZfLV9VqmuWWwZBHsT3oVQ.svg",
  },
  {
    name: "Velin",
    year: "2025",
    logo: "https://ik.imagekit.io/msmrd69gi/knos%20website/uEMUZbpEEjiUl5sIgiqzc44cbaI.svg",
  },
  {
    name: "Forma",
    year: "2024",
    logo: "https://ik.imagekit.io/msmrd69gi/knos%20website/FP406q3SMCvP2TgmzOGS4dzVXY.svg",
  },
  {
    name: "Lune",
    year: "2023",
    logo: "https://ik.imagekit.io/msmrd69gi/knos%20website/6vOnf4cpVDDReCoKaAfqrrrMiCs.svg",
  },
  {
    name: "Studio Oko",
    year: "2023",
    logo: "https://ik.imagekit.io/msmrd69gi/knos%20website/VT65uKEswKentc2h9lqdwou92M.svg",
  },
  {
    name: "Aren",
    year: "2022",
    logo: "https://ik.imagekit.io/msmrd69gi/knos%20website/f0j1ZzlIdeBRI2c0zx6eQ2GGCVU.svg",
  },
];

export default function OurClients() {
  return (
    <section className="w-full py-16 md:py-28">
     <div className="px-4 md:px-10 min-[1920px]:max-w-7xl mx-auto">
         <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0">
        {/* Left: text */}
        <div className="w-full lg:w-[40%] shrink-0">
          <p className="text-sm md:text-base text-gray-500 mb-1 font-medium">
            <span className="text-gray-800">06</span> |
            <span className="font-semibold text-gray-900"> Our clients</span>
          </p>

          <p className="text-xs md:text-sm text-gray-400 mb-6 md:mb-8">
            Averra®
          </p>
        </div>

        {/* Right: grid */}
        <div className="w-full lg:flex-1 grid grid-cols-2 sm:grid-cols-3 p-1.5 gap-1.5 bg-[#EBEBEB] rounded-xl">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-white rounded-xl flex flex-col items-center justify-between px-3 py-4 transition-colors duration-200"
            >
              {/* Client Name */}
              <span className="text-xs sm:text-sm text-[#757575] tracking-wide text-center">
                {client.name}
              </span>

              {/* Logo Image */}
              <div className="flex flex-1 items-center justify-center w-full my-6 sm:my-10 md:my-16">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={56}
                  height={56}
                  className="object-contain grayscale w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                />
              </div>

              {/* Year */}
              <span className="text-xs sm:text-sm text-[#757575]">
                {client.year}
              </span>
            </div>
          ))}
        </div>
      </div>
     </div>
    </section>
  );
}
