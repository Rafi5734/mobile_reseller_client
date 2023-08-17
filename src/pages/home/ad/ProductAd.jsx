import { Box, Container, SimpleGrid, Stack, Title, TextInput, ActionIcon, useMantineTheme } from "@mantine/core";
import useGetProducts from "../../../hooks/phones/useGetProducts";
import PhoneCard from "../../products/mobile-phones/phone-card/PhoneCard";
import { IconSearch, IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function ProductAd() {
  const theme = useMantineTheme();
  const { products } = useGetProducts({ ad: true });
  const [searchValue, setSearchValue] = useState();
  const [allProducts, setAllProducts] = useState();

  const handleSearchButton = () => {
    // console.log(searchValue);
    const filterPhone = products
      ?.map((product) => {
        if (product.brand === searchValue) {
          return product;
          // <PhoneCard product={product} key={product._id} />;
        }
      })
      .filter(Boolean);

    // const searchTotalItems = ());
    setAllProducts(filterPhone?.map((item) => <PhoneCard product={item} key={item._id} />));
  };

  // console.log(allProducts?.length);

  useEffect(() => {
    const stats = products?.map((item) =>
      item ? <PhoneCard product={item} key={item._id} /> : <p key={item._id}>There have no matching products</p>,
    );
    // console.log("products", stats);
    setAllProducts(stats);
  }, [products]);

  //
  return (
    <>
      {allProducts?.length > 0 && (
        <Box id="ad" className="p-4 xs:p-10  bg-no-repeat bg-cover rounded-xl bg-featured shadow-md ">
          {/* <p style={{ marginBottom: "0px" }}>Search</p> */}
          <Container>
            <TextInput
              icon={<IconSearch size="1.1rem" stroke={1.5} />}
              radius="xl"
              size="md"
              className="mb-5 mt-0 p-0"
              style={{ width: "100%", height: "" }}
              rightSection={
                <ActionIcon
                  onClick={handleSearchButton}
                  size={32}
                  radius="xl"
                  color={theme.primaryColor}
                  variant="filled"
                >
                  {theme.dir === "ltr" ? (
                    <IconArrowRight size="1.1rem" stroke={1.5} />
                  ) : (
                    <IconArrowLeft size="1.1rem" stroke={1.5} />
                  )}
                </ActionIcon>
              }
              placeholder="Search your phone"
              rightSectionWidth={42}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </Container>

          <Container size="xl" className="bg-main-5/50 p-6 rounded-md">
            <Stack className="mb-5">
              <Title color="white" className="" order={2}>
                Featured Phones
              </Title>
            </Stack>
            <SimpleGrid className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4">
              {allProducts}
            </SimpleGrid>
          </Container>
        </Box>
      )}

      {allProducts?.length === 0 && (
        <Box id="ad" className="p-4 xs:p-10  bg-no-repeat bg-cover rounded-xl bg-featured shadow-md ">
          {/* <p style={{ marginBottom: "0px" }}>Search</p> */}
          <Container>
            <TextInput
              icon={<IconSearch size="1.1rem" stroke={1.5} />}
              radius="xl"
              size="md"
              className="mb-5 mt-0 p-0"
              style={{ width: "100%", height: "" }}
              rightSection={
                <ActionIcon
                  onClick={handleSearchButton}
                  size={32}
                  radius="xl"
                  color={theme.primaryColor}
                  variant="filled"
                >
                  {theme.dir === "ltr" ? (
                    <IconArrowRight size="1.1rem" stroke={1.5} />
                  ) : (
                    <IconArrowLeft size="1.1rem" stroke={1.5} />
                  )}
                </ActionIcon>
              }
              placeholder="Search your phone"
              rightSectionWidth={42}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </Container>

          <Container size="xl" className="bg-main-5/50 p-6 rounded-md">
            <Stack className="mb-5">
              <Title color="white" className="" order={2}>
                Featured Phones
              </Title>
            </Stack>
            <p>There have no matching phones.</p>
          </Container>
        </Box>
      )}
    </>
  );
}
