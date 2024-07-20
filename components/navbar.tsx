"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Image } from "@nextui-org/react";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { SearchIcon } from "@/components/icons";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Image
            alt="NextUI hero Image"
            src="/images/logo.png"
            className="h-[40px]"
          />
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href="#logo-section1"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                handleScroll("logo-section1");
              }}
            >
              Home
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href="#about-section"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                handleScroll("about-section");
              }}
            >
              About Us
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href="#services-section"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                handleScroll("services-section");
              }}
            >
              Services
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href="/blog"
               
            >
              Knowledge center
            </NextLink>
          </NavbarItem>
          <NavbarMenuItem>
            <Link
               
              href="#contact-section"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("contact-section");
              }}
            >
              Contact us
            </Link>
          </NavbarMenuItem>
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href="/team"
               
            >
              Team
            </NextLink>
          </NavbarItem>
        </ul>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem>
            <Link
              color="foreground"
              href="#logo-section1"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("logo-section1");
              }}
            >
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color="foreground"
              href="#about-section"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("about-section");
              }}
            >
              About Us
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color="primary"
              href="#services-section"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("services-section");
              }}
            >
              Services
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color="foreground"
              href="/blog"
              size="lg"
              
            >
              Knowledge center
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color="danger"
              href="#contact-section"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("contact-section");
              }}
            >
              Contact us
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color="danger"
              href="/team"
             
            >
              Team
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
