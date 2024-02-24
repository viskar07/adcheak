import { NavLinks } from "@/constant";
import { MetadataRoute } from "next";

export default async function sitemaps():Promise<MetadataRoute.Sitemap> {
    const routeEntries:MetadataRoute.Sitemap = NavLinks.map((items)=>({
        url :`${process.env.NEXT_PUBLIC_BASE_URL}${items.route}`
    }))
    return [
        ...routeEntries
    ]
}