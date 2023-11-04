// eslint-disable-next-line react/prop-types
export default function Card({ title, href, img, alt,target }) {
  return (
    <div className="">
      <div className="bg-slate-400 text-slate-800 text-lg p-3 rounded-xl">
        <div className="">
          <img className="rounded-xl w-full h-[200px] object-cover" src={img} alt={alt} />
        </div>

        <div className="font-bold p-2">
          <h1>{title}</h1>
          <a className="transition-all duration-300 ease-in-out hover:pl-4 hover:opacity-50" href={href} target={target} rel="noreferrer">Demo {">"}</a>
        </div>
      </div>
    </div>
  );
}
