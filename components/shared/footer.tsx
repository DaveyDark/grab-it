import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="bg-green-100 w-screen p-32 pb-4 flex flex-col">
      <div className="flex justify-around">
        <div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-navbarGreen mb-2">
              Useful Links
            </h2>
            <div className="w-full justify-between flex flex-row gap-8">
              <div className="flex flex-col">
                <Link href="/about-us">About Us</Link>
                <Link href="/become-a-seller">Become a Seller</Link>
                <Link href="/contact-us">Contact Us</Link>
              </div>
              <div className="flex flex-col">
                <Link href="/blogs">Blogs</Link>
                <Link href="/how-do-we-work">How do we work</Link>
                <Link href="/delivery-partners">Delivery Partners</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <h2 className="text-2xl font-bold text-navbarGreen mb-2">
              Follow Us On
            </h2>
            <div className="flex flex-row gap-3">
              <div className="flex flex-col gap-3">
                <Image
                  src="/assets/FacebookLOGO.png"
                  width={30}
                  height={30}
                  alt="Facebook"
                />
                <Image
                  src="/assets/InstagramLOGO.png"
                  width={30}
                  height={30}
                  alt="Instagram"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Image
                  src="/assets/Linkedinlogo.png"
                  width={30}
                  height={30}
                  alt="Linkedin"
                />
                <Image
                  src="/assets/TwitterLOGO.png"
                  width={30}
                  height={30}
                  alt="Twitter"
                />
              </div>
            </div>
          </div>
          <div>Follow us on</div>
        </div>
        <div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-navbarGreen mb-2">
              Categories
            </h2>
            <div className="w-full justify-between flex flex-row gap-8">
              <div className="flex flex-col">
                <Link href="/about-us">Grocery and Kitchen</Link>
                <Link href="/become-a-seller">Snacks and Drinks</Link>
                <Link href="/contact-us">Household and Personal Care</Link>
              </div>
              <div className="flex flex-col">
                <Link href="/blogs">Blogs</Link>
                <Link href="/how-do-we-work">How do we work</Link>
                <Link href="/delivery-partners">Delivery Partners</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-12">GrabIt Private Limited</p>
    </section>
  );
};

export default Footer;
