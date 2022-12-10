import Link from "next/link";


function Index(){
    return (
        <>
            <div className="container flex justify-center">
                <h1>Employees</h1>
            </div>

            <Link href="/employees/addemployee">
                <h1>Add employee</h1>
            </Link>
        </>
    )
}

export default Index;