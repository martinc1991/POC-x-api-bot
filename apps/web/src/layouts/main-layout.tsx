import { Link, Outlet } from 'react-router';

export function MainLayout() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <nav className="bg-gray-900 w-full flex items-center justify-center h-12 gap-8">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}
