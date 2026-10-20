import configPromise from "@payload-config"
import { getPayload, type Payload } from "payload"

let payloadConfig = await getPayload({
  config: configPromise,
})

export const payload: Payload = payloadConfig
