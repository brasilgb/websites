import { SaveButton } from "@/Components/Admin/Buttons";
import FlashMessage from "@/Components/Admin/FlashMessage";
import { router, useForm, usePage } from "@inertiajs/react";
import React, { useState } from 'react'
import { IoEye, IoEyeOff } from "react-icons/io5";

interface AlterPasswordProps {
    customer: any;
}

const Alterarsenha = ({ customer }: AlterPasswordProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const { flash } = usePage().props;

    const {
        data,
        setData,
        patch,
        progress,
        processing,
        errors,
        setDefaults,
    } = useForm({
        avatar: null,
        password: "",
        password_confirmation: "",
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        router.post(`alterpassword/${customer.id}`, {
            _method: 'put',
            avatar: data.avatar,
            password: data.password,
            password_confirmation: data.password_confirmation
        });
    }
    // router.post(`/admin/posts/${post.id}`, {

    //   });
    return (
        <>
            <div className="p-2">
                <h1 className="text-base font-semibold border-b text-megb-red-primary/80 uppercase">Meu Perfil</h1>
            </div>
            <div className="md:p-4 p-2">
                <div className="">
                    <div className="text-base text-gray-600">
                        <span className="font-medium">Nome: </span>
                        <span className="font-semibold">{customer.name}</span>
                    </div>
                    <div className="text-base text-gray-600">
                        <span className="font-medium">E-mail: </span>
                        <span className="font-semibold">{customer.email}</span>
                    </div>
                </div>
                <div className="bg-white rounded-md border p-4 mt-4">
                    <FlashMessage message={flash} />
                    <form onSubmit={handleSubmit} autoComplete="off">


                        <div className="flex flex-col mt-4">
                            <label className="label-form" htmlFor="avatar">
                                Avatar
                            </label>
                            <input
                                id="avatar"
                                type="file"
                                onChange={(e: any) => setData('avatar', e.target.files[0])}
                                className="block w-full text-base text-gray-600
                                            file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md
                                            file:border-0 file:text-sm file:font-semibold
                                            file:bg-blue-700 file:text-gray-50 file:cursor-pointer
                                            hover:file:bg-blue-600 border border-gray-300 rounded-md bg-transparent"
                            />
                            {errors.avatar && (
                                <div className="text-red-500">{errors.avatar}</div>
                            )}
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-4 gap-2 mt-6">
                            <div className="flex flex-col">
                                <label
                                    className="label-form"
                                    htmlFor="password"
                                >
                                    Senha
                                </label>
                                <div className="flex items-center justify-between relative">
                                    <input
                                        id="password"
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        value={data.password}
                                        onChange={(e) =>
                                            setData(
                                                "password",
                                                e.target.value,
                                            )
                                        }
                                        className="input-form w-full"
                                    />
                                    <div
                                        className="absolute right-2 cursor-pointer text-gray-500"
                                        onClick={() =>
                                            setShowPassword(
                                                (state) => !state,
                                            )
                                        }
                                    >
                                        {showPassword ? (
                                            <IoEyeOff size={24} />
                                        ) : (
                                            <IoEye size={24} />
                                        )}
                                    </div>
                                </div>
                                {errors.password && (
                                    <div className="text-sm text-red-500">
                                        {errors.password}
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <label
                                    className="label-form"
                                    htmlFor="password_confirmation"
                                >
                                    Repita a senha
                                </label>
                                <div className="flex items-center justify-between relative">
                                    <input
                                        id="password_confirmation"
                                        type={
                                            showPassword2
                                                ? "text"
                                                : "password"
                                        }
                                        value={
                                            data.password_confirmation
                                        }
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value,
                                            )
                                        }
                                        className="input-form w-full"
                                    />
                                    <div
                                        className="absolute right-2 cursor-pointer text-gray-500"
                                        onClick={() =>
                                            setShowPassword2(
                                                (state) => !state,
                                            )
                                        }
                                    >
                                        {showPassword2 ? (
                                            <IoEyeOff size={24} />
                                        ) : (
                                            <IoEye size={24} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 py-2 px-2">
                            <SaveButton processing={processing} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Alterarsenha