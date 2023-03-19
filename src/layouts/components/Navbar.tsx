import { Box, Flex, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, Stack, Link, Image, HStack, Menu, MenuButton, MenuItem, MenuList, VStack, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Logo from "assets/logo.png";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { responsiveLg, Routes } from "utils";
import { useStore } from "store";
import { observer } from "mobx-react-lite";

interface NavbarProps {
  isAdmin?: boolean;
}
const ClientMenuList: IMenuList[] = [
  {
    path: Routes.Home,
    name: "Home",
    isAuthenticated: false,
  },
  {
    path: Routes.Home,
    name: "About Us",
    isAuthenticated: false,
  },
  {
    path: Routes.ClientAccount,
    name: "Contact Us",
    isAuthenticated: false,
  },
  // {
  //   path: Routes.Contact,
  //   name: "Terms and Condition / Safety Precautions",
  //   isAuthenticated: true,
  // },
  // {
  //   path: Routes.Contact,
  //   name: "Success Story",
  //   isAuthenticated: true,
  // },
];
const DesktopMenu = observer(({ menu }: { menu: IMenuList[] }) => {
  return (
    <HStack spacing="36px">
      {menu.map((item) => (
        <Link href="/">{item.name}</Link>
      ))}
    </HStack>
  );
});
const MobileMenu = ({ menu }: { menu: IMenuList[] }) => {
  const {
    AppStore: { toggleMenu, menuOpen },
  } = useStore();
  const goToUrl = () => {
    if (menuOpen) toggleMenu();
  };
  return (
    <Drawer placement="right" onClose={toggleMenu} isOpen={menuOpen}>
      <DrawerOverlay />
      <DrawerContent overflowY="auto" marginTop={`65px`}>
        <DrawerCloseButton />
        <Stack spacing={4}>
          {menu.map((item) => (
            <Link href="/" onClick={goToUrl}>
              {item.name}
            </Link>
          ))}
        </Stack>
      </DrawerContent>
    </Drawer>
  );
};

const handleLogout = (isAdmin: boolean) => {
  //   storage.logout();
  window.location.href = isAdmin ? Routes.AdminLogin : Routes.PlaceOrder;
};

const AdminProfileDropdown = observer(() => {
  const navigate = useNavigate();
  const {
    AuthStore: { user },
  } = useStore();
  return (
    <Menu>
      <MenuButton>
        <HStack spacing="10px">
          <VStack spacing="1px" alignItems="flex-end">
            <Text fontSize="0.75rem">Role</Text>
            <Text fontSize="0.75rem" color="primary.main">
              {(user?.role as unknown as string)?.toLowerCase()?.replace(/^\w/, (c: string) => c.toUpperCase()) || ""}
            </Text>
          </VStack>
          {/* <UserIcon /> */}
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => navigate(Routes.ClientAccount)}>My Account</MenuItem>
        <MenuItem onClick={() => handleLogout(false)}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
});

const Navbar: React.FC<NavbarProps> = ({ isAdmin = false }) => {
  const navigate = useNavigate();
  const {
    AppStore: { toggleMenu, menuOpen },
    AuthStore: { isAuthenticated },
  } = useStore();
  // const adminLinks = isAuthenticated ? <IconButton aria-label="Account Dropdown" icon={<AccountIcon />} /> : <Link href="/login">Sign In</Link>;

  const adminLinks = isAdmin ? (
    <>
      <Link href="/admin/dashboard">Dashboard</Link>
      <Link href="/admin/products">Products</Link>
      <Link href="/admin/orders">Orders</Link>
      <Link href="/admin/customers">Customers</Link>
    </>
  ) : null;

  return (
    <Box
      bg="navbar"
      py={4}
      sx={{
        borderColor: "primary",
        borderBottomStyle: "solid",
        borderBottomWidth: "2px",
        height: "65px",
        position: "fixed",
        zIndex: 9999,
      }}
      w={`100vw`}
    >
      <Flex justify="space-between" alignItems="center" marginX="auto" px={[2, 8]}>
        <HStack gap={{ lg: "4rem" }}>
          {" "}
          {menuOpen ? <CloseIcon display={responsiveLg("unset", "none")} onClick={() => toggleMenu()} /> : <HamburgerIcon display={responsiveLg("unset", "none")} onClick={() => toggleMenu()} />}
          <Flex>
            <Image
              onClick={() => {
                navigate(Routes.Home);
              }}
              width="auto"
              maxHeight="50px"
              src={Logo}
            />
            <Text
              sx={{
                p: "1.2rem",
                letterSpacing: "1rem",
                color: "brand.100",
              }}
              fontWeight={`extrabold`}
            >
              BMND
            </Text>
          </Flex>
        </HStack>
        <Box
          sx={{
            color: "secondary",
            fontWeight: "bold",
          }}
          display={responsiveLg("none", "unset")}
        >
          <DesktopMenu menu={ClientMenuList} />
        </Box>
        {/* <Box display={{ base: "flex", md: "none" }}>
          <IconButton aria-label="Open Navigation" icon={<HamburgerIcon />} onClick={toggleMobile} size="md" variant="ghost" />
        </Box> */}
        {isAuthenticated ? (
          <AdminProfileDropdown />
        ) : (
          <Button
            sx={{
              marginBottom: "1.2rem",
            }}
            bgColor="primary"
            color="white"
          >
            Sign In
          </Button>
        )}
      </Flex>
      {menuOpen && <MobileMenu menu={ClientMenuList} />}
    </Box>
  );
};

export default observer(Navbar);
