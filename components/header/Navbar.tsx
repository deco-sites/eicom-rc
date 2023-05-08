import HeaderSearchMenu from "deco-sites/fashion/islands/HeaderSearchMenu.tsx";
import HeaderButton from "deco-sites/fashion/islands/HeaderButton.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "deco-sites/fashion/components/search/Searchbar.tsx";

function Navbar({ items, searchbar }: {
  items: INavItem[];
  searchbar: SearchbarProps;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="md:hidden flex flex-row justify-between items-center border-b border-base-200 w-full pl-2 pr-6 gap-2"
      >
        <HeaderButton variant="menu" />

        <a
          href="/"
          class="flex-grow inline-flex items-center"
          style={{ minHeight: navbarHeight }}
          aria-label="Store logo"
        >
          <img
            class="w-[200px]"
            src="https://global-uploads.webflow.com/611d568e03584148cb24ca2b/61fd19835f24c1373852d98c_EICOM-Institute-logo-black.svg"
          />
        </a>

        <div class="flex gap-1">
          <HeaderButton variant="search" />
          <HeaderButton variant="cart" />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-center items-center border-b border-base-200 w-full pl-12 pr-6">
        <div class="justify-center w-44">
          <a
            href="/"
            aria-label="Store logo"
            class="block  m px-6 py-3 w-[160px]"
          >
            <img
              class="w-[200px]"
              src="https://global-uploads.webflow.com/611d568e03584148cb24ca2b/61fd19835f24c1373852d98c_EICOM-Institute-logo-black.svg"
            />
          </a>
        </div>
        <div class="flex-auto flex justify-center">
          {items.map((item) => <NavItem item={item} />)}

          <HeaderButton variant="search" />
          <HeaderSearchMenu searchbar={searchbar} />
        </div>
        {
          /* <div class="flex-none w-44 flex items-center justify-end gap-2">


        </div> */
        }
      </div>
    </>
  );
}

export default Navbar;
