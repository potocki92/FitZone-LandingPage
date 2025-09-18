const BackgroundLayer = () => {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/modern-gym-interior-with-equipment-and-weights.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
    </>
  );
};

export default BackgroundLayer;