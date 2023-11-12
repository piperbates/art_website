import Link from "next/link"

const NotFound = () => {
    <div>
        <h1>Oops, we couldn't find this page</h1>
        <Link href="/">Go back home</Link>
    </div>
}

export default NotFound;