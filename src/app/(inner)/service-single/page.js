
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";

import FeatureTwo from "@/components/feature/FeatureTwo";
import ServiceSingle from "@/components/banner-service/ServiceSingle";
import TestimonialsFive from "@/components/testimonials/TestimonialsFive";
import CtaSix from "@/components/cta/CtaSix";
import SingleDetails from "@/components/service-component/SingleDetails";
import MoreSolutions from "@/components/service-component/MoreSolution";
import HeaderOne from "@/components/header/HeaderOne";
import TestimonialsThree from "@/components/testimonials/TestimonialsThree";
import ServiceSix from "@/components/services/ServiceSix";

export default function Home() {
    return (
        <div className='#'>
            <HeaderOne />
            <ServiceSingle />
            <SingleDetails />
            <ServiceSix />
            <FeatureTwo />
            <TestimonialsThree />
            <CtaSix />
            <FooterOne />
            <BackToTop />
        </div>
    );
}
