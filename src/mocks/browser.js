import { rest } from "msw";
import BASE_API from "../api/BASE_API";
import { setupServer } from "msw/node";

const handlers = [
  rest.post(`${BASE_API}/customer/auth/register`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        role: "test register",
      })
    );
  }),
  rest.post(`${BASE_API}/customer/auth/login`, (req, res, ctx) => {
    return res(
      ctx.json({
        access_token: "test post customer login",
      })
    );
  }),
];

export const mockServer = setupServer(...handlers);
