
import { BackButton, SaveButton } from "@/Components/Admin/Buttons";
import { Card, CardBody, CardContainer, CardFooter, CardHeader, CardHeaderContent } from "@/Components/Admin/Card";
import FlashMessage from "@/Components/Admin/FlashMessage";
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/Admin/PageTop";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { maskPhone } from "@/Utils";
import { roleUser, statusUser } from "@/Utils/dataSelect";
import { Head, useForm, usePage } from "@inertiajs/react";
import React, { useCallback, useEffect, useState } from "react";
import { IoEye, IoEyeOff, IoPeopleSharp, IoPerson } from "react-icons/io5";

interface ClientesProps {
    name: string;
    email: string;
    telefone: string;
    whatsapp: string;
    roles: string;
    status: string;
    password: string;
    password_confirmation: string;
}

const EditUser = ({ user }: any) => {
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
        name: user.name,
        email: user.email,
        telefone: user.telefone,
        whatsapp: user.whatsapp,
        roles: user.roles,
        status: user.status,
        password: "",
        password_confirmation: "",
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        patch(route("users.update", user.id));
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
                    <FlashMessage message={flash} />
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
                                <div className="grid grid-cols-6 gap-4">
                                    <div className="flex flex-col col-span-2">
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
                                    <div className="flex flex-col col-span-2">
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
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="telefone"
                                        >
                                            Celular
                                        </label>
                                        <input
                                            id="telefone"
                                            type="text"
                                            value={maskPhone(data.telefone)}
                                            onChange={(e) =>
                                                setData(
                                                    "telefone",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                            maxLength={15}
                                        />
                                        {errors.telefone && (
                                            <div className="text-sm text-red-500">
                                                {errors.telefone}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="whatsapp"
                                        >
                                            Whatsapp
                                        </label>
                                        <input
                                            id="whatsapp"
                                            type="text"
                                            value={maskPhone(data.whatsapp)}
                                            onChange={(e) =>
                                                setData(
                                                    "whatsapp",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                            maxLength={15}
                                        />
                                        {errors.whatsapp && (
                                            <div className="text-sm text-red-500">
                                                {errors.whatsapp}
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
                                            htmlFor="role"
                                        >
                                            Função
                                        </label>
                                        <select
                                            id="role"
                                            value={data.roles}
                                            onChange={(e) =>
                                                setData("roles", e.target.value)
                                            }
                                            className="input-form"
                                        >
                                            <option value="">
                                                Selecione a função
                                            </option>
                                            {roleUser.map((role: any) => (
                                                <option
                                                    key={role?.value}
                                                    value={role?.value}
                                                >
                                                    {role?.label}
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
                                            {statusUser.map((stat: any) => (
                                                <option
                                                    key={stat?.value}
                                                    value={stat?.value}
                                                >
                                                    {stat?.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <SaveButton processing={processing} />
                        </CardFooter>
                    </form>
                </CardContainer>
            </Card>
        </AuthenticatedLayout>
    );
};
export default EditUser;
