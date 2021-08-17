import { useRouter } from "next/router";
import Link from "next/link";

const Mainpage = () => {
    const router = useRouter();
    console.log(router);

    return <div className="container mt-5">
    <div className="row">
        <div className="col-12">
        Mainpage - map of routes

<p>try visitin this link to see nested routing in action: <Link href="posts/dawda/awdad/dwad">
<a>
http://localhost:3000/posts/dawda/awdad/dwad
    </a></Link></p>
            </div>
        </div>
    </div>
}

export default Mainpage;