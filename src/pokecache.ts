export type CacheEntry<T> = {
  val: T;
  createdAt: number;
};

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalID: NodeJS.Timeout | undefined = undefined;
  #interval: number;
  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();
  }
  add<T>(key: string, val: T) {
    this.#cache.set(key, { val, createdAt: Date.now() });
  }

  get<T>(key: string): T | undefined {
    const entry = this.#cache.get(key);
    if (!entry) return undefined;
    return entry.val as T;
  }

  #reap() {
    const now = Date.now();
    for (const [key, entry] of this.#cache.entries()) {
        if (now - this.#interval > entry.createdAt) {
            this.#cache.delete(key);
        }
    }
  }

  #startReapLoop() {
    if (this.#reapIntervalID) return;
    this.#reapIntervalID = setInterval(() => {
      this.#reap();
    }, this.#interval);
  }

  stopReapLoop() {
    if (!this.#reapIntervalID) return;
    clearInterval(this.#reapIntervalID);
    this.#reapIntervalID = undefined;
  }
}