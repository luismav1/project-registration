import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
    try {
        const projects = await prisma.project.findMany()

        return NextResponse.json(projects);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, { status: 500 });
        }
    }
}
export async function POST(request: Request) {

    try {
        const { name } = await request.json();

        const newproject = await prisma.project.create({
            data: {
                name,
            }
        })

        return NextResponse.json(newproject);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, { status: 500 });
        }
    }
}