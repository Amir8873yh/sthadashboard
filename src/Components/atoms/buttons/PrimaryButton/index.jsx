const PrimaryButton = ({ btnTitle, handler, type, btnCss, loading }) => {
  return (
    <button
      type={type}
      onClick={handler}
      disabled={loading}
      className={`bg-gradient-to-l from-[oklch(0.65_0.07_212.19)] to-gray-600 w-full flex justify-center items-center py-2 px-3 rounded-lg text-md font-semibold text-white ${btnCss}`}
    >
      {loading ? <div className="w-8 h-8 border-4 border-amber-100 border-t-transparent rounded-full animate-spin"></div> : <>{btnTitle}</>}
    </button>
  );
};

export default PrimaryButton;
