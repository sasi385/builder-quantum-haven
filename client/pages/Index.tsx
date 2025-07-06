export default function Index() {
  return (
    <div className="relative w-full min-h-screen max-w-md mx-auto overflow-hidden bg-white font-barlow">
      {/* Background Image */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b81dae7ad2a4c84740bb9a886b13bbe1223504e4?width=786"
        alt="Child character illustration"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 h-auto min-h-[230px] bg-yellow rounded-t-[80px] shadow-[0px_6px_0px_0px_rgba(0,0,0,0.25)] px-6 py-9 sm:px-10">
        {/* Welcome Text */}
        <h1 className="font-extrabold text-[32px] sm:text-[40px] leading-tight tracking-[2px] text-dark-brown mb-4">
          Welcome
        </h1>

        {/* Subtitle */}
        <p className="font-medium text-sm sm:text-base leading-relaxed tracking-[0.8px] text-medium-brown mb-6 sm:mb-8 max-w-[350px]">
          Hello! A safe and fun space for every child's development.
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full">
          {/* Log in Button */}
          <button className="w-full sm:flex-1 h-[52px] sm:h-[59px] rounded-full bg-dark-brown text-cream font-extrabold text-[24px] sm:text-[29px] leading-none tracking-[1.45px] text-center flex items-center justify-center transition-all duration-200 hover:bg-opacity-90 active:scale-95">
            Log in
          </button>

          {/* Sign in Button */}
          <button className="w-full sm:flex-1 h-[52px] sm:h-[59px] rounded-full bg-cream text-dark-brown font-extrabold text-[24px] sm:text-[29px] leading-none tracking-[1.45px] text-center flex items-center justify-center transition-all duration-200 hover:bg-opacity-90 active:scale-95">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
