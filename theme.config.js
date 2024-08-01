const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer style={{ display: 'block', marginTop: '4rem', padding: '2rem', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <small>
        <time>{YEAR}</time> © <a href="/" style={{ color: '#0074de', textDecoration: 'none' }}>Your Name</a>.
        <a href="/feed.xml" style={{ color: '#0074de', textDecoration: 'none', marginLeft: '1rem' }}>RSS</a>
      </small>
      <style jsx>{`
        small {
          display: block;
          color: #333;
        }
        a {
          color: #0074de;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        @media screen and (max-width: 480px) {
          footer {
            padding: 1rem;
          }
          small {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </footer>
  )
}
