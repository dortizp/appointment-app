import { prisma } from "~/db.server";

export function getAppointment({ id }) {
  return prisma.appointment.findFirst({
    select: { id: true, day: true, time: true, available: true },
    where: { id },
  });
}

export function getAppointments() {
  return prisma.appointment.findMany();
}
