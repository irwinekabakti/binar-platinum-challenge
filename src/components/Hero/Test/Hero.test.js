import { describe, test, expect } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../store";
import Hero from "../Hero";

describe("Test component Hero", () => {
  test("test per component container Hero", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
      </Provider>
    );

    const containerHero = screen.getByTestId("container-Hero");
    const titleHero = screen.getByTestId("title-Hero");
    const descriptionHero = screen.getByTestId("description-Hero");

    expect(containerHero).toContainElement(titleHero);
    expect(containerHero).toContainElement(descriptionHero);
    expect(containerHero).toHaveClass("hero-title");
  });

  test("test per component title", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
      </Provider>
    );

    const titleHero = screen.getByTestId("title-Hero");

    expect(titleHero).toHaveTextContent(
      "Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)"
    );
    expect(titleHero).toBeDefined();
  });

  test("test per component description", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
      </Provider>
    );

    const descriptionHero = screen.getByTestId("description-Hero");

    expect(descriptionHero).toHaveTextContent(
      "Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam."
    );
    expect(descriptionHero).toBeDefined();
  });

  /*
  test("test per component button", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
      </Provider>
    );

    const buttonHero = screen.getByTestId("btnHero-Cars");

    expect(buttonHero).toBeEnabled();
    // expect(buttonHero).toHaveTextContent("Mulai Sewa Mobil");
  });
  */
});
