import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';
import "dotenv/config";
// Create the rate limiter with the correct configuration
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, "60 s"),
  analytics: true
});

export default ratelimit;
