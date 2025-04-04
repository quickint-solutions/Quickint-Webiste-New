"use client";

import BannerTwo from "@/components/banner/BannerTwo";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import Brand from "@/components/brand/Brand";
import ServiceTwo from "@/components/services/ServiceTwo";
import TestimonialsTwo from "@/components/testimonials/TestimonialsTwo";
import BlogTwo from "@/components/blog/BlogTwo";
import CtaTwo from "@/components/cta/CtaTwo";
import dynamic from 'next/dynamic';
import ClutchWidget from "@/app/(inner)/clutch/page.js";
import ServiceOne from "@/components/services/ServiceOne";
import CaseStudies from "@/components/casestudies/CaseStudies";

export default function Home() {
  return (
    <div className="#">
      <HeaderOne />
      <BannerTwo />
      <Brand />
      <ServiceTwo />
      <ServiceOne />
      <CaseStudies />
      <ClutchWidget />
      <TestimonialsTwo />
      <BlogTwo />
      <CtaTwo />
      <FooterOne />
      <BackToTop />
    </div>
  );
}
