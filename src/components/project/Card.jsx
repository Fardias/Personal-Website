// eslint-disable-next-line react/prop-types
export default function Card({ title, href, img }) {
  return (
    <div>
      <div className="bg-slate-200 text-slate-800 text-lg p-3 rounded-sm">
        <picture>
          <img className="rounded-sm" src={img} alt="" />
        </picture>

        <div className="font-bold">
          <h1>{title}</h1>
          <a href={href}>Demo</a>
        </div>
      </div>
    </div>
  );
}
