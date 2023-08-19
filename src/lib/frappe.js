import { FrappeApp } from "frappe-js-sdk";

export const frappeClient = new FrappeApp(import.meta.env.SERVER_URL, {
    useToken: true,
    token: () => import.meta.env.API_TOKEN,
    type: "token"
})
