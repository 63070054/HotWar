import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const countries = [
    {
      name: "CHINA",
      icon: "/Icons/china.png",
      objectPosition: "object-left",
      link: "/CHINA",
    },
    {
      name: "PHILIPPINES",
      icon: "/Icons/philippines.png",
      objectPosition: "object-left",
      link: "/PHILIPPINES",
    },
    {
      name: "ENGLISH",
      icon: "/Icons/england.png",
      objectPosition: "object-center",
      link: "/ENGLISH",
    },
    {
      name: "THAI",
      icon: "/Icons/thailand.png",
      objectPosition: "object-left",
      link: "/THAI",
    },
  ];

  const router = useRouter();
  const { language } = router.query;

  return (
    <div className="flex gap-2 justify-center pt-4">
      {countries.map((country, index) => (
        <Link href={country.link} key={index}>
          <img
            src={country.icon}
            className={`w-8 h-8 rounded-lg object-cover ${
              country.objectPosition
            } ${country.name === language ? "border-2 border-white" : ""}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
