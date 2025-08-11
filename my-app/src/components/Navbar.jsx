export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-5">
      <button className="text-7xl py-1.5 px-5">SKILLSWAP</button>
      <div className="flex gap-20">
        <button className="text-4xl px-10">home</button>
        <button className="text-4xl px-10">templates</button>
        <button className="text-4xl px-10">about</button>
        <button className="text-4xl px-10">pricing</button>
      </div>
    </nav>
  );
}
