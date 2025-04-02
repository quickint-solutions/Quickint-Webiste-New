import BannerTwo from "@/components/banner/BannerTwo";
import CaseStudies from "@/components/casestudies/CaseStudies";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import Brand from "@/components/brand/Brand";
import ServiceTwo from "@/components/services/ServiceTwo";
import CaseStudiesTwo from "@/components/casestudies/CaseStudiesTwo";
import TestimonialsTwo from "@/components/testimonials/TestimonialsTwo";
import BlogTwo from "@/components/blog/BlogTwo";
import CtaTwo from "@/components/cta/CtaTwo"


export default function Home() {
  return (
    <div className='#'>
      <HeaderOne />
      <BannerTwo />
      <Brand />
      <ServiceTwo />
      <CaseStudiesTwo />
      <TestimonialsTwo />
      <BlogTwo />
      <CtaTwo />
      <FooterOne />
      <BackToTop />
    </div>
  );
}
