
import QueryClientPV from "@/components/common/QueryClientPV"
import LoginForm from "@/components/login/LoginForm"

const page = () => {

  return (
    <main>
        <div className="flex min-h-full h-screen flex-col justify-center px-6 py-12 lg:px-8 rounded-md">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">Login to Dashboard</h2>
          </div>
          <div className="  mx-auto" >
            <QueryClientPV>
              <LoginForm />
            </QueryClientPV>
          </div>
        </div>
      </main>
  )
}

export default page