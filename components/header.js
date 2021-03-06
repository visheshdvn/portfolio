export default function Header() {
  return (
    <header
      id="home"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(16,16,16,0.3), rgba(16,16,16,0.3)), url(headerbg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen relative"
    >
      <div className="absolute top-1/2 transform -translate-y-1/2 left-14 font-secondary">
        <h2 className="text-3xl mb-2">Hi! I am</h2>
        <h1 className="font-primary text-8xl mb-2">Vishesh Dhawan</h1>
        <h2 className="text-3xl">
          & I am a <span className="text-blue-600">Web Developer</span>
        </h2>
      </div>
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
        <SocialButtons media="linkedin" />
        <SocialButtons media="github" />
        <SocialButtons media="twitter" />
        <SocialButtons media="leetcode" />
        <SocialButtons media="lumbytes" />
      </div>
    </header>
  );
}

function SocialButtons({ media }) {
  return (
    <div className="social-icons-header cursor-pointer rounded-full transform transition-all duration-300 overflow-hidden hover:bg-gray-800">
      <img src={`/icons/${media}.svg`} alt={`${media} icon`} className="" />
    </div>
  );
}
