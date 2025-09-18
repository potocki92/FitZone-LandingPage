const AnimateDots = () => {
  return (
    <div className=" inset-0 opacity-20">
      <div className="absolute top-20 left-20 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-pulse animate-delay-200"></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse animate-delay-400"></div>
      <div className="absolute bottom-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse animate-delay-600"></div>
    </div>
  );
};
export default AnimateDots;
