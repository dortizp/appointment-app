// import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader ({params}) {
    return json({id: params.appointmentId})
}
export default function Appointment() {
    const {id} = useLoaderData()
    return (
        <div>
            <h1>Appointment</h1>
        <p>Here we will show an appointment</p>
        <p>This appointment has id {id}</p>
        </div>
    )
}