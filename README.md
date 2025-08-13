# NestJS Korean Documentation Site Development

Create a Korean documentation website based on the NestJS official documentation structure (https://docs.nestjs.com/). This will be a Next.js application with shadcn/ui components, deployed on Vercel.

## Project Requirements

### Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **UI Library**: shadcn/ui components
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Language**: TypeScript

### Site Structure & Layout
1. **Header Navigation**
    - Logo/Brand
    - Main navigation menu (Introduction, Fundamentals, Techniques, etc.)
    - Search functionality (placeholder for now)
    - Language toggle (EN/KR - placeholder)
    - GitHub link

2. **Sidebar Navigation**
    - Collapsible sections matching NestJS docs structure
    - Current page highlighting
    - Smooth scrolling to sections

3. **Main Content Area**
    - Breadcrumb navigation
    - Article content with proper typography
    - Code syntax highlighting
    - Table of contents (right sidebar)
    - Previous/Next navigation

4. **Footer**
    - Links and copyright information

### Initial Content Strategy
**Phase 1: Hard-coded React Components**
- Create the basic layout and navigation structure
- Implement 3-5 key pages as React components with hard-coded Korean content
- Focus on: Introduction, Installation, First Steps, Controllers, Providers

**Phase 2: Markdown Rendering (Future)**
- Prepare the architecture to support markdown file rendering
- Consider using MDX or next-mdx-remote for future content management

### Key Features to Implement

1. **Responsive Design**
    - Mobile-friendly sidebar (collapsible hamburger menu)
    - Tablet and desktop optimized layouts

2. **Code Highlighting**
    - Use Prism.js or highlight.js
    - Support for TypeScript, JavaScript, JSON, Shell commands

3. **Component Library Integration**
    - Utilize shadcn/ui components: Button, Card, Tabs, Accordion, etc.
    - Consistent design system following modern documentation sites

4. **SEO Optimization**
    - Proper meta tags and Open Graph tags
    - Structured data for documentation

5. **Performance**
    - Image optimization
    - Code splitting
    - Fast page loads

### File Structure
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── (docs)/
│       ├── introduction/
│       ├── fundamentals/
│       ├── techniques/
│       └── [...slug]/
├── components/
│   ├── ui/ (shadcn components)
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   ├── docs/
│   │   ├── CodeBlock.tsx
│   │   ├── TableOfContents.tsx
│   │   └── Navigation.tsx
├── lib/
│   └── utils.ts
└── styles/
    └── globals.css
```

### Development Steps

1. **Initialize Project**
    - Create Next.js project with TypeScript
    - Install and configure shadcn/ui
    - Setup Tailwind CSS with custom theme

2. **Build Core Layout**
    - Create responsive header with navigation
    - Implement collapsible sidebar with NestJS doc structure
    - Design main content layout with proper spacing

3. **Content Components**
    - Create reusable components for documentation elements
    - Implement code syntax highlighting
    - Build table of contents component

4. **Sample Pages**
    - Create 5 key documentation pages in Korean
    - Ensure consistent styling and navigation
    - Add proper meta tags and SEO

5. **Testing & Optimization**
    - Test responsive design across devices
    - Optimize performance and loading speeds
    - Verify accessibility standards

### Content Guidelines
- Translate technical terms appropriately (keep some English terms when commonly used)
- Maintain code examples in original format but add Korean explanations
- Use consistent Korean technical writing style
- Include original English terms in parentheses when helpful

### Styling Preferences
- Clean, modern design similar to official NestJS docs
- Good contrast and readability
- Consistent spacing and typography
- Subtle animations and hover effects

Please start by setting up the project structure and creating the basic layout components. Focus on making the foundation solid and extensible for future content additions.