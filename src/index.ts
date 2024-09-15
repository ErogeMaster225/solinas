import { swagger } from "@elysiajs/swagger"
import { Elysia } from "elysia"
import { Innertube } from "youtubei.js/web"

const youtube = await Innertube.create()

const app = new Elysia()
    .use(swagger())
    .get("/", () => "Hello Elysia")
    .get("/youtube/:id", async ({ params: { id } }) => {
        const data = await youtube.getBasicInfo(id)
        return data.basic_info
    })
    .listen(Bun.env.ELYSIA_PORT ?? 3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
