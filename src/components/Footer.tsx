import footerLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-[#eef2f7] bg-white">
      <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-5 md:px-8 md:py-14">

        {/* Top footer area */}
        <div className="grid gap-10 md:grid-cols-[1.8fr_1fr_1fr_1fr]">

          {/* Brand block */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <img
                src={footerLogo}
                alt="Dev Stack logo"
                className="object-contain"
              />
            </div>

            <p className="mx-auto mt-4 max-w-[340px] text-[14px] leading-6 text-[#94a3b8] md:mx-0">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social links */}
            <div className="mt-5 flex items-center justify-center gap-5 text-[13px] text-[#475569] md:justify-start">
              <a
                href="https://github.com/say33eed/dev-stack-picker"
                className="cursor-pointer transition-colors duration-200 hover:text-[#111827]"
              >
                GitHub
              </a>

              <a
                href="https://x.com/MdSayedMia95979"
                className="cursor-pointer transition-colors duration-200 hover:text-[#111827]"
              >
                Twitter
              </a>

              <a
                href="https://www.linkedin.com/in/md-sayed-mia-7a40ab228/"
                className="cursor-pointer transition-colors duration-200 hover:text-[#111827]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="hidden md:block">
            <h3 className="text-[12px] font-semibold uppercase tracking-wide text-[#111827]">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-[12px] text-[#94a3b8]">
              <a
                className="cursor-pointer transition-colors duration-200 hover:text-[#475569]"
              >
                Home
              </a>

              <a
                className="cursor-pointer transition-colors duration-200 hover:text-[#475569]"
              >
                Technologies
              </a>

              <a
                className="cursor-pointer transition-colors duration-200 hover:text-[#475569]"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="hidden md:block">
            <h3 className="text-[12px] font-semibold uppercase tracking-wide text-[#111827]">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-[12px] text-[#94a3b8]">
              <a
                className="cursor-pointer transition-colors duration-200 hover:text-[#475569]"
              >
                About
              </a>

              <a
                className="cursor-pointer transition-colors duration-200 hover:text-[#475569]"
              >
                Contact
              </a>

              <a
                className="cursor-pointer transition-colors duration-200 hover:text-[#475569]"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="hidden md:block">
            <h3 className="text-[12px] font-semibold uppercase tracking-wide text-[#111827]">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-[12px] text-[#94a3b8]">
              <a
                className="cursor-pointer transition-colors duration-200 hover:text-[#475569]"
              >
                Privacy Policy
              </a>

              <a
                className="cursor-pointer transition-colors duration-200 hover:text-[#475569]"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-[#eef2f7]" />

        {/* Bottom bar */}
        <div className="mt-6 flex items-center justify-between gap-4 text-[12px] text-[#a3afc2]">
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              className="cursor-pointer transition-colors duration-200 hover:text-[#475569]"
            >
              Privacy
            </a>

            <a
              className="cursor-pointer transition-colors duration-200 hover:text-[#475569]"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;