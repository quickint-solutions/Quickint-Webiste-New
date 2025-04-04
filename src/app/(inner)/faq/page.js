
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";

import CtaOne from "@/components/cta/CtaOne";
import FaqOne from "@/components/faq/FaqOne";
import HeaderOne from "@/components/header/HeaderOne";
export default function Home() {
    return (
        <div className='#'>
            <HeaderOne />
            <FaqOne />
            <CtaOne />
            <FooterOne />
            <BackToTop />
        </div>
    );
}
