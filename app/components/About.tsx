"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutKheowzoo() {
  const [activeTab, setActiveTab] = useState<"who" | "why" | "vision">("who");

  const imageAnimation = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    transition: { duration: 0.7, ease: "easeInOut" },
  };

  const textAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.7, delay: 0.3, ease: "easeInOut" },
  };

  return (
    <section className="py-8 bg-black" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          About Kheowzoo
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          {["who", "why", "vision"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "who" | "why" | "vision")}
              className={`px-6 py-2 font-semibold ${
                activeTab === tab ? "text-color-primary" : "text-gray-600"
              }`}
            >
              {tab === "who" && "Who We Are"}
              {tab === "why" && "Why Us"}
              {tab === "vision" && "Vision and Mission"}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="text-center">
          {activeTab === "who" && (
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div {...imageAnimation} className="flex-1">
                <Image
                  src="/WebGallery/photos/img58.jpg"
                  alt="Kheowzoo Team"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                  priority
                  placeholder="blur"
                  blurDataURL="/WebGallery/photos/blurred-img58.jpg"
                />
              </motion.div>
              <motion.div
                {...textAnimation}
                className="flex-1 text-center text-gray-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Kheowzoo CTO:
                </h3>
                <p>
                  Home of Meme Animals! Led by a Chinese team as a CTO project,
                  kheowzoo gives every meme animal a home and provides a place
                  for crypto players tired of endless PVP. kheowzoo is the
                  world&apos;s first CTO leading project promoted by the Chinese
                  community. The community adheres to long-term construction and
                  opposes the current vicious PVP infringement on meme culture.
                </p>
                <p className="mt-4">
                  With the purpose of creating a cultural home for harmony and
                  co-prosperity in the crypto world, the community is committed
                  to &quot;providing a home for all stray animals and a home for
                  all homeless meme holders.&quot; We call on meme lovers who
                  love peace and are enthusiastic about building cultural
                  communities to join us.
                </p>
              </motion.div>
            </div>
          )}

          {activeTab === "why" && (
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div {...imageAnimation} className="flex-1">
                <Image
                  src="/WebGallery/photos/img26.jpg"
                  alt="Kheowzoo Features"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                  placeholder="blur"
                  blurDataURL="/WebGallery/photos/blurred-img26.jpg"
                />
              </motion.div>
              <motion.div
                {...textAnimation}
                className="flex-1 text-center text-gray-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Why Us</h3>
                <p>
                  Home of Meme Animals! Led by a Chinese team as a CTO project,
                  kheowzoo gives every meme animal a home and provides a place
                  for crypto players tired of endless PVP.
                </p>
              </motion.div>
            </div>
          )}

          {activeTab === "vision" && (
            <motion.div {...textAnimation} className="px-8">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Vision and Mission
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  {...imageAnimation}
                  className="bg-[#964B00] shadow-lg rounded-lg p-6 text-center"
                >
                  <h4 className="text-xl font-semibold text-color-primary mb-4">
                    Our Vision
                  </h4>
                  <p className="text-white">
                    To lead the global Web3 revolution by creating a digital
                    ecosystem that fosters innovation and inclusivity.
                  </p>
                </motion.div>

                <motion.div
                  {...imageAnimation}
                  className="bg-[#964B00] shadow-lg rounded-lg p-6 text-center"
                >
                  <h4 className="text-xl font-semibold text-color-primary mb-4">
                    Our Mission
                  </h4>
                  <p className="text-white">
                    Empowering users and communities through state-of-the-art
                    technology, promoting growth and sustainability.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
