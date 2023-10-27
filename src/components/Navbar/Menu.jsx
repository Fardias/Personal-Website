// eslint-disable-next-line react/prop-types
export default function Menu({ title, href, onClick }) {
  return (
    <li onClick={onClick} className="hover:opacity-50">
      <a href={href}>{title}</a>
    </li>
  );
}
