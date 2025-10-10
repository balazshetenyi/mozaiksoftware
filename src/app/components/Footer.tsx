import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center gap-1 justify-center">
            <Image
              src="/mozaiksoftwarelogo-transparent.png"
              alt="Mozaik Software Solutions"
              width={180}
              height={45}
              className="h-10 w-auto"
              priority
            />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Mozaik Software Solutions
            </h3>
          </div>
          <p className="text-gray-400 mb-4">Building ideas into reality.</p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mozaik Software Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
