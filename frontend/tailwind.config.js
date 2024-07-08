/** @type {import("tailwindcss").Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "banner-hero": "url('src/assets/banner-hero.png')"
            }
        }
    },
    plugins: []
}
