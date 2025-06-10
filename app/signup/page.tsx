import Link from 'next/link';

export default function SigninForm() {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Left Image Panel */}
            <div className="w-full lg:w-5/6 md:h-100 h-64 lg:h-screen hidden md:block">
                <img
                    src="/marketing_backgroud_login.png"
                    alt="login background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right Login Panel */}
            <div className="w-full bg-primary flex items-center justify-center min-h-screen md:min-h-0">
                <div className="w-full max-w-2xl p-10">
                    {/* <div className="flex justify-center mb-8">
                        <img src="/9plus_logo.png" alt="9plus logo" className="h-12" />
                    </div> */}
                    <div className="text-center mb-20">
                        <h1 className="text-5xl font-semibold justify-center text-sidebar text-center mb-6 not-italic">Create account</h1>
                        <div className="text-center mb-4">
                            <p className="text-base text-accent font-medium mb-1">Build your brand with confidence.</p>
                            <p className="text-base text-accent font-medium">Join a smarter way to market.</p>
                        </div>
                    </div>
                    <form>
                        <input
                            id="username"
                            type="text"
                            placeholder="Username"
                            className="w-full mb-4 p-4 text-accent border-2 border-accent rounded-xl focus:outline-none focus:ring-2 focus:ring-sidebar"
                        />
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            className="w-full mb-4 p-4 text-accent border-2 border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-sidebar"
                        />
                        <input
                            id="confirm-password"
                            type="confirm-password"
                            placeholder="Confirm Password"
                            className="w-full mb-4 p-4 text-accent border-2 border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-sidebar"
                        />
                        <button
                            type="submit"
                            className="w-full bg-sidebar text-white py-3 rounded-lg hover:bg-blue-900 transition cursor-pointer"
                        >
                            Sign in
                        </button>
                    </form>
                    <p className="text-center text-sm text-sidebar mt-6">
                        Don't have an account? <Link href="/signin" className="text-blue-700 hover:underline">Sign In!</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}