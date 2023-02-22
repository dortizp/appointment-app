import { json } from "@remix-run/node";
import {
  Link,
  Outlet,
  useLoaderData,
} from "@remix-run/react";

// import { getAppointments } from "../../models/appointment.server";
import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import { getNoteListItems } from "~/models/note.server";


// export async function loader() {
    // return json({ appointments: await getAppointments() });
// }

export async function loader({ request }) {
  const userId = await requireUserId(request);
  const noteListItems = await getNoteListItems({ userId });
  return json({ noteListItems });
}


export default function Appointments() {
  const data = useLoaderData();
  const user = useUser();

    return (
        <div>
            <h1>My Appointments</h1>
        <p>Here we will how a list of appointments</p>
        <ul>

              {data.noteListItems.map((note) => (
              <li key={note.id}>
                <Link
                  to={note.id}
                >
                  {note.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
    )
}