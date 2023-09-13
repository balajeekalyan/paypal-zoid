window.MyPayPalZoidComponent = zoid.create({
    dimensions: {
        width: "1000px",
        height: "1000px",
    },

    // The html tag used to render my component

    tag: "paypal-component",

    // The url that will be loaded in the iframe or popup, when someone includes my component on their page

    url: new URL("paypal.html", window.location.href).href,
});