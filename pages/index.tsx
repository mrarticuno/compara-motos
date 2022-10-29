import ImageCard from "../components/imageCard/ImageCard";
export default function Home() {
  const images = [
    {
      image: "https://iili.io/bIiIPj.md.png",
      title: "ADV 150",
      description: "Honda ADV 2022",
      details: new Map([
        ["Price", "$10,000"],
        ["Mileage", "10,000"],
        ["Color", "Red"],
      ]),
    },
    {
      image: "https://iili.io/bIizMb.md.png",
      title: "PCX 160",
      description: "Honda PCX 2022",
      details: new Map([
        ["Price", "$10,000"],
        ["Mileage", "10,000"],
        ["Color", "Red"],
      ]),
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-row justify-center items-center gap-4">
        {images.map((image) => (
          <ImageCard
            key={image.title}
            image={image.image}
            title={image.title}
            description={image.description}
            details={image.details}
          />
        ))}
      </div>
    </div>
  );
}
