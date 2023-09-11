import { RateLimiter } from "limiter";

// TODO: Update the interval to be 20
export const limiter = new RateLimiter({ tokensPerInterval:2, interval: "min", fireImmediately: true })