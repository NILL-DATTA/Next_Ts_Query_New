export const endpoints = {
  auth: {
    signin: "user/signin",
    signup: "/user/signup",
  },
  cms: {
    list: "/product/list",
    details: "/product/detail",
    remove: "/product/remove",
    create: "/product/create",
    edit: "/product/update",
  },
};

export const successNotificationEndpoints: string[] = [
  endpoints.auth.signin,
  endpoints.auth.signup,
  endpoints.cms.list,
  endpoints.cms.details,
  endpoints.cms.remove,
  endpoints.cms.create,
  endpoints.cms.edit,
];
