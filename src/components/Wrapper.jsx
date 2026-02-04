const Wrapper = ({ children }) => {
  return (
    <>
      <div className="bg-wrapper">
        <div className="bg-orb-3"></div>
      </div>
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="bg-white/90 backdrop-blur-xl w-full max-w-[450px] p-10 rounded-3xl shadow-2xl border border-white/20">
          {children}
        </div>
      </div>
    </>
  );
};

export default Wrapper;
