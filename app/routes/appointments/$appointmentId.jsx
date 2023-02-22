// import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import { deleteNote, getNote } from "~/models/note.server";
import { requireUserId } from "~/session.server";

export async function loader ({request, params}) {
    // return json({id: params.appointmentId})
  const userId = await requireUserId(request);
  invariant(params.appointmentId, "noteId not found");

  const note = await getNote({ userId, id: params.noteId });
  if (!note) {
    throw new Response("Not Found", { status: 404 });
  }
  console.log(note)
  return json({ note });
}

export default function Appointment() {
    const data = useLoaderData()
    return (
        <div>
            <h1>Appointment</h1>
        <p>Here we will show an appointment</p>

      {data? (
        <p>{data.note.body}</p>
      ):
        <p>no notes</p>
      }
        {/* <p>This appointment has id {data.note.id}</p> */}
        {/* <p>detail: {data.note.body}</p> */}
        </div>
    )
}