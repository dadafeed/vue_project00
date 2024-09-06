const withPrefix = (prefix, routes) =>
  routes.map((route) => {
    route.path = prefix + route.path;
    return route;
});

const pageRouter = {
  path: "/",
  name: "layout",
  redirect: "/main",
  component: () => import("@/layout/index.vue"),
  children: [
    {
      path: "/main",
      name: "main",
      component: () => import("@/views/main.vue"),
    },
    // {
    //   path: "/book",
    //   name: "book",
    //   component: () => import("@/views/Books.vue"),
    // },
    ...withPrefix("/book", [
      {
        path: "/",
        component: () => import("@/views/Books.vue"),
      },
      {
        name: "book",
        path: "/:tabId",
        component: () => import("@/views/Books.vue"),
      },
    ]), // '현재 주소(/book) + 쿼리 문자열(/:tabId)'로 변경된 경로를 반환함
    {
      path: "/reference",
      name: "reference",
      component: () => import("@/views/reference.vue"),
    },
    {
      path: "/movieclass",
      name: "movieclass",
      component: () => import("@/views/movieclass.vue"),
    },
    {
      path: "/classsample",
      name: "classsample",
      component: () => import("@/views/classsample.vue"),
    },
    {
      path: "/company",
      name: "company",
      component: () => import("@/views/company.vue"),
    },
  ],
};

export default pageRouter;
