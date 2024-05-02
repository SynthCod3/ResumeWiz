import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-6 border-t ">
      <div className="container flex items-center justify-between gap-4 px-4 text-lg md:gap-6 md:px-6 text-gray-700 border-gray-300 bg-gray-50 shadow-lg py-6 mx=8">
        <div className="flex items-center gap-2">
          <img
            alt="Logo"
            className="rounded-lg"
            height="32"
            src="/placeholder.svg"
            style={{
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
            width="32"
          />
          <span className="font-bold text-xl">RESUMEWIZ</span>
        </div>
        <nav className="flex gap-6 text-base">
          <Link href="/terms" passHref>
            <div className="font-medium text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</div>
          </Link>
          <Link href="/privacy" passHref>
            <div className="font-medium text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</div>
          </Link>
        </nav>
      </div>
    </footer>
  );
}
