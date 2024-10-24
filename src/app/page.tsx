
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center gap-6 bg-slate-400 ">

  
  
  <Link href="/"> Home  </Link>

  <Link href="/about"> About </Link>

  <Link href="/career"> Career </Link>

  <Link href="/contact-us"> Contact us </Link>
 
 
    </div>
    
    
  );
}
