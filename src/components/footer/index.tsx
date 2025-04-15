import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 mt-auto bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-sm">
          <div className="flex items-center space-x-4 text-[#B0BABF]">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-conditions" className="hover:underline">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/support" className="hover:underline">
              Support
            </Link>
          </div>

          <div className="text-[#B0BABF] text-center">
            <p>
              Made with patience by{" "}
              <a
                href="/Sankeerth_FullStackDev_WithAIExp.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-medium"
              >
                Sankeerth Reddy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
