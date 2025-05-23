import { NextRequest, NextResponse } from "next/server";
import {PrismaClient} from '@prisma/client'
import { createIssueSchema } from "../../validationSchemas";

const prisma = new PrismaClient();

export async function POST(request: NextRequest){
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.format(), {status: 404})

    const newIssue = await prisma.issue.create({
        data: { title: body.title, description: body.description}
    });

    return NextResponse.json(newIssue, {status: 201});
}

export async function GET() {
    const issue = await prisma.issue.findMany({

    });

    return NextResponse.json(issue);
}