import Link from 'next/link';

const Navigation = () => {
  const menuItems = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="flex items-center space-x-8">
      {menuItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="text-white hover:text-green-400 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation; 