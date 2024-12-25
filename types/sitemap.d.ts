declare module "sitemap" {
  import { Readable } from "stream";

  export interface SitemapStreamOptions {
    hostname: string;
    lastmodDateOnly?: boolean;
    xmlns?: { [key: string]: string };
  }

  export interface SitemapItem {
    url: string;
    changefreq?:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never";
    priority?: number;
    lastmod?: string | Date;
  }

  export class SitemapStream {
    constructor(options: SitemapStreamOptions);
    pipe<T extends NodeJS.WritableStream>(destination: T): T;
  }

  export function streamToPromise(stream: Readable): Promise<Buffer>;
}
