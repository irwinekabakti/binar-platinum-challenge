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

  rest.get(`${BASE_API}/admin/v2/car`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        cars: [
          {
            id: 1,
            name: "Toyota Avanza",
            category: "medium",
            price: 100000,
            status: false,
            start_rent_at: "2022-01-01",
            finish_rent_at: "2022-01-02",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/0/0d/2019_Toyota_Avanza_1.3_G_F653RM_%2820200228%29.jpg",
            createdAt: "2023-03-29T07:23:30.265Z",
            updateAt: "2023-03-29T07:23:30.265Z",
          },
        ],
      })
    );
  }),

  rest.get(`${BASE_API}/customer/car/:id`, (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.status(200),
      ctx.json({
        id,
        name: "Toyota Avanza",
        category: "medium",
        price: 100000,
        status: false,
        start_rent_at: "2022-01-01",
        finish_rent_at: "2022-01-02",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/0d/2019_Toyota_Avanza_1.3_G_F653RM_%2820200228%29.jpg",
        createdAt: "2023-03-30T15:51:15.244Z",
        updateAt: "2023-03-30T15:51:15.244Z",
      })
    );
  }),

  rest.post(`${BASE_API}/customer/order`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        id: 1,
        total_price: 100000,
        start_rent_at: "2022-01-01",
        finish_rent_at: "2022-01-02",
        status: false,
        slip: "https://www.jurnal.id/wp-content/uploads/2021/09/contoh-nota-kosong-434x628.png",
        UserId: 1,
        CarId: 1,
      })
    );
  }),

  rest.get(`${BASE_API}/customer/order:id`, (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.status(200),
      ctx.json({
        id,
        total_price: 100000,
        start_rent_at: "2022-01-01",
        finish_rent_at: "2022-01-02",
        status: false,
        slip: "https://www.jurnal.id/wp-content/uploads/2021/09/contoh-nota-kosong-434x628.png",
        UserId: 1,
        CarId: 1,
        User: {
          id,
          email: "fain@bcr.io",
          role: "Admin",
        },
        Car: {
          id,
          name: "Toyota Avanza",
          category: "medium",
          price: 100000,
          status: false,
          start_rent_at: "2022-01-01",
          finish_rent_at: "2022-01-02",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/0/0d/2019_Toyota_Avanza_1.3_G_F653RM_%2820200228%29.jpg",
          createdAt: "2023-03-30T16:01:58.617Z",
          updateAt: "2023-03-30T16:01:58.617Z",
        },
      })
    );
  }),

  rest.put(`${BASE_API}/customer/order/:id/slip`, (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.status(200),
      ctx.json({
        id,
        total_price: 100000,
        start_rent_at: "2022-01-01",
        finish_rent_at: "2022-01-02",
        status: false,
        slip: "https://www.jurnal.id/wp-content/uploads/2021/09/contoh-nota-kosong-434x628.png",
        UserId: 1,
        CarId: 1,
      })
    );
  }),
];

export const mockServer = setupServer(...handlers);
