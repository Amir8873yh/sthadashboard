const Avatar = ({ src, alt = "avatar", size = "w-12 h-12" }) => {
  return <img src={src} alt={alt} className={`rounded-full object-cover ${size} border border-gray-300`} />;
};

export default Avatar;
