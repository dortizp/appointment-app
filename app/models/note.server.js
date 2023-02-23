import { prisma } from "~/db.server";

export function getNote({ id, userId }) {
  return prisma.note.findFirst({
    where: { id, userId },
    select: { id: true, body: true, title: true , available: true},
  });
}

export function getNoteListItems({ userId }) {
  return prisma.note.findMany({
    where: { userId },
    select: { id: true, title: true },
    orderBy: { updatedAt: "desc" },
  });
}

export function createNote({ body, title, available, userId }) {
  return prisma.note.create({
    data: {
      title,
      body,
      available,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function deleteNote({ id, userId }) {
  return prisma.note.deleteMany({
    where: { id, userId },
  });
}
