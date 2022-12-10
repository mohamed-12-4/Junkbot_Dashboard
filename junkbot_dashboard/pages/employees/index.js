import Link from "next/link";


function Index(){
    return (
        <>
            <div className="container flex justify-center">
                <h1>Employees</h1>
            </div>

            <Link href="/add_employee">
                <h1>Add employee</h1>
            </Link>
        </>
    )
}

export default Index;