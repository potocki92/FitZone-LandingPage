const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
        <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse shadow-lg shadow-orange-500/50"></div>
      </div>
    </div>
  );
};
export default ScrollIndicator;
