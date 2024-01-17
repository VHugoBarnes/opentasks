import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "OpenTasks Docs",
      social: {
        github: "https://github.com/VHugoBarnes/opentasks",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Getting Started", link: "/guides/getting-started" },
          ],
        },
        {
          label: "How OpenTasks was built",
          items: [
            { label: "Tech Stack", link: "/journey/tech-stack" },
            { label: "Database used", link: "/journey/database" },
            { label: "Frontend, and Backend", link: "/journey/frontend-backend" },
            { label: "Testing", link: "/journey/testing" },
          ]
        },
        {
          label: "API Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
