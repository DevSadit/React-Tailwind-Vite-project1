import PropTypes from "prop-types";
const PriceOption = ({ option, }) => {
  const { gym_offer, price, features } = option;
  return (
    <div className="bg-amber-400 md:p-10 py-10 px-4 rounded-lg mx-4 md:mx-0">
      <h1 className="text-center mb-4">
        <span className="md:text-5xl text-3xl font-bold">{gym_offer}</span>
      </h1>
      <h3 className="text-center text-3xl font-semibold">
        {price} 
        <span className="text-2xl">/month</span>
      </h3>
      <ul className="text-center mt-8">
        {features.map((item, i) => (
          <li className="mb-4" key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
