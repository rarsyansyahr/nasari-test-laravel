import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-purple-700 to-blue-500 flex items-center justify-center rounded-lg pt-6 pb-6 pr-8 pl-8">
                        <div className="text-white text-center">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                                Selamat datang di Nasari Digital
                            </h1>
                            <div className="text-lg md:text-xl lg:text-2xl mt-6">
                                " Solusi Keuangan di Era Digital "
                            </div>
                        </div>

                        <img
                            src="/jumbotronImage.png"
                            alt="Nasari Digital Jumbotron"
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
