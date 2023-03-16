import { setupWorker, rest } from "msw";
import BASE_API from "../api/BASE_API";

const worker = setupWorker(
  rest.post(`${BASE_API}/customer/auth/login`, (req, res, ctx) => {
    return res(
      ctx.json({
        access_token: "test post",
      })
    );
  })
);

worker.start();
