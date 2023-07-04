export default [
    {
      path: "/",
      exact: true,
      page: Nav
    },
    {
      path: "/home",
      exact: true,
      page: Home
    },
    {
      path: "/about",
      exact: true,
      page: About
    },
    {
      path: "/detail/:id",
      exact: true,
      page: Detail
    },
    {
      path: "*",
      page: PageError
    }
];
