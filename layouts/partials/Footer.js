import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { footer } = menu;
  return (
    <footer className="section pb-0" style={{
      "backgroundColor": "rgb(10, 17, 27)"
    }}>
      <div className="container">
        {/* footer menu */}
        <div className="row">
          {footer.map((col) => {
            return (
              <div className="mb-12 sm:col-6 lg:col-3" key={col.name}>
                <h2 className="h4" style={{
                  "color": "#d4d4d4"
                }}>{col.name}</h2>
                <ul className="mt-6">
                  {col?.menu.map((item) => (
                    <li className="mb-1" key={item.text}>
                      <Link href={item.url} rel="">
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          {/* social icons */}
          <div className="md-12 sm:col-6 lg:col-3">
            {markdownify("Developed By", "p", "mb-3")}
            <Link href="https://inovasiaktif.com/?source=brebesexplore_footer">
              <Image
                src="/images/inovasiaktif_logo_text_white.png"
                width="150"
                height="150"
                alt=""
              />
            </Link>
            <span style={{"color":"#b5b5b5"}}>{markdownify("Desa Tiwulandu, Kec. Banjarharjo, Kabupaten Brebes", "p", "text-sm mt-2 mb-6")}</span>
            <Social source={social} className="social-icons mb-8" />
          </div>
        </div>
        {/* copyright */}
        <div className="border-t py-6" style={{
          "borderColor": "#565656"
        }}>
          {markdownify(copyright, "p", "text-sm text-center")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
