
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";

import BannerCaseStudies from "@/components/banner/BannerCaseStudies";
import CtaFour from "@/components/cta/CtaFour";
import Head from "next/head";
import HeaderOne from "@/components/header/HeaderOne";

export default function Home() {
    return (
        <div className='#'>
            <HeaderOne />
            <BannerCaseStudies />
            <CtaFour />
            <FooterOne />
            <BackToTop />
        </div>
    );
}
