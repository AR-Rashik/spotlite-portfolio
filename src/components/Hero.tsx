import React from "react";
import Container from "./Container";
import Image from "next/image";
import profile from "@/img/profile.jpg";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MastodonIcon,
  TwitterIcon,
} from "./SocialIcons";

interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  // You can adjust the type of `icon` based on the actual type of your icon components
}

const Hero = () => {
  function SocialLink({ href, icon: Icon, ...props }: SocialLinkProps) {
    return (
      <Link href={href} className="group -m-1 p-1" {...props}>
        <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-secondaryDarkText dark:group-hover:fill-primaryDarkText" />
      </Link>
    );
  }

  return (
    <Container className=" -mt-4">
      <div className="max-w-2xl">
        <Image
          src={profile}
          alt="Profile logo"
          className="w-16 h-16 rounded-full object-cover mb-6"
        />
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-primaryDarkText">
          Mozammel Hoshen Chowdhury
        </h1>
        <h3 className="mt-3 text-2xl tracking-tight text-zinc-800 sm:text-2xl dark:text-primaryDarkText">
          Software Engineer
        </h3>
        <p className="mt-6 text-base text-zinc-600 dark:text-secondaryDarkText">
          I’m John Doe, a software Engineer and entrepreneur . Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Unde, veniam vel officiis
          impedit et dolorum quasi est labore! Maxime quae magnam mollitia
          nobis. Aut, alias?.
        </p>

        <div className="mt-6 flex gap-6">
          <SocialLink
            href={siteConfig.author.twitter}
            aria-label="Follow on Twitter"
            icon={TwitterIcon}
          />
          <SocialLink
            href={siteConfig.author.instagram}
            aria-label="Follow on Instagram"
            icon={InstagramIcon}
          />
          <SocialLink
            href="https://github.com"
            aria-label="Follow on GitHub"
            icon={GitHubIcon}
          />
          <SocialLink
            href={siteConfig.author.linkedin}
            aria-label="Follow on LinkedIn"
            icon={LinkedInIcon}
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
