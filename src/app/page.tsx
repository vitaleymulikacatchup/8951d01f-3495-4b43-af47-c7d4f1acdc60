"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Star, Sparkles, ChefHat, Waves, Bed, MessageCircle, TrendingUp, Heart, Users } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "product" },
            { name: "Amenities", id: "feature" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grandeur Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
          className="bg-card/80 backdrop-blur-md"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Redefined"
          description="Indulge in world-class accommodations, exquisite dining, and unparalleled service at the heart of the city"
          tag="Five-Star Excellence"
          tagIcon={Award}
          buttons={[
            { text: "Book Your Stay", href: "https://booking.example.com" },
            { text: "Explore Rooms", href: "product" }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel lobby with elegant décor and ambient lighting"
        />
      </div>
      
      <div id="about" data-section="about">
        <TextSplitAbout
          title="Grandeur Hotel"
          description={[
            "Where timeless elegance meets modern luxury. For over three decades, we've been the premier destination for discerning travelers seeking exceptional experiences.",
            "Our commitment to personalized service and attention to detail ensures every guest feels truly special. Welcome to your home away from home."
          ]}
          buttons={[
            { text: "Our Story", href: "about" }
          ]}
          showBorder={true}
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Discover exceptional facilities designed to exceed your expectations"
          tag="Premium Services"
          tagIcon={Star}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your mind and body with our award-winning spa treatments and state-of-the-art fitness center",
              icon: Sparkles
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor culinary masterpieces crafted by our Michelin-trained chefs using the finest local ingredients",
              icon: ChefHat
            },
            {
              title: "Rooftop Pool & Terrace",
              description: "Unwind in our infinity pool while enjoying breathtaking panoramic city views from our exclusive rooftop",
              icon: Waves
            }
          ]}
          carouselMode="buttons"
        />
      </div>
      
      <div id="product" data-section="product">
        <ProductCardTwo
          title="Luxury Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites"
          tag="Premium Rooms"
          tagIcon={Bed}
          products={[
            {
              id: "deluxe-room",
              brand: "Grandeur Hotel",
              name: "Deluxe City View Room",
              price: "$299/night",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant deluxe hotel room with city view"
            },
            {
              id: "executive-suite",
              brand: "Grandeur Hotel",
              name: "Executive Suite",
              price: "$599/night",
              rating: 5,
              reviewCount: "890",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Spacious executive suite with luxury amenities"
            },
            {
              id: "penthouse",
              brand: "Grandeur Hotel",
              name: "Penthouse Suite",
              price: "$1,299/night",
              rating: 5,
              reviewCount: "456",
              imageSrc: "https://images.pexels.com/photos/10812974/pexels-photo-10812974.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxurious penthouse suite with panoramic city views"
            }
          ]}
          carouselMode="buttons"
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Discover why travelers from around the world choose Grandeur Hotel"
          tag="Guest Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Matthews",
              role: "CEO",
              company: "Matthews & Associates",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Matthews"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Investment Director",
              company: "Global Ventures",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Isabella Rodriguez",
              role: "Creative Director",
              company: "Studio Innovate",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8558897/pexels-photo-8558897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Isabella Rodriguez"
            },
            {
              id: "4",
              name: "James Wellington",
              role: "Managing Partner",
              company: "Wellington Group",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Wellington"
            }
          ]}
          carouselMode="buttons"
        />
      </div>
      
      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Excellence in Numbers"
          description="Discover the achievements that make us the preferred choice for luxury travelers"
          tag="Our Success"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "30",
              title: "years",
              description: "Of exceptional hospitality service",
              icon: Award
            },
            {
              id: "2",
              value: "98%",
              title: "satisfaction",
              description: "Guest satisfaction rating consistently achieved",
              icon: Heart
            },
            {
              id: "3",
              value: "50K+",
              title: "guests",
              description: "Delighted guests from around the world",
              icon: Users
            }
          ]}
          carouselMode="buttons"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="Our dedicated concierge team is here to assist you with reservations, special requests, or any questions about your stay"
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "How can we make your stay exceptional?",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
          imageSrc="https://images.pexels.com/photos/6474521/pexels-photo-6474521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional hotel concierge ready to assist guests"
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grandeur Hotel"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "product" },
                { label: "Amenities", href: "feature" },
                { label: "Dining", href: "https://dining.example.com" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Careers", href: "https://careers.example.com" }
              ]
            },
            {
              items: [
                { label: "Reservations", href: "https://booking.example.com" },
                { label: "Special Offers", href: "https://offers.example.com" },
                { label: "Guest Services", href: "https://services.example.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}