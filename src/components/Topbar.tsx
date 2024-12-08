import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

function Topbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const topbarItems = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/about",
    },
    {
      label: "Blog",
      url: "/blog",
    },
    {
      label: "Contact",
      url: "/contact",
    },
  ];

  useEffect(() => {
    const index = topbarItems.findIndex(
      (item) => item.url === location.pathname
    );
    setActiveIndex(index);
  }, [location.pathname]);

  const renderTopbarItems = () => {
    return (
      <NavbarContent className="hidden sm:flex" justify="center">
        {topbarItems.map((item, index) => (
          <NavbarItem
            key={`${item}-${index}`}
            isActive={activeIndex === index}
            className="rounded"
          >
            <Link
              onPress={() => navigate(item.url)}
              className={`p-2  ${activeIndex === index ? "text-white" : ""}`}
            >
              {item?.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    );
  };

  const renderMenuItems = () => {
    return (
      <NavbarMenu className="bg-none">
        {topbarItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full font-normal text-none"
              size="lg"
              onPress={() => navigate(item?.url)}
            >
              {item?.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    );
  };

  return (
    <Navbar
      isBordered
      maxWidth="full"
      classNames={{
        item: [
          "data-[active=true]:bg-primary",
          "data-[active=true]:text-white",
        ],
      }}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="start"></NavbarContent>
      {renderTopbarItems()}
      {renderMenuItems()}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Topbar;
