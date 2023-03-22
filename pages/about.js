import Base from "@layouts/Baseof";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const AboutUsPage = () => {
  return (
    <Base title="Tentang Kami">
      <section className="section">
        <div className="container">
          <div className="flex h-[40vh] items-center justify-center">
            <div className="text-center">
              {markdownify("Belum tersedia", "h4", "")}
              {markdownify("Fitur Top Up Koin akan hadir nanti.", "p", "")}
              <br />
              <Image
                width="200"
                height="200"
                src="/images/top-up-coin-banner.jpg"
                priority
              />
              <br />
              <Link href="/" style={{"textDecoration":"underline"}}>Kembali ke Home</Link>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default AboutUsPage;
