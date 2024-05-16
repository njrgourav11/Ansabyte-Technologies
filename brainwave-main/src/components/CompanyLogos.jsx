import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="h2 mb-6 text-center text-white text-n-1/50">
        Our Partners
      </h2>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={`Partner Logo ${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
