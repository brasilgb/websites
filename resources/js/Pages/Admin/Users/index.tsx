
import { AddButton, DeleteButton, EditButton, WhatsAppButton } from "@/Components/Admin/Buttons";
import { Card, CardBody, CardContainer, CardFooter, CardHeader, CardHeaderContent } from "@/Components/Admin/Card";
import FlashMessage from "@/Components/Admin/FlashMessage";
import InputSearch from "@/Components/Admin/InputSearch";
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/Admin/PageTop";
import Pagination from "@/Components/Admin/Pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/Admin/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { activePostByValue, roleUserByValue, statusUserByValue } from "@/Utils/functions";
import { Head, usePage } from "@inertiajs/react";
import moment from "moment";
import React, { Fragment } from "react";
import { IoPerson } from "react-icons/io5";
import { colorActive } from "../colorActive";

const Users = ({ users }: any) => {
    const { flash } = usePage().props;

    return (
        <AuthenticatedLayout>            
        <Head title="Usuários" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <IoPerson size={30} />
                        <span className="ml-2">Usuários</span>
                    </TitleTop>
                    <BreadCrumbTop links={[{ url: null, label: "Usuários" }]} />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <InputSearch
                                placeholder={"Buscar usuário"}
                                url={"users.index"}
                            />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <AddButton
                                url={route('users.create')}
                                label={"Usuário"}
                            />
                        </CardHeaderContent>
                    </CardHeader>
                    <FlashMessage message={flash} />
                    <CardBody>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>#</TableHead>
                                    <TableHead>Nome</TableHead>
                                    <TableHead>Telefone</TableHead>
                                    <TableHead>Função</TableHead>
                                    <TableHead>Ativo</TableHead>
                                    <TableHead>Cadastro</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users.data.map((usuario: any) => (
                                    <Fragment key={usuario.id}>
                                        <TableRow>
                                            <TableCell>{usuario.id}</TableCell>
                                            <TableCell>
                                                {usuario.name}
                                            </TableCell>
                                            <TableCell>
                                                {usuario.telefone}
                                            </TableCell>
                                            <TableCell>
                                                {roleUserByValue(usuario.roles)}
                                            </TableCell>
                                            <TableCell><div className={`flex items-center justify-center rounded-full w-8 h-8 shadow text-xs font-semibold drop-shadow-md uppercase ${colorActive(usuario.status)}`}>{statusUserByValue(usuario.status)}</div></TableCell>
                                            <TableCell>
                                                {moment(
                                                    usuario.created_at,
                                                ).format("DD/MM/YYYY")}
                                            </TableCell>
                                            <TableCell className="flex items-center justify-end gap-2">
                                                <WhatsAppButton url="" />
                                                <EditButton
                                                    url={route(
                                                        "users.edit",
                                                        usuario.id,
                                                    )}
                                                />
                                                <DeleteButton
                                                    url="users.destroy"
                                                    param={usuario.id}
                                                    identify={`o usuário ${usuario.name}`}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </CardBody>
                    <CardFooter>
                        <Pagination data={users} />
                    </CardFooter>
                </CardContainer>
            </Card>
        </AuthenticatedLayout>
    );
};
export default Users;
