import { MetadataRoute } from "next"

export default function manifest() : MetadataRoute.Manifest
{
    return {
        id: "@optly/saas-cms-demo",
        name: `Mosey Bank online`,
        short_name: "Mosey Bank",
        description: "The Mosey Bank digital environment",
        icons:[
            {src:"/android-chrome-192x192.png",sizes:"192x192",type:"image/png"},
            {src:"/android-chrome-512x512.png",sizes:"512x512",type:"image/png"}
        ],
        theme_color:'#115e59',
        background_color:'#115e59',
        display:"standalone",
        display_override: ["fullscreen", "minimal-ui"],
        start_url: "/",
        protocol_handlers: [{
            "protocol": "web+moseybank",
            "url": "/api/link?id=%s"
        }],
        orientation: "portrait-primary"
    }
}