import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function POST(request: Request) {
    try {
        const { title,done, projectId } = await request.json();

        const newTask = await prisma.task.create({
            data: {
                title,
                done,
                projectId
            }
        });

        return NextResponse.json(newTask)
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, { status: 500 });
        };
    };
};