module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      profooter: "#191E3A",
      secondary: "#E6E8ED",
      sidebar: "#F1F2F3",
      cardcolor: "#FBFBF2",
    }),
    extend: {
      colors: {
        primary: {
          100: "#674dbf",
        },
        red: {
          100: "#DC2626",
        },
        success: {
          100: "#73f5c5",
          200: "#11ed09",
        },
        secondary: {
          100: "#5d4fe0",
        },
      },
      boxShadow: {
        "lg-primary": "0 10px 20px 2px #6f4beb",
        "lg-red": "0 10px 20px 0 #DC2626",
        "lg-success": "0 10px 30px 2px #32cc2d",
        "lg-success-50": "0 1px 20px 10px #165239",
        "lg-secondary": "0 10px 30px 2px #5d4fe0",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 10s ease-out",
        "fade-out-down": "fade-out-down 10s ease-out",
        "fade-in-up": "fade-in-up 10s ease-out",
        "fade-out-up": "fade-out-up 10s ease-out",
      },
      spacing: {
        "73px": "73px",
        97: "449px",
        98: "490px",
        99: "510px",
        100: "770px",
        68: "0.0300rem",
        85: "370px",
        box: "1070px",
        29: "114px",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
