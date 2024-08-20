"use server";

import { getServerSession } from "next-auth";
import ProfileCard from "../components/ProfileCard";
import db from "@/app/db"


async function getBalance () {
const session = await getServerSession();

db.solWallet.findFirst({
    where:{
        userId:session?.profi
    }
})
}

export default async function  () {

    return <div>
        <ProfileCard/>
    </div>
}
