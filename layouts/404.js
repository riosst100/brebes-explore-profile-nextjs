import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const NotFound = ({ data }) => {
  const { frontmatter, content } = data;

  return (
    <section className="section">
      <div className="container">
        <div className="flex h-[40vh] items-center justify-center">
          <div className="text-center">
            {markdownify("Halaman Tidak Ditemukan", "h4", "")}
            <br />
            <Image
              width="300"
              height="300"
              src="/images/404.webp"
              priority
            />
            <br />
            <Link href="/" style={{"textDecoration":"underline"}}>Kembali ke Home</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
