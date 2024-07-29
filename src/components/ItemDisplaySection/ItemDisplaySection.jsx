// //import Notes from "../../assets/notes.webp";
// import Dumbbell from "../../assets/dumbbell.webp";
// import SolderingIron from "../../assets/soldering-iron.webp";

const ItemDisplaySection = () => {
  const itemList = [
    {
      id: 1,
      title: "Analog notes",
      description: `A set of handwritten notes that of second year of analog electronics of Binu Ben Jose.`,
    },
    {
      id: 2,
      title: "Dumbbells",
      description: `Elevate your workouts with this adjustable dumbbell set. Perfect for home gyms, it offers versatility and durability in a compact package. Strengthen and tone with ease!`,
    },
    {
      id: 3,
      title: "Soldering iron",
      description: `Upgrade your toolkit with this reliable soldering iron. Perfect for electronics projects and repairs, it's a must-have for any DIY enthusiast.`,
    },
    {
      id: 4,
      title: "Analog notes",
      description: `A set of handwritten notes that of second year of analog electronics of Binu Ben Jose.`,
    },
    {
      id: 5,
      title: "Dumbbells",
      description: `Elevate your workouts with this adjustable dumbbell set. Perfect for home gyms, it offers versatility and durability in a compact package. Strengthen and tone with ease!`,
    },
    {
      id: 6,
      title: "Soldering iron",
      description: `Upgrade your toolkit with this reliable soldering iron. Perfect for electronics projects and repairs, it's a must-have for any DIY enthusiast.`,
    },
  ];

  return (
    <div className="item-section py-10 bg-white px-10">
      <h1 className="text-2xl text-black font-bold mb-8">Products</h1>
      <div className="item-container flex gap-8 overflow-x-auto scrollbar-hidden">
        {itemList.map((card) => {
          return (
            <article
              key={card.id}
              className="itemCard min-w-[300px] bg-blue-100 border-2 p-4 rounded-xl flex flex-col"
            >
              <div className="w-full mb-4 rounded-xl">
                <img
                  src='/notes.jpg'
                  alt={card.title}
                  className="rounded-md w-full"
                />
              </div>
              <h2 className="text-xl font-bold text-black mb-2">
                {card.title}
              </h2>
              <p className="text-slate-700 text-sm font-medium">
                {card.description}
              </p>
              <div className="button-div mt-auto">
                <button
                  type="button"
                  className="btn text-base text-white w-full mt-6"
                >
                  Connect to owner
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ItemDisplaySection;
