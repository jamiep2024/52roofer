export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-6">
          {/* Add your navigation here */}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          {/* Add your footer content here */}
        </div>
      </footer>
    </div>
  );
}
