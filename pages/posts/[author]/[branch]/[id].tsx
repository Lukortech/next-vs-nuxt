import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

const AuthorDetails = () => {
    const router = useRouter();
    const [author, setAuthor] = useState<string>("");
    const [branch, setBranch] = useState<string>("");
    const [id, setId] = useState<string>("");
    
    useEffect(() => {
        if (router.isReady) {
            const { author, branch, id } = router.query;
            setAuthor(author as string)
            setBranch(branch as string)
            setId(id as string)
        }

    }, [router.isReady])

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    Hello {author}, your creations for:{branch}#{id}.
                </div>
            </div>
        </div>
    )
}

export default AuthorDetails;