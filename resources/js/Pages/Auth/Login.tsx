import { useEffect, FormEventHandler } from "react";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import feather from "feather-icons";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        feather.replace();

        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <div className="relative bg-black overflow-hidden min-h-screen flex items-center justify-center">
            <Head title="Login" />

            <video
                autoPlay
                muted
                loop
                className="min-w-full min-h-full absolute z-0"
            >
                <source src="/background_video_new.mp4" type="video/mp4" />
            </video>

            <div className="absolute z-1 bg-black opacity-80 w-full h-full" />

            <div className="z-2 absolute bg-white w-1/3 p-8 rounded-sm shadow-lg bg-opacity-85">
                <div className="font-semibold text-xl text-center">
                    Silakan Login
                </div>

                {status && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit}>
                    <div className="mt-6 flex flex-row items-center">
                        <i data-feather="mail" className="text-gray-500"></i>
                        <TextInput
                            type="email"
                            name="email"
                            value={data.email}
                            className="block w-full ml-4"
                            placeholder="Masukan email"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                    </div>
                    <InputError message={errors.email} className="mt-2" />

                    <div className="mt-4 flex flex-row items-center">
                        <i data-feather="lock" className="text-gray-500"></i>
                        <TextInput
                            type="password"
                            name="password"
                            value={data.password}
                            className="block w-full ml-4"
                            placeholder="Masukan password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                    </div>
                    <InputError message={errors.password} className="mt-2" />

                    <div className="flex items-center justify-center mt-6">
                        <PrimaryButton disabled={processing}>
                            Login
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
