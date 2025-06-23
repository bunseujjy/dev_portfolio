export const Nextjs_SSR = `
<article style="font-family: Arial, sans-serif; line-height: 1.8;  padding: 2rem; color: #fff;">
  <header style="border-bottom: 2px solid #64ffda; margin-bottom: 2rem;">
    <h1 style="font-size: 2.5rem; color: #64ffda;">Understanding SSR vs CSR in Next.js Through a Book Listing App</h1>
    <p style="color: #8892b0;">June 22, 2025 • by Test Ing</p>
  </header>

  <section>
    <p>
      When I first got into frontend development, concepts like <strong>Server-Side Rendering (SSR)</strong> and <strong>Client-Side Rendering (CSR)</strong> were confusing. The documentation helped — but only a little. It wasn’t until I built small apps myself that things started to make sense.
    </p>

    <p>
      In this post, we’ll explore SSR and CSR using a simple <strong>book listing app</strong> in <strong>Next.js</strong>. You’ll see exactly how each rendering method works, how it affects performance and SEO, and how you can apply it to your own projects.
    </p>

    <h2 style="color: #64ffda;">🚀 Project Setup</h2>
    <p>First, let’s create a fresh Next.js app:</p>

    <pre style="background: #0f172a; padding: 1rem; border-radius: 10px; border: 1px solid#334155; margin-block: 10px;">yarn create next-app nextjs-books-app
cd nextjs-books-app
yarn dev</pre>

    <p>We’ll use a public book API for this example:</p>
    <pre style="background: #0f172a; padding: 1rem; border-radius: 10px; border: 1px solid#334155; margin-block: 10px;">https://example-data.draftbit.com/books?_limit=10</pre>

    <h2 style="color: #64ffda;">🔍 Client-Side Rendering (CSR)</h2>
    <p>
      Let's start with CSR. In this approach, the page loads a blank shell first, and data is fetched from the browser using <code>useEffect</code>.
    </p>

    <pre style="background: #0f172a; padding: 1rem; border-radius: 10px; border: 1px solid#334155; margin-block: 10px;">
import { useEffect, useState } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://example-data.draftbit.com/books?_limit=10")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    &lt;div&gt;
      {books.map(book => (
        &lt;div key={book.id}&gt;
          &lt;h3&gt;{book.title}&lt;/h3&gt;
          &lt;p&gt;{book.authors}&lt;/p&gt;
        &lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}
    </pre>

    <p>
      With CSR, the initial HTML sent to the browser is almost empty. Data appears only after React has mounted and fetched it from the API.
    </p>

    <h3>🔎 View Page Source</h3>
    <p>
      If you right-click and choose "View Page Source", you won’t see any of the book titles in the HTML — because they're rendered client-side. This is bad for SEO and can delay the first contentful paint on slower networks.
    </p>

    <h2 style="color: #64ffda;">💡 Simulate a Slow Connection</h2>
    <p>
      Open DevTools (F12) → Network → Set throttling to “Slow 3G” → Refresh the page.
      <br />You’ll likely see a blank screen before the books show up. This is typical of CSR.
    </p>

    <h2 style="color: #64ffda;">⚙️ Now Let's Try SSR (Server-Side Rendering)</h2>
    <p>
      Next.js gives you a powerful tool: <code>getServerSideProps</code>. It runs on the server during each request, fetches the data, and injects it into your page.
    </p>

    <pre style="background: #0f172a; padding: 1rem; border-radius: 10px; border: 1px solid#334155; margin-block: 10px;">
export async function getServerSideProps() {
  const res = await fetch("https://example-data.draftbit.com/books?_limit=10");
  const data = await res.json();

  return {
    props: {
      books: data,
    },
  };
}

export default function Home({ books }) {
  return (
    &lt;div&gt;
      {books.map(book => (
        &lt;div key={book.id}&gt;
          &lt;h3&gt;{book.title}&lt;/h3&gt;
          &lt;p&gt;{book.authors}&lt;/p&gt;
        &lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}
    </pre>

    <p>
      Now refresh the page and view the source again — you’ll see the full HTML content, including all the book titles. This is great for SEO and faster load times.
    </p>

    <h2 style="color: #64ffda;">📊 Comparing CSR vs SSR</h2>
    <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
      <thead style="background-color: #e5f9f4; color: #000;">
        <tr>
          <th style="border: 1px solid #64ffda; padding: 0.5rem;">Feature</th>
          <th style="border: 1px solid #64ffda; padding: 0.5rem;">CSR</th>
          <th style="border: 1px solid #64ffda; padding: 0.5rem;">SSR</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #ccc; padding: 0.5rem;">SEO Friendly</td>
          <td style="border: 1px solid #ccc; padding: 0.5rem;">❌</td>
          <td style="border: 1px solid #ccc; padding: 0.5rem;">✅</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ccc; padding: 0.5rem;">Initial Load</td>
          <td style="border: 1px solid #ccc; padding: 0.5rem;">⏳ Depends on network</td>
          <td style="border: 1px solid #ccc; padding: 0.5rem;">⚡ Fast and ready</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ccc; padding: 0.5rem;">Developer Effort</td>
          <td style="border: 1px solid #ccc; padding: 0.5rem;">Simple</td>
          <td style="border: 1px solid #ccc; padding: 0.5rem;">Slightly more setup</td>
        </tr>
      </tbody>
    </table>

    <h2 style="color: #64ffda;">🔁 Dynamic Routes with SSR</h2>
    <p>
      Create <code>pages/book/[id].js</code> to render each book's details. We'll use dynamic routing and SSR here too:
    </p>

    <pre style="background: #0f172a; padding: 1rem; border-radius: 10px; border: 1px solid#334155; margin-block: 10px;">
export async function getServerSideProps({ params }) {
  const res = await fetch(
    \`https://example-data.draftbit.com/books/\${params.id}\`
  );
  const book = await res.json();

  return {
    props: {
      book,
    },
  };
}

export default function BookDetail({ book }) {
  return (
    &lt;div&gt;
      &lt;h1&gt;{book.title}&lt;/h1&gt;
      &lt;p&gt;By {book.authors}&lt;/p&gt;
      &lt;p&gt;{book.description}&lt;/p&gt;
    &lt;/div&gt;
  );
}
    </pre>

    <p>
      This will render a book’s detail page server-side for each ID and send pre-rendered HTML to the user.
    </p>

    <h2 style="color: #64ffda;">🧠 Final Thoughts</h2>
    <p>
      <strong>CSR</strong> is lightweight and useful for dashboards or private apps where SEO isn’t important.
      <br />
      <strong>SSR</strong> is best for blogs, eCommerce sites, content-rich platforms, or anything needing great SEO.
    </p>

    <p>
      Next.js gives you flexibility to mix both strategies — and that’s what makes it such a powerful framework.
    </p>

    <p>
      You can view the full code for this app (including styles and routing) on GitHub:
      <br />
      👉 <a href="https://github.com/yourusername/nextjs-book-ssr" target="_blank" style="color: #64ffda;">nextjs-book-ssr on GitHub</a>
    </p>
  </section>

  <footer style="margin-top: 3rem; border-top: 1px solid #ccd6f6; padding-top: 1rem; color: #8892b0;">
    <p>Thanks for reading! Feel free to reach out if you’d like to build something cool together.</p>
  </footer>
</article>

`