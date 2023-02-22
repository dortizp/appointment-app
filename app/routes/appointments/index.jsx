import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import { getNoteListItems } from "~/models/note.server";
import AppointmentCardPreview from "../../shared/components/AppointmentCardPreview";
import CardList from "../../shared/components/CardList";
import Container from "../../shared/components/Container";

export async function loader({ request }) {
  const userId = await requireUserId(request);
  const noteListItems = await getNoteListItems({ userId });
  return json({ noteListItems });
}

export default function Appointments() {
  const data = useLoaderData();
  const user = useUser();

  return (
    <Container>

      <h1>Appointments List</h1>
      <p>Click in an appointment to see details</p>
      <CardList>
        {data.noteListItems.map((note) => (
          <AppointmentCardPreview>
            <Link to={note.id}>{note.title}</Link>
          </AppointmentCardPreview>
        ))}
      </CardList>
    </Container>
  );
}
