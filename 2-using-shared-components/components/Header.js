import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/sleep">
      <a style={linkStyle}>Sleep</a>
    </Link>
    <Link href="/multiform">
      <a style={linkStyle}>Multiform</a>
    </Link>
  </div>
);

export default Header;