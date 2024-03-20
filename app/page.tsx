export default function SplashScreen() {
  return (
    <a
      href="/dashboard"
      className="text-lg  min-h-[100vh] justify-center flex flex-col items-center bg-gradient-to-b from-blue-400 to-blue-900"
    >
      <img src="/travel_logo.svg" />
      <h3 className="text-white max-w-48 text-center mt-8">
        Find Your Dream Destination With Us
      </h3>
    </a>
  );
}
