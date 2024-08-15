
import { BackButton, SaveButton } from "@/Components/Admin/Buttons";
import { Card, CardBody, CardContainer, CardFooter, CardHeader, CardHeaderContent } from "@/Components/Admin/Card";
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/Admin/PageTop";
import { maskPhone } from "@/Utils";
import { Head, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { IoEye, IoEyeOff, IoPerson } from "react-icons/io5";
import { roleUser, statusUser } from "@/Utils/dataSelect";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const AddUser = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const { data, setData, post, progress, processing, errors } = useForm({
        name: "",
        email: "",
        roles: "",
        status: "",
        password: "",
        password_confirmation: "",
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        post(route("users.store"));
    }

    return (
        <AuthenticatedLayout>
            <Head title="Usuários" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <IoPerson size={30} />
                        <span className="ml-2">Usuários</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={[
                            { url: route('users.index'), label: "Usuários" },
                            { url: null, label: "Adicionar usuário" },
                        ]}
                    />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <BackButton url={route('users.index')} label={"Voltar"} />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <></>
                        </CardHeaderContent>
                    </CardHeader>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <CardBody className=" border-y border-gray-100">
                            <div className="px-3 my-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="nome"
                                        >
                                            Nome
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            className="input-form"
                                        />
                                        {errors.name && (
                                            <div className="text-sm text-red-500">
                                                {errors.name}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="email"
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            id="email"
                                            type="text"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            className="input-form"
                                        />
                                        {errors.email && (
                                            <div className="text-red-500">
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-6">
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

                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="roles"
                                        >
                                            Função
                                        </label>
                                        <select
                                            id="roles"
                                            value={data.roles}
                                            onChange={(e) =>
                                                setData("roles", e.target.value)
                                            }
                                            className="input-form"
                                        >
                                            <option value="">
                                                Selecione a função
                                            </option>
                                            {roleUser.map((roles: any) => (
                                                <option
                                                    key={roles?.value}
                                                    value={roles?.value}
                                                >
                                                    {roles?.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.roles && (
                                            <div className="text-sm text-red-500">
                                                {errors.roles}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="status"
                                        >
                                            Status
                                        </label>
                                        <select
                                            id="status"
                                            value={data.status}
                                            onChange={(e) =>
                                                setData(
                                                    "status",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        >
                                            <option value="">Selecione o status</option>
                                            {statusUser.map((stat: any) => (
                                                <option
                                                    key={stat?.value}
                                                    value={stat?.value}
                                                >
                                                    {stat?.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.status && (
                                            <div className="text-sm text-red-500">
                                                {errors.status}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <SaveButton />
                        </CardFooter>
                    </form>
                </CardContainer>
            </Card>
        </AuthenticatedLayout>
    );
};
export default AddUser;
