import { getXataClient } from "./src/xata"
const client = getXataClient()

export const load = (async () => {
    return {requests: await client.db.Requests.getAll()}
})
