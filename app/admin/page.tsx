import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/images/Logo kytos_page-0001.jpg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>

        <p className="text-16-semibold">Panel de administrador</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Bienvenido administrador 👋</h1>
          
        </section>

        <section className="admin-stat">
          <StatCard
            type="turnos"
            count={appointments.scheduledCount}
            label="Citas agendadas"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pendiente"
            count={appointments.pendingCount}
            label="Citas pendientes"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelado"
            count={appointments.cancelledCount}
            label="Citas canceladas"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};

export default AdminPage;
