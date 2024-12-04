/**
 * Custom pages are used to add extra pages to your site.
 * They are useful for things like a changelog, a FAQ, etc.
 *
 * These pages will be available at /pages/:slug
 * If you want to add a link to the navigation menu, you can do it in the navigation.ts file
 *
 * If you want to hide the sidebar on a page, you can set hide_sidebar to true
 *
 */
export const customPages = [
  {
    title: "My Custom Page",
    slug: "my-custom-page",
    hide_sidebar: false,
    content: `<h1>Welcome to My Custom Page</h1>
    <p>This is my custom page, it can be used to add extra pages to your site.</p>
    <p>You can use HTML and CSS to style it.</p>
    <ul>
      <li>Feature 1: Easy to customize</li>
      <li>Feature 2: Responsive design</li>
      <li>Feature 3: SEO friendly</li>
    </ul>`,
  },
];
