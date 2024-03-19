import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const gym = [
    {
      id: 1,
      gym_offer: "Monthly Membership",
      price: 50,
      features: ["Access to gym facilities", "Free group classes"],
    },
    {
      id: 2,
      gym_offer: "Yearly Membership",
      price: 500,
      features: ["Discounted personal training sessions", "Unlimited access"],
    },
    {
      id: 3,
      gym_offer: "Personal Training",
      price: 30,
      features: ["One-on-one training", "Customized workout plans"],
    },
    {
      id: 4,
      gym_offer: "Group Classes",
      price: 10,
      features: ["Variety of classes", "Experienced instructors"],
    },
  ];

  return (
    <div className="grid md:grid-cols-3  gap-4">
      {gym.map((option) => (
        <PriceOption
          key={gym.id}
          
          option={option}
        ></PriceOption>
      ))}
    </div>
  );
};

export default PriceOptions;
