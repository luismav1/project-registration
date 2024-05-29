
import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
interface Params {
    params: { id: string , projectId: string};
}

export async function GET(request: Request, { params }: Params ) {
    try {
    const task = await prisma.task.findMany({
        where: {
            projectId: Number(params.id)
        }
    })

    return NextResponse.json(task)
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, { status: 500 });
        }
    }
}
