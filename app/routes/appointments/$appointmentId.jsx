// import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import invariant from "tiny-invariant";

import { Link, useLoaderData } from "@remix-run/react";
import { deleteNote, getNote } from "~/models/note.server";
import { requireUserId } from "~/session.server";

import AppointmentCard from "../../shared/components/AppointmentCard";
import Container from "../../shared/components/Container";

export async function loader({ request, params }) {
  // return json({id: params.appointmentId})
  const userId = await requireUserId(request);
  invariant(params.appointmentId, "noteId not found");

  const note = await getNote({ userId, id: params.appointmentId});
  if (!note) {
    throw new Response("Not Found", { status: 404 });
  }
  console.log(note);
  return json({ note });
}

export default function Appointment() {
  const data = useLoaderData();
  console.log(data)
  return (
    <Container>
      <Link to="/appointments">
        <span>-- Back to appointment list</span>
      </Link>
      <AppointmentCard>
        <p className="text-3xl font-bold">Appointment</p>
        <p className="text-xl">Appointment details for {data.note.title}</p>

        {data.note ? <p>{data.note.body}</p> : <p>no notes</p>}
        {data.note ? <p>available: {data.note.available ? "si" : "no"}</p> : <p>no notes</p>}
      </AppointmentCard>
    </Container>
  );
}
