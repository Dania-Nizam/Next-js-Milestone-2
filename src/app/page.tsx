

import Link from "next/link";

export default function Home() {
  return (
    <div>
    
      <div className=" flex gap-6 justify-center bg-slate-500">

<Link href="/"> Home  </Link>

<Link href="/about"> About </Link>

<Link href="/career"> Career </Link>

<Link href="/contact-us"> Contact us </Link>


  </div>
  <h1>Home Page</h1>
    </div>
    
  );
}
