import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/libs/prisma";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  console.log(params.id);
  try {
    const project = await prisma.project.findFirst({
      where: {
        id: Number(params.id),
      },
    });

    if (!project)
      return NextResponse.json({ message: "Project not found" }, { status: 404 });

    return NextResponse.json(project);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const deletedNote = await prisma.project.delete({
      where: {
        id: Number(params.id),
      },
    });
    if (!deletedNote)
      return NextResponse.json({ message: "Project not found" }, { status: 404 });

    return NextResponse.json(deletedNote);
  } catch (error) {
    console.log(error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Project not found",
          },
          {
            status: 404,
          }
        );
      }

      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const { name } = await request.json();

    const updatedNote = await prisma.project.update({
      where: {
        id: Number(params.id),
      },
      data: {
        name,
      },
    });

    return NextResponse.json(updatedNote);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Project not found",
          },
          {
            status: 404,
          }
        );
      }

      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}