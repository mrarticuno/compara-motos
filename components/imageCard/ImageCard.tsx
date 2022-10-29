interface ImageCardProps {
  image: string;
  title: string;
  description: string;
  details?: Map<string, string>;
}

const ImageCard = (props: ImageCardProps) => {
  const { image, title, description, details } = props;
  return (
    <div className="flex flex-col h-full w-5/12 border border-solid border-white rounded-lg shadow-sm shadow-white gap-5">
      <img
        src={image}
        className="w-full h-[300px] object-cover rounded-md bg-white"
      />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="text-white">{description}</p>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        {details &&
          Array.from(details).map(([key, value]) => (
            <div
              className="flex flex-row border justify-between border-solid border-[#c0c0c0] rounded-md w-full p-2"
              key={key}
            >
              <p className="text-white">{key}</p>
              <p className="text-white">{value}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

// Default props
ImageCard.defaultProps = {
  image: "https://via.placeholder.com/150",
  title: "Default title",
  description: "Default description",
};

export default ImageCard;
